# TopBarTweaks

### by Cody Gray ([licensed](LICENSE) under [CC BY](http://creativecommons.org/licenses/by/4.0/))

This is a user-script that applies visual and accessibility tweaks to [the new topbar for the Stack Exchange network](https://meta.stackexchange.com/questions/300829/new-top-bar-is-coming-to-the-stack-exchange-network).

The changes here are heavily inspired by the whinings of Stack Exchange network moderators, both in private conversations and in the answers to the announcement post on Meta. In particular, the accessibility complaints raised by [Monica Cellio](https://meta.stackexchange.com/a/300834).

A user-script is obviously not ideal for any number of reasons, including conditional availability, limited browser support, and decreases in rendering speed. However, it's the best we can do for now, unless and until Stack Exchange decides to heed the community's wishes and fix the problems.

![Example screenshot of the tweaked topbar on Meta Stack Exchange for a user without moderator privileges](MSE_nomod.png)

### Supported Tweaks:

 - Limit the width of the topbar to prevent clipping of items on the right-hand side by the scroll bar, especially when using narrow browser windows.
 - Increase the font size on the numerical notification badges (inbox, achievements, reputation, badges, and moderator flags).
 - Decrease the height of the search box slightly, to make it less imposing and awkward-looking.
 - Replace the static "Stack Exchange" logo in the top-left corner with an image of the current site's logo (based on the `apple-touch-icon`, which is large enough that it can be scaled down without looking horrible) that also serves as a link to the current site's homepage (like the Stack Overflow logo in its topbar).
 - Swap the order of the gravatar/reputation and navigation/alerts icons, as well as reorder the navigation/alerts icons to put the moderator tools in the center.
 
   Yes, this works fine on sites where you are not a moderator. It even brings some degree of visual and design consistency, because the items you *do* have are more likely to stay in the same places when switching sites.
  
 - Customize the moderator inbox pop-up menu to add quick links to some commonly accessed pages: links, history, and flags.
 
   The latest design *did* add a link here to the history dashboard, but on Stack Overflow, that's quite slow to load when you just want to navigate immediately away to one of the other tabs.
 
   Again, obviously, this tweak is moderator-only, but it will simply be inactive on sites where you don't have moderator privileges.
 
### Optional Tweaks:

 - Making the top bar "sticky", so it moves with you as you scroll down the page.

   To turn this on, open the `TopBarTweaks.css` file, and uncomment the `.top-bar` style definition (see comments).

 - Making the font weight bold for the numerical notification badges.
 
   To turn this on, open the `TopBarTweaks.css` file, and uncomment the style definitions labeled "do you want it bold?".

### Not (Yet) Implemented:

 - Provide a better interface for configurable options than having to edit the CSS and JS code files directly.
 - Make the "Stack Exchange" logo in the top-left show the site-switcher pop-up menu, instead of just being a redundant link to the site's home page.
 - Tweaking the appearance of the topbar (*i.e.*, icon and background color) so it looks the same on Stack Overflow as it does on the rest of the Stack Exchange network sites.
 - Testing the "sticky" option to see if it actually works well in edge cases.

   I don't use this (in fact, I hate it), so I won't be doing or testing this myself.
