// Opens the community Slack invite link in a headless browser and requires the
// Slack join page. This is the only way to tell a usable invite link from a dead
// one: a shared invite link that is expired, revoked, or has used up its 400
// sign-ups answers the same 403 to scripted requests as a working one, but a
// browser gets HTTP 200 and a title that differs.
//
//   usable invite -> "Join <workspace> on Slack | Slack"
//   dead invite   -> "Create Account | Slack" (Slack falls back to signup)
//
// Asserting the join page (rather than rejecting one known bad title) means any
// other state Slack may render also fails the check.

import { chromium } from 'playwright';

const inviteUrl = process.env.INVITE_URL;
const JOIN_PAGE_TITLE = /^Join .+ on Slack/;
const ATTEMPTS = 3;
const RETRY_WAIT_MS = 10_000;

if (!inviteUrl) {
  console.log('::error::INVITE_URL is not set.');
  process.exit(1);
}

const browser = await chromium.launch();
let lastSeen = 'no response';

for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
  const page = await browser.newPage();
  let status = 'n/a';

  try {
    const response = await page.goto(inviteUrl, { waitUntil: 'domcontentloaded', timeout: 45_000 });
    status = response?.status() ?? 'n/a';

    // The join page is rendered client side, so wait for the title rather than
    // reading it the moment navigation settles.
    await page.waitForFunction(
      (pattern) => new RegExp(pattern).test(document.title),
      JOIN_PAGE_TITLE.source,
      { timeout: 20_000 },
    );

    console.log(`attempt ${attempt}: HTTP ${status} / title "${await page.title()}" -- the invite link still opens the Slack join page.`);
    await browser.close();
    process.exit(0);
  } catch {
    const title = await page.title().catch(() => '(unavailable)');
    const text = await page
      .evaluate(() => document.body?.innerText ?? '')
      .catch(() => '');
    lastSeen = `HTTP ${status} / title "${title}"`;
    console.log(`attempt ${attempt}: ${lastSeen}`);
    if (text.trim()) {
      console.log(`  page text: ${text.replace(/\s+/g, ' ').trim().slice(0, 300)}`);
    }
  } finally {
    await page.close();
  }

  if (attempt < ATTEMPTS) {
    await new Promise((resolve) => setTimeout(resolve, RETRY_WAIT_MS));
  }
}

await browser.close();

console.log(
  `::error::${inviteUrl} no longer opens the Slack join page (last seen: ${lastSeen}). ` +
    'The invite link is most likely expired, revoked, or out of sign-ups (one link accepts 400). ' +
    'Reissue it in Slack (workspace menu -> Invite people -> Edit link settings -> Never expires) ' +
    'and update docs/.vuepress/public/slack/index.html.',
);
process.exit(1);
