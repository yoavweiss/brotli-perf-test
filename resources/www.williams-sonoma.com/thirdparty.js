if(WSI.isEnabled("dotomi")){
dojo.addOnLoad(function(){
if(typeof dtmTag==="object"){
dtmTag.dtmc_ref=document.referrer;
dtmTag.dtm_user_token=dojo.cookie("dtm_token");
dtmTag.dtmc_cm_id=dojo.cookie("CoreID6")||dojo.cookie("svi_dec");
}
try{
for(var _1 in dtmTag){
if(typeof dtmTag[_1]!=="function"&&typeof dtmTag[_1]!=="object"){
dtmSrc+="&"+_1+"="+escape(dtmTag[_1]);
}
}
setTimeout(function(){
if(document.getElementById("dotomiDomHook")){
document.getElementById("dotomiDomHook").innerHTML="";
}
},2000);
if(dojo.byId("dotomiDomHook")){
dojo.byId("dotomiDomHook").innerHTML="<iframe name=\"response_frame\" src=\""+dtmSrc+"\"></iframe>";
}
}
catch(err){
}
});
}
if(WSI.isEnabled('googleRSFA')){(function(){var f=null;var h="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_is_call google_conversion_page_url".split(" ");
function i(b){return b!=f?escape(b.toString()):""}function j(b,c){var g=i(c);if(""!=g){var a=i(b);if(""!=a)return"&".concat(a,"=",g)}return""}function k(b){var c=typeof b;return b==f||"object"==c||"function"==c?f:String(b).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")}
function l(b){var c;b=b.google_custom_params;if(!b||"object"!=typeof b||"function"==typeof b.join)c="";else{var g=[];for(c in b)if(Object.prototype.hasOwnProperty.call(b,c)){var a=b[c];if(a&&"function"==typeof a.join){for(var d=[],e=0;e<a.length;++e){var r=k(a[e]);r!=f&&d.push(r)}a=0==d.length?f:d.join(",")}else a=k(a);(d=k(c))&&a!=f&&g.push(d+"="+a)}c=g.join(";")}return""==c?"":"&".concat("data=",encodeURIComponent(c))}
function m(b){return"number"!=typeof b&&"string"!=typeof b?"":i(b.toString())}function n(b){if(!b)return"";b=b.google_conversion_items;if(!b)return"";for(var c=[],g=0,a=b.length;g<a;g++){var d=b[g],e=[];d&&(e.push(m(d.value)),e.push(m(d.quantity)),e.push(m(d.item_id)),e.push(m(d.adwords_grouping)),e.push(m(d.sku)),c.push("("+e.join("*")+")"))}return 0<c.length?"&item="+c.join(""):""}
function p(b,c,g){var a=[];if(b){var d=b.screen;d&&(a.push(j("u_h",d.height)),a.push(j("u_w",d.width)),a.push(j("u_ah",d.availHeight)),a.push(j("u_aw",d.availWidth)),a.push(j("u_cd",d.colorDepth)));b.history&&a.push(j("u_his",b.history.length))}g&&"function"==typeof g.getTimezoneOffset&&a.push(j("u_tz",-g.getTimezoneOffset()));c&&("function"==typeof c.javaEnabled&&a.push(j("u_java",c.javaEnabled())),c.plugins&&a.push(j("u_nplug",c.plugins.length)),c.mimeTypes&&a.push(j("u_nmime",c.mimeTypes.length)));
return a.join("")}function q(b,c,g){var a="";if(c){var a=a+j("ref",c.referrer!=f?c.referrer.toString().substring(0,256):""),d,c=2;try{if(b.top.document==b.document)c=0;else{var e=b.top;try{d=!!e.location.href||""===e.location.href}catch(r){d=!1}d&&(c=1)}}catch(K){}d=c;e="";e=g?g:1==d?b.top.location.href:b.location.href;a+=j("url",e!=f?e.toString().substring(0,256):"");a+=j("frm",d)}return a}
function s(b){return b&&b.location&&b.location.protocol&&"https:"==b.location.protocol.toString().toLowerCase()?"https:":"http:"}function t(b,c,g){return s(b)+"//"+(g.google_remarketing_only?"googleads.g.doubleclick.net":g.google_conversion_domain||"www.googleadservices.com")+"/pagead/"+c}
function u(){var b=v,c=navigator,g=document,a=v,d="/?";"landing"==a.google_conversion_type&&(d="/extclk?");var d=t(b,[a.google_remarketing_only?"viewthroughconversion/":"conversion/",i(a.google_conversion_id),d,"random=",i(a.google_conversion_time)].join(""),a),e;a:{e=a.google_conversion_language;if(e!=f){e=e.toString();if(2==e.length){e=j("hl",e);break a}if(5==e.length){e=j("hl",e.substring(0,2))+j("gl",e.substring(3,5));break a}}e=""}c=[j("cv",a.google_conversion_js_version),j("fst",a.google_conversion_first_time),
j("num",a.google_conversion_snippets),j("fmt",a.google_conversion_format),j("value",a.google_conversion_value),j("label",a.google_conversion_label),j("oid",a.google_conversion_order_id),j("bg",a.google_conversion_color),e,j("guid","ON"),j("disvt",a.google_disable_viewthrough),j("is_call",a.google_is_call),n(a),p(b,c,a.google_conversion_date),q(b,g,a.google_conversion_page_url),l(a),a.google_remarketing_for_search&&!a.google_conversion_domain?"&srr=n":""].join("");c=d+c;g=function(a,b,c){return'<img height="'+
c+'" width="'+b+'" border="0" src="'+a+'" />'};return 0==a.google_conversion_format&&a.google_conversion_domain==f?'<a href="'+(s(b)+"//services.google.com/sitestats/"+({ar:1,bg:1,cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[a.google_conversion_language]?a.google_conversion_language+".html":"en_US.html")+"?cid="+i(a.google_conversion_id))+
'" target="_blank">'+g(c,135,27)+"</a>":1<a.google_conversion_snippets||3==a.google_conversion_format?g(c,1,1):'<iframe name="google_conversion_frame" width="'+(2==a.google_conversion_format?200:300)+'" height="'+(2==a.google_conversion_format?26:13)+'" src="'+c+'" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" style="position:absolute;left:-1000px;top:0px;visibility:hidden">'+g(c.replace(/\?random=/,"?frame=0&random="),1,1)+"</iframe>"}function w(){return new Image};var v=window;
if(v)if(/[\?&;]google_debug/.exec(document.URL)!=f){var x=v,y=document.getElementsByTagName("head")[0];y||(y=document.createElement("head"),document.getElementsByTagName("html")[0].insertBefore(y,document.getElementsByTagName("body")[0]));var z=document.createElement("script");z.src=t(window,"conversion_debug_overlay.js",x);y.appendChild(z)}else{try{var A;var B=v;"landing"==B.google_conversion_type||!B.google_conversion_id||B.google_remarketing_only&&B.google_disable_viewthrough?A=!1:(B.google_conversion_date=
new Date,B.google_conversion_time=B.google_conversion_date.getTime(),B.google_conversion_snippets="number"==typeof B.google_conversion_snippets&&0<B.google_conversion_snippets?B.google_conversion_snippets+1:1,"number"!=typeof B.google_conversion_first_time&&(B.google_conversion_first_time=B.google_conversion_time),B.google_conversion_js_version="7",0!=B.google_conversion_format&&(1!=B.google_conversion_format&&2!=B.google_conversion_format&&3!=B.google_conversion_format)&&(B.google_conversion_format=
1),A=!0);if(A&&(document.write(u()),v.google_remarketing_for_search&&!v.google_conversion_domain)){var C=v,D,E=v,F;F=s(E)+"//www.google.com/ads/user-lists/"+[i(C.google_conversion_id),"/?random=",Math.floor(1E9*Math.random())].join("");D=F+=[j("label",C.google_conversion_label),j("fmt","3"),q(E,document,C.google_conversion_page_url)].join("");var G=w;"function"===typeof C.opt_image_generator&&(G=C.opt_image_generator);var H=G();D+=j("async","1");H.src=D;H.onload=function(){}}}catch(I){}for(var J=
v,L=0;L<h.length;L++)J[h[L]]=f};})();}
function LinkFromFlash(_1,_2){
var _3=true;
if(document.URL.indexOf("dbcmlv=1")!=-1){
if(_2){
_3=confirm("LinkFromFlash, OK to redirect:\nHref: "+_1+"\nName: "+name);
}else{
alert("LinkFromFlash:\nHref: "+_1+"\nName: "+name);
}
}
if(_2&&_3){
document.location=_1;
}
};
function driveParent(_4){
if(window.opener){
window.opener.location.href=_4;
window.opener.focus();
}else{
var _5=window.open(_4,"","");
_5.focus();
}
};
function createPopUp(_6,_7,_8){
if(!_7){
_7="newwnd";
}
if(!_8){
_8="toolbar=no,location=no,directories=no,scrollbars=yes,resizable=yes,height=500,width=730,screenX=4,screenY=4,top=4,left=4";
}
win=window.open(_6,_7,_8);
win.focus();
};
var printRecipe=createPopUp;
if(WSI.isEnabled('googleRSFA')){(function(){var f=null;var h="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_is_call google_conversion_page_url".split(" ");
function i(b){return b!=f?escape(b.toString()):""}function j(b,c){var g=i(c);if(""!=g){var a=i(b);if(""!=a)return"&".concat(a,"=",g)}return""}function k(b){var c=typeof b;return b==f||"object"==c||"function"==c?f:String(b).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")}
function l(b){var c;b=b.google_custom_params;if(!b||"object"!=typeof b||"function"==typeof b.join)c="";else{var g=[];for(c in b)if(Object.prototype.hasOwnProperty.call(b,c)){var a=b[c];if(a&&"function"==typeof a.join){for(var d=[],e=0;e<a.length;++e){var r=k(a[e]);r!=f&&d.push(r)}a=0==d.length?f:d.join(",")}else a=k(a);(d=k(c))&&a!=f&&g.push(d+"="+a)}c=g.join(";")}return""==c?"":"&".concat("data=",encodeURIComponent(c))}
function m(b){return"number"!=typeof b&&"string"!=typeof b?"":i(b.toString())}function n(b){if(!b)return"";b=b.google_conversion_items;if(!b)return"";for(var c=[],g=0,a=b.length;g<a;g++){var d=b[g],e=[];d&&(e.push(m(d.value)),e.push(m(d.quantity)),e.push(m(d.item_id)),e.push(m(d.adwords_grouping)),e.push(m(d.sku)),c.push("("+e.join("*")+")"))}return 0<c.length?"&item="+c.join(""):""}
function p(b,c,g){var a=[];if(b){var d=b.screen;d&&(a.push(j("u_h",d.height)),a.push(j("u_w",d.width)),a.push(j("u_ah",d.availHeight)),a.push(j("u_aw",d.availWidth)),a.push(j("u_cd",d.colorDepth)));b.history&&a.push(j("u_his",b.history.length))}g&&"function"==typeof g.getTimezoneOffset&&a.push(j("u_tz",-g.getTimezoneOffset()));c&&("function"==typeof c.javaEnabled&&a.push(j("u_java",c.javaEnabled())),c.plugins&&a.push(j("u_nplug",c.plugins.length)),c.mimeTypes&&a.push(j("u_nmime",c.mimeTypes.length)));
return a.join("")}function q(b,c,g){var a="";if(c){var a=a+j("ref",c.referrer!=f?c.referrer.toString().substring(0,256):""),d,c=2;try{if(b.top.document==b.document)c=0;else{var e=b.top;try{d=!!e.location.href||""===e.location.href}catch(r){d=!1}d&&(c=1)}}catch(K){}d=c;e="";e=g?g:1==d?b.top.location.href:b.location.href;a+=j("url",e!=f?e.toString().substring(0,256):"");a+=j("frm",d)}return a}
function s(b){return b&&b.location&&b.location.protocol&&"https:"==b.location.protocol.toString().toLowerCase()?"https:":"http:"}function t(b,c,g){return s(b)+"//"+(g.google_remarketing_only?"googleads.g.doubleclick.net":g.google_conversion_domain||"www.googleadservices.com")+"/pagead/"+c}
function u(){var b=v,c=navigator,g=document,a=v,d="/?";"landing"==a.google_conversion_type&&(d="/extclk?");var d=t(b,[a.google_remarketing_only?"viewthroughconversion/":"conversion/",i(a.google_conversion_id),d,"random=",i(a.google_conversion_time)].join(""),a),e;a:{e=a.google_conversion_language;if(e!=f){e=e.toString();if(2==e.length){e=j("hl",e);break a}if(5==e.length){e=j("hl",e.substring(0,2))+j("gl",e.substring(3,5));break a}}e=""}c=[j("cv",a.google_conversion_js_version),j("fst",a.google_conversion_first_time),
j("num",a.google_conversion_snippets),j("fmt",a.google_conversion_format),j("value",a.google_conversion_value),j("label",a.google_conversion_label),j("oid",a.google_conversion_order_id),j("bg",a.google_conversion_color),e,j("guid","ON"),j("disvt",a.google_disable_viewthrough),j("is_call",a.google_is_call),n(a),p(b,c,a.google_conversion_date),q(b,g,a.google_conversion_page_url),l(a),a.google_remarketing_for_search&&!a.google_conversion_domain?"&srr=n":""].join("");c=d+c;g=function(a,b,c){return'<img height="'+
c+'" width="'+b+'" border="0" src="'+a+'" />'};return 0==a.google_conversion_format&&a.google_conversion_domain==f?'<a href="'+(s(b)+"//services.google.com/sitestats/"+({ar:1,bg:1,cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[a.google_conversion_language]?a.google_conversion_language+".html":"en_US.html")+"?cid="+i(a.google_conversion_id))+
'" target="_blank">'+g(c,135,27)+"</a>":1<a.google_conversion_snippets||3==a.google_conversion_format?g(c,1,1):'<iframe name="google_conversion_frame" width="'+(2==a.google_conversion_format?200:300)+'" height="'+(2==a.google_conversion_format?26:13)+'" src="'+c+'" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" style="position:absolute;left:-1000px;top:0px;visibility:hidden">'+g(c.replace(/\?random=/,"?frame=0&random="),1,1)+"</iframe>"}function w(){return new Image};var v=window;
if(v)if(/[\?&;]google_debug/.exec(document.URL)!=f){var x=v,y=document.getElementsByTagName("head")[0];y||(y=document.createElement("head"),document.getElementsByTagName("html")[0].insertBefore(y,document.getElementsByTagName("body")[0]));var z=document.createElement("script");z.src=t(window,"conversion_debug_overlay.js",x);y.appendChild(z)}else{try{var A;var B=v;"landing"==B.google_conversion_type||!B.google_conversion_id||B.google_remarketing_only&&B.google_disable_viewthrough?A=!1:(B.google_conversion_date=
new Date,B.google_conversion_time=B.google_conversion_date.getTime(),B.google_conversion_snippets="number"==typeof B.google_conversion_snippets&&0<B.google_conversion_snippets?B.google_conversion_snippets+1:1,"number"!=typeof B.google_conversion_first_time&&(B.google_conversion_first_time=B.google_conversion_time),B.google_conversion_js_version="7",0!=B.google_conversion_format&&(1!=B.google_conversion_format&&2!=B.google_conversion_format&&3!=B.google_conversion_format)&&(B.google_conversion_format=
1),A=!0);if(A&&(document.write(u()),v.google_remarketing_for_search&&!v.google_conversion_domain)){var C=v,D,E=v,F;F=s(E)+"//www.google.com/ads/user-lists/"+[i(C.google_conversion_id),"/?random=",Math.floor(1E9*Math.random())].join("");D=F+=[j("label",C.google_conversion_label),j("fmt","3"),q(E,document,C.google_conversion_page_url)].join("");var G=w;"function"===typeof C.opt_image_generator&&(G=C.opt_image_generator);var H=G();D+=j("async","1");H.src=D;H.onload=function(){}}}catch(I){}for(var J=
v,L=0;L<h.length;L++)J[h[L]]=f};})();}
/*!
 * headroom.js v0.6.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

(function(window, document) {

  'use strict';

  /* exported features */

  var features = {
    bind : !!(function(){}.bind),
    classList : 'classList' in document.documentElement,
    rAF : !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
  };
  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

  /**
   * Handles debouncing of events via requestAnimationFrame
   * @see http://www.html5rocks.com/en/tutorials/speed/animations/
   * @param {Function} callback The callback to handle whichever event
   */
  function Debouncer (callback) {
    this.callback = callback;
    this.ticking = false;
  }
  Debouncer.prototype = {
    constructor : Debouncer,

    /**
     * dispatches the event to the supplied callback
     * @private
     */
    update : function() {
      this.callback && this.callback();
      this.ticking = false;
    },

    /**
     * ensures events don't get stacked
     * @private
     */
    requestTick : function() {
      if(!this.ticking) {
        requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this)));
        this.ticking = true;
      }
    },

    /**
     * Attach this as the event listeners
     */
    handleEvent : function() {
      this.requestTick();
    }
  };
  /**
   * Helper function for extending objects
   */
  function extend (object /*, objectN ... */) {
    if(arguments.length <= 0) {
      throw new Error('Missing arguments in extend function');
    }

    var result = object || {},
        key,
        i;

    for (i = 1; i < arguments.length; i++) {
      var replacement = arguments[i] || {};

      for (key in replacement) {
        if(typeof result[key] === 'object') {
          result[key] = extend(result[key], replacement[key]);
        }
        else {
          result[key] = result[key] || replacement[key];
        }
      }
    }

    return result;
  }

  /**
   * Helper function for normalizing tolerance option to object format
   */
  function normalizeTolerance (t) {
    return t === Object(t) ? t : { down : t, up : t };
  }

  /**
   * UI enhancement for fixed headers.
   * Hides header when scrolling down
   * Shows header when scrolling up
   * @constructor
   * @param {DOMElement} elem the header element
   * @param {Object} options options for the widget
   */
  function Headroom (elem, options) {
    options = extend(options, Headroom.options);

    this.lastKnownScrollY = 0;
    this.elem             = elem;
    this.debouncer        = new Debouncer(this.update.bind(this));
    this.tolerance        = normalizeTolerance(options.tolerance);
    this.classes          = options.classes;
    this.offset           = options.offset;
    this.initialised      = false;
    this.onPin            = options.onPin;
    this.onUnpin          = options.onUnpin;
    this.onTop            = options.onTop;
    this.onNotTop         = options.onNotTop;
  }
  Headroom.prototype = {
    constructor : Headroom,

    /**
     * Initialises the widget
     */
    init : function() {
      if(!Headroom.cutsTheMustard) {
        return;
      }

      this.elem.classList.add(this.classes.initial);

      // defer event registration to handle browser
      // potentially restoring previous scroll position
      setTimeout(this.attachEvent.bind(this), 100);

      return this;
    },

    /**
     * Unattaches events and removes any classes that were added
     */
    destroy : function() {
      var classes = this.classes;

      this.initialised = false;
      window.removeEventListener('scroll', this.debouncer, false);
      this.elem.classList.remove(classes.unpinned, classes.pinned, classes.top, classes.initial);
    },

    /**
     * Attaches the scroll event
     * @private
     */
    attachEvent : function() {
      if(!this.initialised){
        this.lastKnownScrollY = this.getScrollY();
        this.initialised = true;
        window.addEventListener('scroll', this.debouncer, false);

        this.debouncer.handleEvent();
      }
    },

    /**
     * Unpins the header if it's currently pinned
     */
    unpin : function() {
      var classList = this.elem.classList,
        classes = this.classes;

      if(classList.contains(classes.pinned) || !classList.contains(classes.unpinned)) {
        classList.add(classes.unpinned);
        classList.remove(classes.pinned);
        this.onUnpin && this.onUnpin.call(this);
      }
    },

    /**
     * Pins the header if it's currently unpinned
     */
    pin : function() {
      var classList = this.elem.classList,
        classes = this.classes;

      if(classList.contains(classes.unpinned)) {
        classList.remove(classes.unpinned);
        classList.add(classes.pinned);
        this.onPin && this.onPin.call(this);
      }
    },

    /**
     * Handles the top states
     */
    top : function() {
      var classList = this.elem.classList,
        classes = this.classes;

      if(!classList.contains(classes.top)) {
        classList.add(classes.top);
        classList.remove(classes.notTop);
        this.onTop && this.onTop.call(this);
      }
    },

    /**
     * Handles the not top state
     */
    notTop : function() {
      var classList = this.elem.classList,
        classes = this.classes;

      if(!classList.contains(classes.notTop)) {
        classList.add(classes.notTop);
        classList.remove(classes.top);
        this.onNotTop && this.onNotTop.call(this);
      }
    },

    /**
     * Gets the Y scroll position
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
     * @return {Number} pixels the page has scrolled along the Y-axis
     */
    getScrollY : function() {
      return (window.pageYOffset !== undefined)
        ? window.pageYOffset
        : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    },

    /**
     * Gets the height of the viewport
     * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
     * @return {int} the height of the viewport in pixels
     */
    getViewportHeight : function () {
      return window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    },

    /**
     * Gets the height of the document
     * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
     * @return {int} the height of the document in pixels
     */
    getDocumentHeight : function () {
      var body = document.body,
        documentElement = document.documentElement;

      return Math.max(
          body.scrollHeight, documentElement.scrollHeight,
          body.offsetHeight, documentElement.offsetHeight,
          body.clientHeight, documentElement.clientHeight
      );
    },

    /**
     * determines if the scroll position is outside of document boundaries
     * @param  {int}  currentScrollY the current y scroll position
     * @return {bool} true if out of bounds, false otherwise
     */
    isOutOfBounds : function (currentScrollY) {
      var pastTop  = currentScrollY < 0,
        pastBottom = currentScrollY + this.getViewportHeight() > this.getDocumentHeight();

      return pastTop || pastBottom;
    },

    /**
     * determines if the tolerance has been exceeded
     * @param  {int} currentScrollY the current scroll y position
     * @return {bool} true if tolerance exceeded, false otherwise
     */
    toleranceExceeded : function (currentScrollY, direction) {
      return Math.abs(currentScrollY-this.lastKnownScrollY) >= this.tolerance[direction];
    },

    /**
     * determine if it is appropriate to unpin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should unpin, false otherwise
     */
    shouldUnpin : function (currentScrollY, toleranceExceeded) {
      var scrollingDown = currentScrollY > this.lastKnownScrollY,
        pastOffset = currentScrollY >= this.offset;

      return scrollingDown && pastOffset && toleranceExceeded;
    },

    /**
     * determine if it is appropriate to pin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should pin, false otherwise
     */
    shouldPin : function (currentScrollY, toleranceExceeded) {
      var scrollingUp  = currentScrollY < this.lastKnownScrollY,
        pastOffset = currentScrollY <= this.offset;

      return (scrollingUp && toleranceExceeded) || pastOffset;
    },

    /**
     * Handles updating the state of the widget
     */
    update : function() {
      var currentScrollY  = this.getScrollY(),
        scrollDirection = currentScrollY > this.lastKnownScrollY ? 'down' : 'up',
        toleranceExceeded = this.toleranceExceeded(currentScrollY, scrollDirection);

      if(this.isOutOfBounds(currentScrollY)) { // Ignore bouncy scrolling in OSX
        return;
      }

      if (currentScrollY <= this.offset ) {
        this.top();
      } else {
        this.notTop();
      }

      if(this.shouldUnpin(currentScrollY, toleranceExceeded)) {
        this.unpin();
      }
      else if(this.shouldPin(currentScrollY, toleranceExceeded)) {
        this.pin();
      }

      this.lastKnownScrollY = currentScrollY;
    }
  };
  /**
   * Default options
   * @type {Object}
   */
  Headroom.options = {
    tolerance : {
      up : 0,
      down : 0
    },
    offset : 0,
    classes : {
      pinned : 'headroom--pinned',
      unpinned : 'headroom--unpinned',
      top : 'headroom--top',
      notTop : 'headroom--not-top',
      initial : 'headroom'
    }
  };
  Headroom.cutsTheMustard = typeof features !== 'undefined' && features.rAF && features.bind && features.classList;

  window.Headroom = Headroom;

}(window, document));
