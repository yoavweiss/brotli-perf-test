/*	
 *	jQuery dotdotdot 1.6.7
 *	
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

!function(a,b){function d(a,b,c){var d=a.children(),e=!1;a.empty();for(var f=0,h=d.length;h>f;f++){var i=d.eq(f);if(a.append(i),c&&a.append(c),g(a,b)){i.remove(),e=!0;break}c&&c.detach()}return e}function e(b,c,d,h,i){var j=b.contents(),k=!1;b.empty();for(var l="table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",m=0,n=j.length;n>m&&!k;m++){var o=j[m],p=a(o);"undefined"==typeof o||3==o.nodeType&&0==a.trim(o.data).length||(b.append(p),i&&b[b.is(l)?"after":"append"](i),g(d,h)&&(k=3==o.nodeType?f(p,c,d,h,i):e(p,c,d,h,i),k||(p.remove(),k=!0)),k||i&&i.detach())}return k}function f(b,c,d,e,f){var i=b[0];if(!i)return!1;var l=k(i),n=-1!==l.indexOf(" ")?" ":"\u3000",o="letter"==e.wrap?"":n,p=l.split(o),q=-1,r=-1,s=0,t=p.length-1;for(e.fallbackToLetter&&0==t&&t==s&&(o="",p=l.split(o),t=p.length-1);t>=s&&(0!=s||0!=t);){var u=Math.floor((s+t)/2);if(u==r)break;r=u,j(i,p.slice(0,r+1).join(o)+e.ellipsis),g(d,e)?t=r:(q=r,s=r)}if(-1==q||1==p.length&&0==p[0].length){var v=b.parent();b.remove();var w=f&&f.closest(v).length?f.length:0;v.contents().length>w?i=m(v.contents().eq(-1-w),c):(i=m(v,c,!0),w||v.remove()),i&&(l=h(k(i),e),j(i,l),w&&f&&a(i).parent().append(f))}else l=h(p.slice(0,q+1).join(o),e),j(i,l);return!0}function g(a,b){return a.innerHeight()>b.maxHeight}function h(b,c){for(;a.inArray(b.slice(-1),c.lastCharacter.remove)>-1;)b=b.slice(0,-1);return a.inArray(b.slice(-1),c.lastCharacter.noEllipsis)<0&&(b+=c.ellipsis),b}function i(a){return{width:a.innerWidth(),height:a.innerHeight()}}function j(a,b){a.innerText?a.innerText=b:a.nodeValue?a.nodeValue=b:a.textContent&&(a.textContent=b)}function k(a){return a.innerText?a.innerText:a.nodeValue?a.nodeValue:a.textContent?a.textContent:""}function l(a){do a=a.previousSibling;while(a&&1!==a.nodeType&&3!==a.nodeType);return a}function m(b,c,d){var f,e=b&&b[0];if(e){if(!d){if(3===e.nodeType)return e;if(a.trim(b.text()))return m(b.contents().last(),c)}for(f=l(e);!f;){if(b=b.parent(),b.is(c)||!b.length)return!1;f=l(b[0])}if(f)return m(a(f),c)}return!1}function n(b,c){return b?"string"==typeof b?(b=a(b,c),b.length?b:!1):b.jquery?b:!1:!1}function o(a){for(var b=a.innerHeight(),c=["paddingTop","paddingBottom"],d=0,e=c.length;e>d;d++){var f=parseInt(a.css(c[d]),10);isNaN(f)&&(f=0),b-=f}return b}function p(a,b){return a?(b="string"==typeof b?"dotdotdot: "+b:["dotdotdot:",b],"undefined"!=typeof window.console&&"undefined"!=typeof window.console.log&&window.console.log(b),!1):!1}if(!a.fn.dotdotdot){a.fn.dotdotdot=function(b){if(0==this.length)return b&&b.debug===!1||p(!0,'No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){a(this).dotdotdot(b)});var f=this;f.data("dotdotdot")&&f.trigger("destroy.dot"),f.data("dotdotdot-style",f.attr("style")||""),f.css("word-wrap","break-word"),"nowrap"===f.css("white-space")&&f.css("white-space","normal"),f.bind_events=function(){return f.bind("update.dot",function(b,c){b.preventDefault(),b.stopPropagation(),j.maxHeight="number"==typeof j.height?j.height:o(f),j.maxHeight+=j.tolerance,"undefined"!=typeof c&&(("string"==typeof c||c instanceof HTMLElement)&&(c=a("<div />").append(c).contents()),c instanceof a&&(h=c)),q=f.wrapInner('<div class="dotdotdot" />').children(),q.empty().append(h.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var i=!1,l=!1;return k.afterElement&&(i=k.afterElement.clone(!0),i.show(),k.afterElement.remove()),g(q,j)&&(l="children"==j.wrap?d(q,j,i):e(q,f,q,j,i)),q.replaceWith(q.contents()),q=null,a.isFunction(j.callback)&&j.callback.call(f[0],l,h),k.isTruncated=l,l}).bind("isTruncated.dot",function(a,b){return a.preventDefault(),a.stopPropagation(),"function"==typeof b&&b.call(f[0],k.isTruncated),k.isTruncated}).bind("originalContent.dot",function(a,b){return a.preventDefault(),a.stopPropagation(),"function"==typeof b&&b.call(f[0],h),h}).bind("destroy.dot",function(a){a.preventDefault(),a.stopPropagation(),f.unwatch().unbind_events().empty().append(h).attr("style",f.data("dotdotdot-style")||"").data("dotdotdot",!1)}),f},f.unbind_events=function(){return f.unbind(".dot"),f},f.watch=function(){if(f.unwatch(),"window"==j.watch){var b=a(window),c=b.width(),d=b.height();b.bind("resize.dot"+k.dotId,function(){c==b.width()&&d==b.height()&&j.windowResizeFix||(c=b.width(),d=b.height(),m&&clearInterval(m),m=setTimeout(function(){f.trigger("update.dot")},10))})}else l=i(f),m=setInterval(function(){var a=i(f);(l.width!=a.width||l.height!=a.height)&&(f.trigger("update.dot"),l=i(f))},100);return f},f.unwatch=function(){return a(window).unbind("resize.dot"+k.dotId),m&&clearInterval(m),f};var h=f.contents(),j=a.extend(!0,{},a.fn.dotdotdot.defaults,b),k={},l={},m=null,q=null;return j.lastCharacter.remove instanceof Array||(j.lastCharacter.remove=a.fn.dotdotdot.defaultArrays.lastCharacter.remove),j.lastCharacter.noEllipsis instanceof Array||(j.lastCharacter.noEllipsis=a.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),k.afterElement=n(j.after,f),k.isTruncated=!1,k.dotId=c++,f.data("dotdotdot",!0).bind_events().trigger("update.dot"),j.watch&&f.watch(),f},a.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0,debug:!1},a.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","\u3000",",",";",".","!","?"],noEllipsis:[]}};var c=1,q=a.fn.html;a.fn.html=function(c){return c!=b&&!a.isFunction(c)&&this.data("dotdotdot")?this.trigger("update",[c]):q.apply(this,arguments)};var r=a.fn.text;a.fn.text=function(c){return c!=b&&!a.isFunction(c)&&this.data("dotdotdot")?(c=a("<div />").text(c).html(),this.trigger("update",[c])):r.apply(this,arguments)}}}(jQuery);;
!function(a){Drupal.behaviors.dotdotdot={attach:function(b,c){if(c.dotdotdot)for(var d in c.dotdotdot)a(b).find(d).dotdotdot(a.extend({},c.dotdotdot[d]))}}}(jQuery);;
!function(a,b,c){c.placeholder||(b.behaviors.nbcFormPlaceholder={attach:function(b){a(".placeholder-text",b).blur(function(){a(this).val()||a(this).val(a(this).attr("placeholder"))}).focus(function(){a(this).val()===a(this).attr("placeholder")&&a(this).val("")})}})}(jQuery,Drupal,Modernizr);;
!function(a,b){function c(){var a=b("<div/>",{"class":"exposed-bios-overlay"});a.appendTo("#content").clone().appendTo("#footer"),b(this).on("click.nbc_bio_pagination",function(){var a=b(this),c=b(".views-view-grid",a.parent().parent()),d=b(".pane-bios-exposed-view .view-content"),e=b(".pane-bios-exposed-view .active"),f=b(".exposed-bios-overlay");a.toggleClass("expanded"),f.fadeToggle(500),c.fadeToggle(500),e.length&&d.scrollTop(e.position().top)})}a.behaviors.nbc_bio_pagination={attach:function(a){var d=[".exposed-navigation-toggle-button",".pane-bios-exposed-view .pane-title"].join(",");b(d,a).once("nbc_bio_pagination",c)}}}(Drupal,jQuery);;
!function(a,b,c){b.behaviors.nbc_global_header={attach:function(d,e){var f=400,g=400;a("body",d).once(function(){function h(c,d){d&&a(d).length?a(d).slideUp(f,function(){a(c).slideDown(g,b.attachBehaviors)}):c&&a(c).slideDown(g,b.attachBehaviors)}var i=a("#header .logo-panel"),j=a("#header .logo-panel > .wrapper"),k=a("#secondary-navigation"),l=e.basePath+"ajax/dropdowns-global/"+c.timezone.replace("/","-");a.ajax({url:l,context:d,success:function(b){k.html(b.menu_html),a(".popup",k).hide()},dataType:"json"});var m=null,n=null,o=null,p=a(".dropdown-global-link","#main-menu");p.on("click.globalDropDown",function(b){var c=a(this),d=c.data("target");return b.preventDefault(),j.addClass("active"),a("a","#main-menu").removeClass("active"),m&&(o=m),m===d?(m=null,n=null):(n=d,m=d,c.addClass("active")),h(n,o),!1}),a("body").click(function(b){a(b.target).parents(".popup").length||(h(null,m),m=null,j.removeClass("active"),a("a","#main-menu").removeClass("active"))}),i.mouseleave(function(){h(null,m),m=null,j.removeClass("active"),a("a","#main-menu").removeClass("active")});var q=a(".search");q.button=a(".header-search-submit"),q.input=a(".header-search-field"),q.on("click touchend",".header-search-submit",function(b){q.button.hasClass("search-active")||(b.preventDefault(),a(this).toggleClass("search-open search-close"));var c=a("#mvpd-header-container");c.removeClass("open")}),q.input.keyup(function(){0===a(this).val().length?q.button.removeClass("search-active"):q.button.addClass("search-active")})})}}}(jQuery,Drupal,nbc);;
!function(a,b,c){function d(a){function c(a){a.stopPropagation(),k?(g(d,l.width,l.height,h.duration),j.html(h.expand),k=!1):(g(d,m.width,m.height,h.duration),j.html(h.collapse),k=!0)}var d=b(this),h=b.extend(!0,{},i,d.data(),a),j=null,k=!1,l=h.base.width||h.base.height||e(d),m=h.full.width||h.full.height||f(d);(m.width>l.width||m.height>l.height)&&(j=b("<button/>",{"class":"stretchable-button"}).html(h.expand).on("click.stretchable touchend.stretchable",c),d.after(j))}function e(a){return{width:a.width(),height:a.height()}}function f(a){var b;return a.css({width:"auto",height:"auto"}),b=e(a),a.css({width:"",height:""}),b}function g(a,b,d,e){if(c.csstransitions){var f=a.get(0),g=c.prefixed("transition");f.style[g]="width,height "+e+"ms ease-out",null!==b&&(f.style.width=b+"px"),null!==d&&(f.style.height=d+"px")}else null!==b&&null!==d?a.animate({width:b,height:d},e):null!==b?a.animate({width:b},e):null!==d&&a.animate({height:d},e)}function h(a){var b=Array.prototype.slice.call(arguments,1);return function(){a.apply(this,b)}}a.behaviors.stretchable={attach:function(a,c){if(b(".stretchable",a).once("stretchable",h(d,c.stretchable)),c.stretchables)for(var e in c.stretchables)b(e,a).once("stretchable",h(d,c.stretchables[e]))}};var i={expand:'more <span class="icon icon-more"/>',collapse:'less <span class="icon icon-fewer"/>',duration:500,base:{width:null,height:null},full:{width:null,height:null}}}(Drupal,jQuery,Modernizr);;
!function(a,b){function c(a,c){return d(b(a,c).text())}function d(a){return b.trim(a).replace(i,"").replace(j," ")}function e(a,b,c,d){return f()+"|"+a+"|"+b+"|"+c+"|"+((d||0)+1)}function f(){return window.s?s.prop10+"|"+s.prop3:""}function g(){if(window.s){var a=b(this).attr(h);s.linkTrackVars="prop14",s.prop14=a,s.trackLink(this,"o",a)}}var h="data-s-object-id";a.behaviors.linkLabel={attach:function(a){b("#main-menu a",a).once(h).attr(h,function(){return e("Global Nav",c(this),"null")}),b("#dropdown-global-shows .panel-pane",a).once(h,function(){var a=c(".pane-title",this);b(".listing a",this).attr(h,function(b){return e("Global Nav","Shows",a,b)}),b("li.views-row a",this).attr(h,function(b){return e("Global Nav","Shows",a,b)}),b(".more-link a",this).attr(h,function(){return e("Global Nav","Shows","More")})}),b("#dropdown-global-video .panel-pane",a).once(h,function(){var a=c(".pane-title",this);b(".listing a",this).attr(h,function(b){return e("Global Nav","Full Episodes",a,b)}),b("li.views-row a",this).attr(h,function(b){return e("Global Nav","Full Episodes",a,b)}),b(".more-link a",this).attr(h,function(){return e("Global Nav","Full Episodes","More")})}),b("#dropdown-global-schedule .panel-pane",a).once(h,function(){var a=c(".pane-title",this);b(".listing a",this).attr(h,function(b){return e("Global Nav","Schedule",a,b)}),b(".full-schedule-link",this).attr(h,function(){return e("Global Nav","Schedule","Full Schedule")})}),b("#dropdown-global-news .panel-pane",a).once(h,function(){b("li,td",this).each(function(){var a=c(".section-title",this);b("a",this).attr(h,function(){return e("Global Nav","News and Sports",a)})})}),b("#dropdown-global-shops .panel-pane",a).once(h,function(){var a=c(".pane-title",this);b("li",this).each(function(c){b("a",this).attr(h,function(){return e("Global Nav","Shop",a,c)})}),b(".store-link",this).attr(h,function(){return e("Global Nav","Shop",c(this))})}),b(".footer-shows-list .panel-pane",a).once(h,function(){var a=c(".pane-title",this),d=b(this).is(".pane-menu-menu-nbc-quick-links");b("li.views-row a, li.leaf a",this).attr(h,function(b){return d?e("Footer",a,c(this),b):e("Footer","Shows",a,b)})}),b(".corporate-links-menu .panel-pane",a).once(h,function(){b("a",this).attr(h,function(){return e("Footer","Corporate",c(this))})}),b("#block-pub-tv-show-navigation .pane-content",a).once(h,function(){b("a",this).attr(h,function(a){return e("Site Nav",c(this),"null",a)})}),b(".pane-news-sports-footer",a).once(h,function(){b(".news",this).each(function(){var a=c(".section-title",this);b("a",this).attr(h,function(b){return e("Featured Content","News and Sports",a,b)})})}),b(".dynamic-lead-slide",a).once(h,function(a){b(".field-name-field-dl-slide-image a",this).attr(h,function(){return e("Hero","Pod","Image",a)}),b(".field-name-field-dl-logo a",this).attr(h,function(){return e("Hero","Pod","Image",a)}),b(".field-name-field-dl-call-to-action a",this).attr(h,function(){return e("Hero","Pod","CTA",a)})}),b(".dynamic-lead-pagination",a).once(h,function(a){b(".dynamic-lead-page",this).attr(h,function(){return e("Hero","Pod","Tab",a)}).click(g)}),b(".pane-social-links",a).once(h,function(){b("a",this).attr(h,function(){return e("Featured Content","Stay Connected",d(b(this).attr("title")))})}),b(".view-nbc-features .masonry-item").once(h,function(){var a=b(this).closest(".masonry-item").index(),d=c(".onion-skin-subtype",this).split(" | ");d=d[1]||d[0],b("a",this).attr(h,function(){return e("Featured Content","Latest Features",d,a)})}),b(".view-nbc-features .pager-load-more").once(h,function(){b("a",this).attr(h,function(){var a=b(this).attr("href"),c=a.match(/page=(\d*)/),d=c&&c[1]-1;return e("Featured Content","Latest Features","Load More",d)})}),b(".home-page-featured-video-tabs .view-footer").once(h,function(){b("a",this).attr(h,function(){return e("Featured Content","Featured Video","More Videos")})}),b(".nmc_slide",a).once(h,function(){var a=b(this).closest(".views-row"),d=a.index(),f="Featured Content",g=c(".pane-title",a)||"Featured Video",i="null",j=a.data("numItems")||0,k=0;b("body.front").length?(g="Featured Video",i=c(b(".home-page-featured-video-tabs .views-row").get(d))):b("body.page-video").length?(f="Global Content",g=c("#block-menu-menu-videos .active")||c(".block-menu-menu-videos li:eq(0)"),i=c(".pane-title",a)):b("body.node-type-tv-show").length&&b(".video-placeholder").length&&0===d&&(k=1,b(".video-placeholder").length&&(i="Play"));var l=b(".nmc_item",this).each(function(a){var c=j+a+k;b("a",this).attr(h,function(){return e(f,g,i,c)})});a.data("numItems",j+l.length)}),b(".tonight-on-nbc",a).once(h,function(){b(".schedule-item",this).each(function(a){b("a",this).attr(h,function(){return e("Featured Content","Schedule","Program",a)})})}),b("#full-schedule-link-homepage a").once(h).attr(h,function(){return e("Featured Content","Schedule","Full Schedule")}),b(".view-display-id-shows_grid").once(h,function(){var a=c(".view-nbc-show-categories .active");b("a",this).attr(h,function(b){return e("Global Content","Shows",a,b)})}),b("#schedule-page",a).once(h,function(){b(".schedule-item-with-description",this).attr(h,function(){return e("Global Content","Schedule","Expand")}).click(g)}),b(".schedule-description-inner .visit-show-site",a).once(h,function(){b(this).attr(h,function(){return e("Global Content","Schedule","Visit Show Site")})}),b(".video-placeholder",a).once(h).attr(h,function(){return e("Featured Content","Featured Video","Play")}).click(g),b("a["+h+"]",a).click(function(){linkTrkCookie(b(this).attr(h))})}};var i=/[^a-zA-Z0-9\|\s]+/g,j=/  +/g}(Drupal,jQuery);;