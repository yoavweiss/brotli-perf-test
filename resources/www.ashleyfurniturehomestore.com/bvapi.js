"version:251";"build:0.24.0";"date:Tue Mar 01 2016 18:59:36 GMT+0000 (UTC)";!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var r=n(2),i=n(3);try{n(4)}catch(s){console.error("Failed to load module `bvapiproduction`",s.message)}e.exports=i.BV=r},function(e,t,n){"use strict";var r=n(3),i="object"==typeof r.BV?r.BV:{};e.exports=i},function(e,t){"use strict";e.exports=(new Function("return this;"))()},function(e,t,n){var r,i;r=[n(3),n(2)],i=function(e,t){var r=e.console,i=r&&(r.time||r.timeline||!1);try{if(t._bvapijs)return;e._bvaq=e._bvaq||[];var s=n(5);t=n(6)(t),i&&i.call(r,"scout-to-render");var o=t._internal;o.startTime=new Date,o.apiCache={},o.fbVersion=s.version,o.uiVersion=s.firebirdVersion,o.protocol="https:"===e.location.protocol?"https:":"http:",o.preview=!1,o.asEvented=n(7),o.ie=n(8),o._=n(9),t._bvapijs=!0,t._options=s.rawFirebirdConfig;var u=t.performance=n(10);u.mark("scoutStart"),t=n(15)(t),t.options=n(16)(t),n(18)(t);var a=t.extensions=n(21);t._internal.extensionsRegistry=n(22)(a),t._internal.preload=n(23)(t),e.$BV=n(24)(t,e.$BV);var f=n(25);f.init(t,"RatingsAndReviews","production"!==t.options.environment),u.mark("scoutEnd")}catch(l){r&&r.log&&(r.log(l.stack),r.log("Error loading Bazaarvoice",l))}}.apply(t,r),void 0===i||!(e.exports=i)},function(e,t,n){"use strict";e.exports={rawFirebirdConfig:{build:!0,site:"Main Site",implementations:{weights:{14132:100},total:100},configs:{14132:{version:251,locale:"en_US",locales:[{locale:"en_US",language:"en",country:"US"}],apiconfig:{limit:10,passkey:"h56afc7bg9fdjwr56qlfcd8n2",baseUrl:"//api.bazaarvoice.com/data/",notificationsUrl:"//api.bazaarvoice.com/notifications/",bvLocalUrl:"//api.bazaarvoice.com/bvlocal/",bvLocalKey:"95uqgm8emmjyp9ymrthmtxb9",contentLocales:["en_US"],displaycode:"14132-en_us"},allowedDomains:[{domainAddress:".constest.ashleyretail.com",thirdPartyCookieEnabled:!0},{thirdPartyCookieEnabled:!0,domainAddress:".bazaarvoice.com"},{thirdPartyCookieEnabled:!0,domainAddress:".dev.ashleyfurniturehomestore.com"},{thirdPartyCookieEnabled:!0,domainAddress:".afhsqa.ashleyretail.com"},{thirdPartyCookieEnabled:!0,domainAddress:".gmail.com"},{thirdPartyCookieEnabled:!0,domainAddress:".fincert.p2.ashleyretail.com"},{thirdPartyCookieEnabled:!0,domainAddress:".customeranalytics.com"},{thirdPartyCookieEnabled:!0,domainAddress:".yahoo.com"},{thirdPartyCookieEnabled:!0,domainAddress:".constestcms.p2.ashleyretail.com"},{thirdPartyCookieEnabled:!0,domainAddress:".afhstest2.ashleyretail.com"},{thirdPartyCookieEnabled:!0,domainAddress:".qa.p2.ashleyretail.com"},{thirdPartyCookieEnabled:!0,domainAddress:".triafhsstg.ashleyfurniturehomestore.com"},{thirdPartyCookieEnabled:!0,domainAddress:".afhsconstest2.ashleyretail.com"},{thirdPartyCookieEnabled:!0,domainAddress:".Ashleyfurniture.com"},{thirdPartyCookieEnabled:!0,domainAddress:".127.0.0.1"},{thirdPartyCookieEnabled:!0,domainAddress:".constest4.ashleyretail.com"},{thirdPartyCookieEnabled:!0,domainAddress:".ashleyfurniture.com"},{thirdPartyCookieEnabled:!0,domainAddress:".ashleyfurniturehomestore.com"}],build:!0,statsTypes:["Reviews"],externalFeatures:[],page:{size:8,size2n:8,reInject:!0,details:{review:{size:8,size2n:30},question:{size:10,size2n:10},comment:{size:3,size2n:3},reviewcomment:{size:3,size2n:3},answer:{size:10,size2n:10},author:{size:1,size2n:1}}},homePageUrl:"http://ashleyfurniturehomestore.com",container:{url:"https://ashleyfurniturehomestore.com/container.htm?",subjectRedirect:!0},analytics:{vendors:{magpie:{brandDomain:null}}},vendorConfig:{facebook:{key:""}},uiActions:{rr_inline_ratings:["inlineRatingList1"],rr_show_reviews:["reviewContentList1","reviewSubmission1","reviewSummary1"],rr_submit_review:["reviewSubmission1"],rr_submit_comment:["commentSubmission1_inline"],rr_submit_generic:["reviewGenericSubmission1"],qa_show_summary:["reviewSummary1"],qa_show_questions:["questionContentList1","questionSubmission1"],qa_show_answers:[],qa_submit_question:["questionSubmission1"],qa_submit_answer:["answerSubmission1_inline"],cp_show_profile:["fullProfile1"],sy_show_stories:[]},containers:{BVRRSummaryContainer:"summaryContainerDiv",BVRRContainer:"contentContainerDiv",BVQAContainer:"contentContainerDiv",BVLBContainer:"contentContainerDiv"},injectionZone:{},submission:{duplicateTimeout:432e5,userTimeout:6048e5,maxAnswers:10,questionsPageSize:4,rating:{range:[1,5]},reviewtext:{maxlength:1e4,minlength:0},title:{maxlength:50,minlength:0},usernickname:{maxlength:50,minlength:0},userlocation:{maxlength:100,minlength:0},netpromoterscore:{range:[0,10]},netpromotercomment:{maxlength:1e5,minlength:0}},display:{filters:[],sprite:!1,syndicationFilter:[]},fqhn:"display.ugc.bazaarvoice.com",environment:"production",workspace:"production",imagesPath:"//display.ugc.bazaarvoice.com/common/images/",utilPath:"//display.ugc.bazaarvoice.com/common/util/",displaycode:"14132",implementationID:"4c6f6219-2dc5-4311-bcb4-5ba43aff1eae",clientname:"ashleyfurniture",clientDisplayName:"Ashley Furniture",siteAuth:{review:!1,comment:!1,question:!1,answer:!1},loginPage:"",experiments:{},clientLogo:"http://image.sa.bazaarvoice.com/lib/fe6715707c64047f7c17/m/1/UqnclkATabW7vTeELgaq.png",sort:{reviews:"relevancy",questions:"recentAnswersFirst"},sci:{enabled:!1,waps:[]},bvLocal:{enabled:!1,isLocalNode:!1},rrReadOnlyEnabled:!1,queryRouter:{editCanonicalTags:!0},termsAndConditions:{rrTermsAndConditionsRemoteUrl:{$schema:"http://config.bazaarvoice.com/api/schemas/Configuration/LocalizedText/1.0.0",en:"",defaultValue:""},rrTermsAndConditionsRemoteUrlEnabled:!1,qaTermsAndConditionsRemoteUrl:{$schema:"http://config.bazaarvoice.com/api/schemas/Configuration/LocalizedText/1.0.0",en:"",defaultValue:""},qaTermsAndConditionsRemoteUrlEnabled:!1},fingerprintingEnabled:!0,statistics:{onlyShowDisplayedLocaleStatistics:!1},contentLocales:["en_US"],revision:"963-56d5e61c3c696a09e2848429",site:"Main Site",prefetchConfigs:[{url:"//api.bazaarvoice.com/data/batch.json?passkey=h56afc7bg9fdjwr56qlfcd8n2&apiversion=5.5&displaycode=14132-en_us&resource.q0=products&filter.q0=id%3Aeq%3A___PRODUCTIDTOKEN___&stats.q0=reviews&filteredstats.q0=reviews&filter_reviews.q0=contentlocale%3Aeq%3Aen_US&filter_reviewcomments.q0=contentlocale%3Aeq%3Aen_US&resource.q1=reviews&filter.q1=isratingsonly%3Aeq%3Afalse&filter.q1=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter.q1=contentlocale%3Aeq%3Aen_US&sort.q1=relevancy%3Aa1&stats.q1=reviews&filteredstats.q1=reviews&include.q1=authors%2Cproducts%2Ccomments&filter_reviews.q1=contentlocale%3Aeq%3Aen_US&filter_reviewcomments.q1=contentlocale%3Aeq%3Aen_US&filter_comments.q1=contentlocale%3Aeq%3Aen_US&limit.q1=8&offset.q1=0&limit_comments.q1=3&resource.q2=reviews&filter.q2=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter.q2=contentlocale%3Aeq%3Aen_US&limit.q2=1&resource.q3=reviews&filter.q3=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter.q3=isratingsonly%3Aeq%3Afalse&filter.q3=rating%3Agt%3A3&filter.q3=totalpositivefeedbackcount%3Agte%3A3&filter.q3=contentlocale%3Aeq%3Aen_US&sort.q3=totalpositivefeedbackcount%3Adesc&include.q3=authors%2Creviews%2Cproducts&filter_reviews.q3=contentlocale%3Aeq%3Aen_US&limit.q3=1&resource.q4=reviews&filter.q4=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter.q4=isratingsonly%3Aeq%3Afalse&filter.q4=rating%3Alte%3A3&filter.q4=totalpositivefeedbackcount%3Agte%3A3&filter.q4=contentlocale%3Aeq%3Aen_US&sort.q4=totalpositivefeedbackcount%3Adesc&include.q4=authors%2Creviews%2Cproducts&filter_reviews.q4=contentlocale%3Aeq%3Aen_US&limit.q4=1",subQueries:["//api.bazaarvoice.com/data/products.json?passkey=h56afc7bg9fdjwr56qlfcd8n2&apiversion=5.5&displaycode=14132-en_us&filter=id%3Aeq%3A___PRODUCTIDTOKEN___&stats=reviews&filteredstats=reviews&filter_reviews=contentlocale%3Aeq%3Aen_US&filter_reviewcomments=contentlocale%3Aeq%3Aen_US","//api.bazaarvoice.com/data/reviews.json?passkey=h56afc7bg9fdjwr56qlfcd8n2&apiversion=5.5&displaycode=14132-en_us&filter=isratingsonly%3Aeq%3Afalse&filter=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter=contentlocale%3Aeq%3Aen_US&sort=relevancy%3Aa1&stats=reviews&filteredstats=reviews&include=authors%2Cproducts%2Ccomments&filter_reviews=contentlocale%3Aeq%3Aen_US&filter_reviewcomments=contentlocale%3Aeq%3Aen_US&filter_comments=contentlocale%3Aeq%3Aen_US&limit=8&offset=0&limit_comments=3","//api.bazaarvoice.com/data/reviews.json?passkey=h56afc7bg9fdjwr56qlfcd8n2&apiversion=5.5&displaycode=14132-en_us&filter=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter=contentlocale%3Aeq%3Aen_US&limit=1","//api.bazaarvoice.com/data/reviews.json?passkey=h56afc7bg9fdjwr56qlfcd8n2&apiversion=5.5&displaycode=14132-en_us&filter=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter=isratingsonly%3Aeq%3Afalse&filter=rating%3Agt%3A3&filter=totalpositivefeedbackcount%3Agte%3A3&filter=contentlocale%3Aeq%3Aen_US&sort=totalpositivefeedbackcount%3Adesc&include=authors%2Creviews%2Cproducts&filter_reviews=contentlocale%3Aeq%3Aen_US&limit=1","//api.bazaarvoice.com/data/reviews.json?passkey=h56afc7bg9fdjwr56qlfcd8n2&apiversion=5.5&displaycode=14132-en_us&filter=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter=isratingsonly%3Aeq%3Afalse&filter=rating%3Alte%3A3&filter=totalpositivefeedbackcount%3Agte%3A3&filter=contentlocale%3Aeq%3Aen_US&sort=totalpositivefeedbackcount%3Adesc&include=authors%2Creviews%2Cproducts&filter_reviews=contentlocale%3Aeq%3Aen_US&limit=1"]}]}},version:251,notifications:{passkey:"b8d57893b7754e2d390348dc172b7c76"}},debug:!1,site:"Main Site",version:251,build:!0,env:"production",firebirdVersion:"0.24.0",date:"Tue Mar 01 2016 18:59:36 GMT+0000 (UTC)"}},function(e,t,n){var r;r=function(){return function(e){return e._internal={},e.options={},e.initialData&&(e.options.initialData=e.initialData),e.API_BASE_URL&&(e._internal.apiOverrideURL=e.API_BASE_URL),e}}.call(t,n,t,e),void 0===r||!(e.exports=r)},function(e,t){"use strict";function n(e,t){var n,r,i=this.events=this.events||{},s=e.split(/\s+/),o=s.length;for(n=0;o>n;n++)i[r=s[n]]=i[r]||[],i[r].push(t);return this}function r(e,t){var n=function(){this.off(e,n),t.apply(this,f.call(arguments))};return this.on(e,n),this}function i(e,t){var n,r,i,s,u,a=this.events;if(a){for(u=e.split(/\s+/),r=0,s=u.length;s>r;r++)(n=u[r])in a!=0&&(i=t?o(a[n],t):0,-1!==i&&a[n].splice(i,1));return this}}function s(e){var t,n,r=this.events;if(r&&e in r!=0){for(t=f.call(arguments,1),n=r[e].length-1;n>=0;n--)try{r[e][n].apply(this,t)}catch(i){}return this}}function o(e,t){var n,r;if(a&&e.indexOf===a)return e.indexOf(t);for(n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1}var u=Array.prototype,a=u.indexOf,f=u.slice;e.exports=function(){return this.on=n,this.off=i,this.trigger=this.emit=s,this.one=this.once=r,this}},function(e,t,n){"use strict";var r=n(3).document;e.exports=function(){var e=function(e,t,n){for(var r=t.getElementsByTagName("i");t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->",r[0];);return e>4?e:n}(3,r.createElement("div"));return e}()},function(e,t,n){var r;r=function(){function e(e){var t=m[e]={};return f(e.split(/\s+/),function(e){t[e]=!0}),t}var t={},n=Array.prototype,r=Object.prototype,i=r.hasOwnProperty,s=r.toString,o=n.forEach,u=n.indexOf,a=n.slice,f=function(e,n,r){var s,u,a;if(e)if(o&&e.forEach===o)e.forEach(n,r);else if(e.length===+e.length){for(u=0,a=e.length;a>u;u++)if(u in e&&n.call(r,e[u],u,e)===t)return}else for(s in e)if(i.call(e,s)&&n.call(r,e[s],s,e)===t)return},l=function(e){return!!(e&&e.constructor&&e.call&&e.apply)},c=function(e){return f(a.call(arguments,1),function(t){var n;for(n in t)void 0!==t[n]&&(e[n]=t[n])}),e},h=function(e,t,n){var r;if(t){if(u)return u.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},p={};f("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){p["[object "+e+"]"]=e.toLowerCase()});var d=function(e){return null==e?String(e):p[s.call(e)]||"object"},v={extend:c,each:f,isFunction:l},m={};return v.Callbacks=function(t){t="string"==typeof t?m[t]||e(t):c({},t);var n,r,i,s,o,u,a=[],l=!t.once&&[],p=function(e){for(n=t.memory&&e,r=!0,u=s||0,s=0,o=a.length,i=!0;a&&o>u;u++)if(a[u].apply(e[0],e[1])===!1&&t.stopOnFalse){n=!1;break}i=!1,a&&(l?l.length&&p(l.shift()):n?a=[]:v.disable())},v={add:function(){if(a){var e=a.length;!function r(e){f(e,function(e){var n=d(e);"function"===n?t.unique&&v.has(e)||a.push(e):e&&e.length&&"string"!==n&&r(e)})}(arguments),i?o=a.length:n&&(s=e,p(n))}return this},remove:function(){return a&&f(arguments,function(e){for(var t;(t=h(e,a,t))>-1;)a.splice(t,1),i&&(o>=t&&o--,u>=t&&u--)}),this},has:function(e){return h(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=l=n=void 0,this},disabled:function(){return!a},lock:function(){return l=void 0,n||v.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!a||r&&!l||(i?l.push(t):p(t)),this},fire:function(){return v.fireWith(this,arguments),this},fired:function(){return!!r}};return v},v.Deferred=function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){f(t,function(t,r){var s=t[0],o=e[r];i[t[1]](l(o)?function(){var e=o.apply(this,arguments);e&&l(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return null!=e?c(e,r):r}},i={};return r.pipe=r.then,f(t,function(e,s){var o=e[2],u=e[3];r[e[1]]=o.add,u&&o.add(function(){n=u},t[1^s][2].disable,t[2][2].lock),i[e[0]]=o.fire,i[e[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},v.when=function(e){var t=0,n="array"===d(e)&&1===arguments.length?e:a.call(arguments),r=n.length;"array"===d(e)&&1===e.length&&(e=e[0]);var i,s,o,u=1!==r||e&&l(e.promise)?r:0,f=1===u?e:v.Deferred(),c=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?a.call(arguments):r,n===i?f.notifyWith(t,n):--u||f.resolveWith(t,n)}};if(r>1)for(i=new Array(r),s=new Array(r),o=new Array(r);r>t;t++)n[t]&&l(n[t].promise)?n[t].promise().done(c(t,o,n)).fail(f.reject).progress(c(t,s,i)):--u;return u||f.resolveWith(o,n),f.promise()},v}.call(t,n,t,e),void 0===r||!(e.exports=r)},function(e,t,n){var r,i;r=[n(11),n(12),n(13),n(14),n(2)],i=function(e,t,n,r,i){return i.performance={},i.Date=t(window),i.requestAnimationFrame=e(window),i.performance.now=n(window),i.performance.mark=r(i.performance,window),i.performance}.apply(t,r),void 0===i||!(e.exports=i)},function(e,t,n){var r;r=function(){return function(e){var t=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)};return function(){return t.apply(e,arguments)}}}.call(t,n,t,e),void 0===r||!(e.exports=r)},function(e,t,n){var r;r=function(){return function(e){return{now:function(){var t=e.Date,n=t.now;return"function"==typeof n?function(){return n.call(t)}:function(){return(new t).getTime()}}()}}}.call(t,n,t,e),void 0===r||!(e.exports=r)},function(e,t,n){var r,i;r=[n(12)],i=function(e){return function(t){var n=t.performance,r=n&&n.now;if("function"==typeof r)return function(){return r.call(n)};var i=e(t).now();return n&&n.timing&&"number"==typeof n.timing.navigationStart&&(i=n.timing.navigationStart),function(){return e(t).now()-i}}}.apply(t,r),void 0===i||!(e.exports=i)},function(e,t,n){var r;r=function(){return function(e,t){var n=t.performance,r=n&&n.mark,i=e._marks={},s=e._timeline=[],o={navigationStart:1,unloadEventStart:1,unloadEventEnd:1,redirectStart:1,redirectEnd:1,fetchStart:1,domainLookupStart:1,domainLookupEnd:1,connectStart:1,connectEnd:1,secureConnectionStart:1,requestStart:1,responseStart:1,responseEnd:1,domLoading:1,domInteractive:1,domContentLoadedEventStart:1,domContentLoadedEventEnd:1,domComplete:1,loadEventStart:1,loadEventEnd:1};return function(t){if("function"==typeof r&&r.call(n,t),arguments.length<1)throw new SyntaxError("Cannot set mark without name");if(t in o)throw new SyntaxError('Cannot set mark with reserved name "'+t+'"');var u={entryType:"mark",name:t,startTime:e.now(),duration:0};i[t]=i[t]||[],i[t].push(u.startTime),s.push(u)}}}.call(t,n,t,e),void 0===r||!(e.exports=r)},function(e,t,n){var r;r=function(){return function(e){var t=e._internal,n=e._options.configs;if(t.apiOverrideURL){t.originalApiHosts={};for(var r in n)n.hasOwnProperty(r)&&(t.originalApiHosts[r]=n[r].apiconfig.baseUrl,n[r].apiconfig.baseUrl=t.apiOverrideURL)}return e}}.call(t,n,t,e),void 0===r||!(e.exports=r)},function(e,t,n){var r,i;r=[n(17)],i=function(e){return function(t){function n(t,n,r){var i=e.read("BVImpl"+t);if(i&&n.hasOwnProperty(i))return i;var s=Math.random()*r,o=0;for(var u in n)if(n.hasOwnProperty(u)){if(s>=o&&s<o+n[u]){i=u;break}o+=n[u]}return e.create("BVImpl"+t,i),i}var r=t._internal,i=n(t._options.site,t._options.implementations.weights,t._options.implementations.total),s=t.options=t._options.configs[i];return r.baseUrl=r.protocol+"//"+s.fqhn+"/static/"+s.clientname+"/"+t._options.site+"/"+s.version+"/"+i+"/"+s.locale,t.options}}.apply(t,r),void 0===i||!(e.exports=i)},function(e,t,n){"use strict";var r=n(3);e.exports={create:function(e,t,n,i,s){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var u=n?";expires="+o.toGMTString():"",a=encodeURIComponent(e)+"="+encodeURIComponent(t)+u+";path=/"+(i?";domain="+i:"")+(s?";secure":"");r.document.cookie=a},read:function(e){var t,n=encodeURIComponent(e)+"=",i=r.document.cookie.split(";");for(t=0;t<i.length;t++){for(var s=i[t];" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(n))return decodeURIComponent(s.substring(n.length,s.length))}return null},remove:function(e){this.create(e,"",-1)}}},function(e,t,n){var r,i;r=[n(9),n(8),n(19),n(3),n(20)],i=function(e,t,n,r,i){function s(e){var t={qa:"test",production:"prod"};return t[e]||"prod"}return function(u){var a=u._internal,f=i({loader:n.loadScript,namespace:u,env:s(u.options.workspace)});f.require(["jquery-bv@1.11.1","lodash-bv@1.2.0"],function(){});var l,c,h=r.document.getElementsByTagName("head")[0],p=a.baseUrl+"/stylesheets/",d=t&&t>4&&9>t,v=p+(a.preview?"cleanslate":d?"screen-ie":"screen")+".css";l="bv-primary.js",c={},n.loadScript(a.baseUrl+"/scripts/"+l,c);var m={};return h&&(m.injectionNode=h),!a.preview&&d&&(a.loadCSS=function(){n.loadStyleSheet(v,m)}),n.loadStyleSheet(v,m),e.each(u.options.externalFeatures,function(t){e.each(t.scripts,function(e){n.loadScript(e)})}),u}}.apply(t,r),void 0===i||!(e.exports=i)},function(e,t,n){"use strict";function r(){return u.getElementsByTagName("script")[0]}function i(e){return!e||"loaded"===e||"complete"===e||"uninitialized"===e}function s(e,t,n){if(!e||"string"!=typeof e)throw new Error("`url` must be a string");if("number"!=typeof t.timeout)throw new Error("`options.timeout` must be a number");if(n&&"function"!=typeof n)throw new Error("`callback` must be a function")}var o=n(3),u=o.document,a=1e4;e.exports={loadScript:function(e,t,n){function o(e){if(h=!0,clearTimeout(p),l.onload=l.onreadystatechange=l.onerror=null,l.parentNode.removeChild(l),n)try{n(e)}catch(t){}}"function"==typeof t&&(n=t,t=null),t=t||{},t.timeout=t.timeout||a,s(e,t,n);var f,l=u.createElement("script"),h=!1;if(t.attributes)for(f in t.attributes)l.setAttribute(f,t.attributes[f]);l.onreadystatechange=l.onload=function(){!h&&i(l.readyState)&&o()},l.onerror=function(){h||o(new Error("Error: could not load "+e))};var p=setTimeout(function(){h||o(new Error("Error: script timeout "+e))},t.timeout);setTimeout(function(){l.src=e;var t=r();t.parentNode.insertBefore(l,t)},0)},loadStyleSheet:function(e,t,n){function o(e){if(h=!0,clearTimeout(p),l.onload=l.onreadystatechange=l.onerror=null,n)try{n(e)}catch(t){}}if("function"==typeof t&&(n=t,t=null),t=t||{},t.timeout=t.timeout||a,s(e,t,n),"injectionNode"in t&&(!t.injectionNode.nodeType||1!==t.injectionNode.nodeType))throw new Error("`options.injectionNode` must be a DOM node");var f,l=u.createElement("link"),h=!1;if(t.attributes)for(f in t.attributes)l.setAttribute(f,t.attributes[f]);l.onreadystatechange=l.onload=function(){!h&&i(l.readyState)&&o()},l.onerror=function(){h||o(new Error("Error: could not load "+e))};var p=setTimeout(l.onerror,t.timeout);setTimeout(function(){l.media="only x",l.rel="stylesheet",l.type="text/css",l.href=e,setTimeout(function(){l.media="all"},0);var n=t.injectionNode||r().parentNode;try{n.appendChild(l)}catch(i){o(new Error("Error: could not append LINK element"))}},0)}}},function(e,t){"use strict";function n(e,t){if(e)for(var n=0;n<e.length;n++)t(e[n],n,e)}function r(e,t){var r=[];return n(e,function(e,n,i){r.push(t(e,n,i))}),r}var i="1.0.0",s={test:"display-test.ugc.bazaarvoice.com",prod:"display.ugc.bazaarvoice.com",stg:"display.ugc.bazaarvoice.com"};e.exports=function(e){function t(e){return c+encodeURIComponent(e.sort().join("+"))+".js"}function u(e,t,r){r?h.responses[e]=[t,r]:(r=t,h.responses[e]=[r]),n(h.requests[e],function(t){t(h.responses[e])}),h.requests[e]=null}var a=e.loader,f=e.namespace,l=e.env||"prod",c=e.baseUrl||"https://"+(s[l]||s.prod)+"/common/static-assets/"+i+"/";if(!f)throw new Error("Cannot initialize SDK without a namespace");if(!a)throw new Error("Cannot initialize SDK without a script loader");var h=f._staticAssetRegistry=f._staticAssetRegistry||{requests:{},responses:{},define:u},p={require:function(e,i){function s(){function t(e){var r=h.responses[e],i=!1;if(!r)return!1;var s=2===r.length?r[0]:[];return 0===s.length?!0:(n(s,function(e){i=t(e)}),i)}var s=0;n(e,function(e){t(e)&&s++}),e.length===s&&i.apply(null,r(e,o))}function o(e){var t=h.responses[e],n=t[0],i=t[1];i||(i=n,n=[]);var s=r(n,o);return s.length?i.apply(null,s):i()}i=i||function(){};var u=[];n(e,function(e){return h.responses[e]?void s():h.requests[e]?void h.requests[e].push(s):(h.requests[e]=[s],void u.push(e))}),u.length&&a(t(u),function(e){if(e)throw new Error("Failed to load "+u.join(", "))})},define:u};return h.require=p.require,p}},function(e,t,n){var r,i;r=[n(7),n(9)],i=function(e,t){function n(e,t){var n=Array.prototype.slice.call(arguments,2);return function(){var r=n.concat(Array.prototype.slice.call(arguments));return e.apply(t||null,r)}}function r(e,t,r){return this[e](t,r),{off:n(this.off,this,t,r)}}function i(e,t){var i=this.publicHandle={name:e};this.config=t,u(["on","one","once"],function(e){i[e]=n(r,this,e)},this),this.trigger=o}function s(e){var t=new f;return e.push(t.promise()),{allowDefault:function(){t.resolve()},preventDefault:function(){t.reject()}}}function o(e){var t=[];return this.deferDefault=n(s,null,t),this.preventDefault=function(){t.push(l)},this.constructor.prototype.trigger.apply(this,arguments),this.deferDefault=null,this.preventDefault=null,a(t)}var u=t.each,a=t.when,f=t.Deferred;e.call(i.prototype);var l=(Array.prototype.slice,(new f).reject().promise()),c={};e.call(c);var h=n(c.emit,c);delete c.emit,delete c.trigger;var p={};return c.register=function(e,t){if(e&&!(e in p)){var r=p[e]=new i(e,t);return setTimeout(n(function(){h("register",r.publicHandle)},this),0),r}},c.get=function(e){return p[e]?p[e].publicHandle:null},c}.apply(t,r),void 0===i||!(e.exports=i)},function(e,t,n){var r,i;r=[n(9),n(7)],i=function(e,t){return function(n){function r(e){var t=e._events={},n=e.publicHandle;return o(["call","invoke","complete"],function(n){t[n]=[],e.on(n,function(e){t[n].push(e)})}),e.getEvents=n.getEvents=function(e){var n=t[e];return n?n.slice():[]},e}var i=e.Deferred,s={},o=e.each,u={data:function(e){function t(t,r){var s=i();return!r&&n[t]?s.resolve(e.sanitize(n[t])):e.once("data."+t,function(){s.resolve(e.sanitize(n[t]))}),s.promise()}var n=e.history={},r=e.publicHandle;return e.sendData=function(t){var r=t.contentType;r&&(n[r]=t,e.trigger("data."+r))},e.getLast=r.getLast=function(e){return t(e)},e.getNext=r.getNext=function(e){return t(e,!0)},e.sanitize=function(e){return e},e},ui:function(e){return e=r(e),e.publicHandle.init=function(t){e.trigger("call",t)},e},configure:r};o(["ui","configure","data"],function(e){var r=[];n[e]={register:function(t,i){var s=n.register(e+"."+t,i||{}),o=s.publicHandle;u[e]&&(s=u[e](s));try{n[e].trigger("register",o)}catch(a){$BV.log("Failed to register extension in "+e)}return r.push(t),s},get:function(t){return n.get(e+"."+t)},getAll:function(){return r}},t.call(n[e])});var a={global:{},rr:{show_reviews:1,show_category_gallery:0,submit_review:0,submit_comment:0,submit_generic:0,inline_ratings:0},qa:{show_questions:1,show_summary:0,submit_question:0,submit_answer:0},cp:{show_profile:0}};return o(a,function(e,t){s["configure."+t]=n.configure.register(t),o(e,function(e,r){var i=t+"_"+r;s["ui."+i]=n.ui.register(i,{preload:e})})}),s["data.bvapi"]=n.data.register("bvapi"),s}}.apply(t,r),void 0===i||!(e.exports=i)},function(e,t,n){var r,i;r=[n(9),n(8),n(19)],i=function(e,t,n){return function(r){var i,s=r._internal;return function(u){var a=r.options,f=e.each,l=s.protocol;f(a.prefetchConfigs,function(f,c){var h=l+f.url.replace(/___PRODUCTIDTOKEN___/g,u);if(s.apiOverrideURL&&(h=h.replace(s.originalApiHosts[a.displaycode||"default"],a.apiconfig.baseUrl)),!(t&&9>t&&h.length>2e3)){var p="dataHandler"+c,d=e.Deferred(),v=h+"&callback=BV._internal."+p;f.promise=d.promise();var m=d.resolve;d.resolver=p,d.resolve=function(){p===i&&r.performance.mark("bv-preload-end"),r.performance.mark(d.resolver+"-start"),m.apply(d,Array.prototype.slice.call(arguments)),r.performance.mark(d.resolver+"-end")},a.page.reInject=!0,s[p]=d.resolve,i||(r.performance.mark("bv-preload-start"),i=p),n.loadScript(v)}})}}}.apply(t,r),void 0===i||!(e.exports=i)},function(e,t,n){var r,i;r=[n(3)],i=function(e){var t=e.console;return function(e,n){var r=e._internal;return function(){function i(e,t,n){if(!n)return!0;var r=s(e,t,n);return!!(r&&r.config&&r.config.preload)}function s(e,t,n){return a&&a[e+"."+t+(n?"_"+n:"")]}var o,u=n||[],a=r.extensionsRegistry;r.timing={ui:{}};var f={_apiQueue:[],log:function(){t&&t.log&&t.log(arguments)},push:function(t){var n,o,u,a=t[0],l=t[1];if(("ui"===a||"configure"===a)&&(n="ui"===a?t[3]:t[2],o="ui"===a?t[2]:null,n&&e._internal.preload&&n.productId&&i(a,l,o)&&(r.preload(n.productId),r.preload=null),u=s(a,l,o)),"ui"===a){var c=(l+"_"+o).toLowerCase();e.performance.mark(c+"-call"),r.timing=r.timing||{ui:{}},r.timing.ui[c]={init:(new Date).getTime(),config:n}}f._apiQueue.push(t),u&&u.trigger("call",{config:n})}};for(o=0;o<u.length;o++)f.push(u[o]);var l=["ui","configure","container","ready","SI.trackProductPageView","SI.trackGenericPageView","SI.trackTransactionPageView","SI.disable","SI.enable","SI.setDebugEnabled","SI.trackConversion","DSI.trackBVPageView","DSI.trackProduct","DSI.trackTransaction"];for(o=l.length-1;o>=0;--o)!function(e,t,n){for(var i=t.split("."),s=i.pop();n=i.shift();)e=e[n]=e[n]||{};e[s]=function(e){return function(){var t=[e].concat(Array.prototype.slice.call(arguments));if("ui"===e){var n=t[3]=t[3]||{};return n.loadedDeferred=n.loadedDeferred||r._.Deferred(),f.push(t),n.loadedDeferred.promise()}return f.push(t)}}(t.replace(/\./g,"_"))}(f,l[o]);return f}()}}.apply(t,r),void 0===i||!(e.exports=i)},function(e,t,n){function r(e,t,n){this.isStaging=!!t,this.eventQueue=n,this.configureMagpie(),e&&(this.data.bvProduct=e),n&&this.processEventQueue()}function i(e,t,n,i){if(!s.isObject(e))throw new Error("Undefined Host Object for SetUser");if(!s.isObject(window._bvaq))throw new Error("No magpie event queue is defined");var o=new r(t,n,i);e.setUser=function(){var t=Array.prototype.slice.call(arguments);o.setUser.apply(o,t),e.setUser=function(){}}}var s=n(26),o="Personalization";n(27),r.prototype.data={type:"ProfileWeb",profileId:null},r.prototype.configureMagpie=function(){window._bvaq.length||(window._bvaq.push(["setSource","ProfileWeb"]),window._bvaq.push(["setEnvironment","production"]),window._bvaq.push(["setStaging",this.isStaging])),window._bvaq.push(["setAnonymous",!1])},r.prototype.setUser=function(e){var t=this.data;t.profileId=e,t.magpieJsVersion=window._bvaq.version,window._bvaq.push(["trackEvent",o,t])},r.prototype.getUser=function(){throw new Error("The getUser function is not currently supported.")},r.prototype.processEventQueue=function(){var e;if(s.isArray(this.eventQueue))for(var t=0;t<this.eventQueue.length;t++)switch(e=this.eventQueue.shift(),e.method){case"setUser":this.setUser(e.profileId);break;case"getUser":this.getUser(e.profileId,e.callback);break;default:throw new Error("Invalid event in shopper API queue")}},e.exports={init:i}},function(e,t){function n(e){var t=typeof e;return"function"===t||"object"===t&&!!e}function r(e){return"[object Array]"===Object.prototype.toString.call(e)}var i=Array.isArray;e.exports={isObject:n,isArray:i||r}},function(e,t){}]);