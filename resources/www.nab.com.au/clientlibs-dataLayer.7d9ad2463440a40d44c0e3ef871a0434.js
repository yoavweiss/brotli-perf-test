var nab=nab||{};nab.analytics=nab.analytics||{},$(window).load(function(){nab.analytics.calcClicked=!1,$("li .contact-us").on("click touch",function(){nab.analytics.clickToCall($(this))}),$('button[id="continue-reading-button"]').on("click touch",function(){nab.analytics.continueReading($(this))}),$(".button .button-container a").on("click touch",function(){nab.analytics.butttonClickTrack(this)}),$(".masthead-slide .link-container a").on("click touch",function(){nab.analytics.mastheadClickTrack($(this))}),$(".cta-business-banking a").on("click touch",function(){nab.analytics.ctaClickTrack(this)}),$('div[data-analytics-type="calculator"]').on("click touch",function(){nab.analytics.calculatorClickTrack($(this))}),$(".carousel-logout a").on("click touch",function(){nab.analytics.logoutClickTrack($(this))}),$(".accordion .element").on("click",function(a){nab.analytics.accordionClickTrack($(this),a)})}),nab.analytics.ctaClickTrack=function(a){var b={action:$(a).text()};nab.analytics.digitialPushEvent("click-to-call",b)},nab.analytics.jumpToClickTrack=function(a){var b={jumpTo:a};nab.analytics.digitialPushEvent("jump-to",b)},nab.analytics.tabClickTrack=function(){var a={name:$(".tabs-nav .active").text()};nab.analytics.digitialPushEvent("tab-clicked",a)},nab.analytics.videoClickTrack=function(a){var b={action:"play",videoName:a};nab.analytics.digitialPushEvent("video-played",b)},nab.analytics.mastheadClickTrack=function(a){nab.analytics.digitialPushEvent("masthead-click",digitalData.components.masthead[$(a).parents().eq(3).attr("data-analytics-position")])},nab.analytics.bannerSort=function(a){var b={sortBy:a};nab.analytics.digitialPushEvent("banner-sort",b)},nab.analytics.clickToCall=function(a){var b={number:$(a).find("a").text(),heading:$(a).siblings().children("h3").text(),section:$(".tabs-nav .active").text()};nab.analytics.digitialPushEvent("click-to-call",b)},nab.analytics.accordionClickTrack=function(a,b){if(void 0!==b){var c="open";a.find(".heading").hasClass("active")&&(c="close");var d={heading:$(a).find("span").text()||$(a).text(),action:c};nab.analytics.digitialPushEvent("expand-accordion",d)}},nab.analytics.continueReading=function(a){var b={};nab.analytics.digitialPushEvent("continue-reading",b)},nab.analytics.butttonClickTrack=function(a){var b={name:$(a).text()};nab.analytics.digitialPushEvent("click-to-call",b)},nab.analytics.calculatorClickTrack=function(a){var b={name:$(a).data("analytics-name")};nab.analytics.digitialPushEvent("calculator-used",b)},nab.analytics.logoutClickTrack=function(a){nab.analytics.digitialPushEvent("logout-click",digitalData.components.logout[$(a).parents().eq(3).attr("data-analytics-position")])},nab.analytics.digitialPushEvent=function(a,b){digitalData.event.push({eventType:a,data:b}),$(document).trigger(a)};