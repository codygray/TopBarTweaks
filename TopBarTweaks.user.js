// ==UserScript==
// @name        TopBarTweaks
// @description Visual and accessibility tweaks to the new topbar on Stack Exchange sites.
// @author      Cody Gray
// @version     0.1
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

// Apply custom CSS
GM_addStyle(GM_getResourceText('TBTCustomCSS'));

// Make the "Stack Exchange" logo in the top-left corner a link to the current site.
$('.top-bar .-logo').replaceWith(function()
{
  return $('<a/>', {
                     'class': '-logo js-gps-track',
                      href   : $('.top-bar .-dialog-container .siteSwitcher-dialog a.current-site-link').attr('href'),
                      style  : 'margin:0;padding:0;',
                      html   : '<img src="' + $('head link[rel*="apple-touch-icon"]').attr('href') + '" height="40">'
                    });
});

// Reorder notification/navigation icons, putting mod stuff in the center.
$('.top-bar .secondary-nav .-list').each(function()
{
  var elem = $(this);
  var inbox = elem.find('.js-inbox-button').parent();
  inbox.css('order', '3');
  elem.find('.js-achievements-button').parent().css('order', '4');
  elem.find('.js-review-button').parent().css('order', '5');
  elem.find('.js-site-switcher-button').parent().css('order', '6');
  var temp = elem.find('.js-mod-inbox-button');
  if (temp.length !== 0)
  {
    temp.parent().css('order', '1');
  }
  temp = elem.find('a[href="/admin/dashboard"]');
  if (temp.length !== 0)
  {
    temp = temp.parent();
    temp.css('order', '2');
    inbox.addClass('_has-divider');
  }
});

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
