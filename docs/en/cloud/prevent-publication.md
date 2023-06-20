# Safety Feature to Prevent Unintended Publication
## Overview
GROWI.cloud has a safety feature to prevent private GROWI from being unintentionally made public.

## Purpose
To prevent information entered into GROWI by customers from being unintentionally disclosed to the public due to mishandling.

## Function Description
This function stops GROWI when GROWI is changed to a public setting, even if it has been started with a private setting at least once in the past.

Once GROWI is deactivated, it can no longer be activated by the customer unless the customer subscribes to one of the "Plans under which GROWI is set to private" listed below.

## List of Plans for Which GROWI is Set to Private
GROWI activated by organizations subscribing to the following plans will be set to Private.
- Personal Plans
    - Individual
    - Duo
    - Trio
- Corporate Plans
    - Startup
    - Plus
    - Premium

## Plans Where GROWI will Use the Public Setting
- Free Plan

## Cases in Which GROWI Cannot be Started
In the following cases, this function will be activated and GROWI will not be able to start.

### Case ①: Plan Change to a Free Plan (downgrade) by Customer Operation
1. An organization subscribed to the Plus Plan starts and uses GROWI.
1. Downgrading your organization to the Free Plan

### Case ②: Forced Downgrade to the Free Plan due to Payment Failure
- If payment fails, GROWI will be suspended and the plan will be forcibly downgraded to a free plan.

### Case ③: Trial Ends Without Registering a Payment Method
- If no payment method is registered at the end of the trial, the status will change to "payment failure" and the plan will be downgraded to a free plan and the GROWI in question will be suspended.
- For more information about trials, please see below
    - [/For Philippines/Service/Trial](https://stg-help.growi.cloud/63a2a0ce938f53be567b2c81)




## Change GROWI Setting on Forced Startup

For GROWI that has been forcibly started, you can change the settings such as the version and domain by doing one of the following.  
Normally, you cannot change settings or restart GROWI during forced startup.

### 1.Migrating to a New GROWI
By deleting the GROWI that is under forced activation and re-creating a new GROWI, you will be able to use a GROWI that is not restricted from updating.  

### 2.Upgrade to a Paid Plan
By signing up for a paid plan, you will be able to use GROWI, which allows you to change settings.

Please refer to the following for the procedure to change plans.
  - [Plan Change](/en/cloud/planchange.html)