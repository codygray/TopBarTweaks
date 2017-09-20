// ==UserScript==
// @name        TopBarTweaks
// @description Visual and accessibility tweaks to the new topbar on Stack Exchange sites.
// @author      Cody Gray
// @version     0.2
// @namespace   https://github.com/codygray
// @resource    TBTCustomCSS TopBarTweaks.css
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @match       *://*.stackexchange.com/*
// @match       *://*.superuser.com/*
// @match       *://*.serverfault.com/*
// @match       *://*.askubuntu.com/*
// @match       *://*.stackapps.com/*
// @match       *://*.mathoverflow.net/*
// ==/UserScript==

// Apply custom CSS.
GM_addStyle(GM_getResourceText('TBTCustomCSS'));;

// Tweak notification/navigation icons.
var notifyIcons = $('.top-bar .secondary-nav ol.-list');

var inbox = notifyIcons.find('.js-inbox-button');
inbox.attr('href', '/topbar/inbox');
var inboxParent = inbox.parent();
inboxParent.css('order', '3'); 
inboxParent.addClass('_has-divider');

var achievements = notifyIcons.find('.js-achievements-button');
achievements.attr('href', '/topbar/achievements');
achievements.parent().css('order', '4');

var review = notifyIcons.find('.js-review-button');
review.parent().css('order', '5');

var siteSwitcher = notifyIcons.find('.js-site-switcher-button');
var siteSwitcherParent = siteSwitcher.parent();
siteSwitcherParent.css('order', '1');

// Moderator stuff.
var mod = notifyIcons.find('.js-mod-inbox-button');
if (mod.length !== 0)
{
  var modDiamond = mod;
  modDiamond.attr('href', '/topbar/mod-inbox');
  modDiamond.parent().css('order', '6');
  
  // Moderator flags don't live-update, so we're safe just checking for this on page load.
  var modFlags = notifyIcons.find('a[href="/admin/dashboard"]');
  if (modFlags.length !== 0)
  {
    modFlags.parent().css('order', '7');
  }
  
   // Add the "help" icon back.
   // (HTML copied from Meta Stack Exchange when not logged in.)
   siteSwitcherParent.after('<li class="-item" id="TBT-help" style="order: 2;"><a href="#" class="-link js-help-button" title="Help Center and other resources"><svg aria-hidden="true" class="svg-icon iconHelp" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23zM11.77 8a5.8 5.8 0 0 1-1.02.91l-.53.37c-.26.2-.42.43-.5.69a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.03-.66.12-1.21.4-1.66a5.29 5.29 0 0 1 1.43-1.22c.16-.12.28-.25.38-.39a1.34 1.34 0 0 0 .02-1.71c-.24-.31-.51-.46-1.03-.46-.51 0-.8.26-1.02.6-.21.33-.18.73-.18 1.1H5.75c0-1.38.35-2.25 1.1-2.76.52-.35 1.17-.5 1.93-.5 1 0 1.79.18 2.49.71.64.5.98 1.18.98 2.12 0 .57-.2 1.05-.48 1.44z"></path></svg></a></li>');
}

// Customize the quick-links on the moderator inbox drop-down menu.
$('.top-bar .-dialog-container').on('DOMNodeInserted', function(e)
{
  var parent = $(e.target);
  if (parent.hasClass('modInbox-dialog'))
  {
    var child = $('.header .-right');
    child.empty();
    child.append('<a href="/admin/links">links</a>');
    child.append(' • ');
    child.append('<a href="/admin">history</a>');
    child.append(' • ');
    child.append('<a href="/admin/dashboard">flags</a>');
  }
});
