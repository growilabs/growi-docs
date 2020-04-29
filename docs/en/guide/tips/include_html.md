# Include HTML

You can directly embed HTML code into your GROWI page.
Simply type your HTML into the editing screen.

Try copy-pasting the following HTML code into a new
wiki page:
```markdown
<div class="row">
    <div class="col-sm-6" style="background-color:#EEFFFF">
        left side
    </div>
    <div class="col-sm-6" style="background-color:#FFFFCC">
        right side
    </div>
</div>

Embed HTML in GROWI page
```

You should see the following page created from the above
HTML code:

![html](./images/include_html.png)

## Embed YouTube videos using iframes

You can embed YouTube videos into your wiki pages using
iframes as follows:

```markdown
<iframe width="30%" height="30%" src="https://www.youtube.com/embed/YE7VzlLtp-4h"
frameborder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

(c) copyright 2008, Blender Foundation / www.bigbuckbunny.org
```

By adding the above iframe description into your wiki page,
you can add a YouTube video as shown below.

![iframe](./images/include_iframe.png)