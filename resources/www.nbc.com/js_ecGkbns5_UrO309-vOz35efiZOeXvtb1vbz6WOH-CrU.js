/*!
 * jQuery-ajaxTransport-XDomainRequest - v1.0.3 - 2014-06-06
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2014 Jason Moon (@JSONMOON)
 * Licensed MIT (/blob/master/LICENSE.txt)
 */
(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else if(typeof exports==='object'){module.exports=a(require('jquery'))}else{a(jQuery)}}(function($){if($.support.cors||!$.ajaxTransport||!window.XDomainRequest){return}var n=/^https?:\/\//i;var o=/^get|post$/i;var p=new RegExp('^'+location.protocol,'i');$.ajaxTransport('* text html xml json',function(j,k,l){if(!j.crossDomain||!j.async||!o.test(j.type)||!n.test(j.url)||!p.test(j.url)){return}var m=null;return{send:function(f,g){var h='';var i=(k.dataType||'').toLowerCase();m=new XDomainRequest();if(/^\d+$/.test(k.timeout)){m.timeout=k.timeout}m.ontimeout=function(){g(500,'timeout')};m.onload=function(){var a='Content-Length: '+m.responseText.length+'\r\nContent-Type: '+m.contentType;var b={code:200,message:'success'};var c={text:m.responseText};try{if(i==='html'||/text\/html/i.test(m.contentType)){c.html=m.responseText}else if(i==='json'||(i!=='text'&&/\/json/i.test(m.contentType))){try{c.json=$.parseJSON(m.responseText)}catch(e){b.code=500;b.message='parseerror'}}else if(i==='xml'||(i!=='text'&&/\/xml/i.test(m.contentType))){var d=new ActiveXObject('Microsoft.XMLDOM');d.async=false;try{d.loadXML(m.responseText)}catch(e){d=undefined}if(!d||!d.documentElement||d.getElementsByTagName('parsererror').length){b.code=500;b.message='parseerror';throw'Invalid XML: '+m.responseText;}c.xml=d}}catch(parseMessage){throw parseMessage;}finally{g(b.code,b.message,c,a)}};m.onprogress=function(){};m.onerror=function(){g(500,'error',{text:m.responseText})};if(k.data){h=($.type(k.data)==='string')?k.data:$.param(k.data)}m.open(j.type,j.url);m.send(h)},abort:function(){if(m){m.abort()}}}})}));;
!function(a,b){function c(a){this.data=a;try{this.data.user["geo-station"].callsign.length}catch(b){throw new ReferenceError("AnvatoLocal: Local station not found.")}}function d(a){if(d[a])return d[a];var c=d[a]=b.Deferred();if(Modernizr.sessionstorage&&Drupal.settings.useSessionStorage){var e=window.JSON.parse(sessionStorage.getItem(a));e?c.resolve(e):c.done(function(b){sessionStorage.setItem(a,window.JSON.stringify(b))})}return c}function e(a){this.data=a}var f=(window.console||{info:function(){},error:function(){},log:function(){}},{});f.settings=b.extend(!0,{},window.AnvatoLocationSettings),f.timezoneRegionMapper={"America/Los_Angeles":"PST","America/Denver":"MST","America/Chicago":"CST","America/New_York":"EST","America/Anchorage":"ALST","Pacific/Honolulu":"HAST"},f.getLocal=function(){return f.getLocal.promise||(f.getLocal.promise=f.fetchLocal()),f.getLocal.promise},f.fetchLocal=function(){var a=f.settings.host+"/rest/"+f.settings.version+"/tve/?anvack="+f.settings.access_token;return b.getJSON(a).pipe(function(a){if(!a||!a.user||!a.user.countryCode)return b.Deferred().reject("The geolocation payload was invalid.");if("US"!==a.user.countryCode)return b.Deferred().reject("Country code is not the US.");try{return new c(a)}catch(d){return b.Deferred().reject(d.message)}},function(a,b,c){return c})},f.normalizeTimezone=function(a){switch(a){case"PST":return"pacific";case"MST":return"mountain";case"CST":return"central";case"HAST":return"hawaii";case"AKST":return"alaska";case"EST":return"eastern";default:return f.settings.default_timezone||"eastern"}},f.getBrowserTimezone=function(){var a=jstz.determine();return f.normalizeTimezone(f.timezoneRegionMapper[a.name()])},f.getRepresentitiveAffiliate=function(a){return a=a||f.getBrowserTimezone(),"undefined"==typeof f.settings.affiliate_representitives[a]&&(a=f.normalizeTimezone("default")),new e(f.settings.affiliate_representitives[a])},f.getAffiliate=function(a){if(!f.settings.stations[a])throw new ReferenceError("AnvatoLocation: Unknown Station.");var b=new e(f.settings.stations[a]);return b.callsign=a,b},c.prototype.getUser=function(){if("user"in this.data)return this.data.user;throw new ReferenceError("AnvatoLocal: User not found.")},c.prototype.getStation=function(){if("user"in this.data&&"geo-station"in this.data.user)return this.data.user["geo-station"];throw new ReferenceError("AnvatoLocal: Station not found.")},c.prototype.getStationData=function(){var a=this.getStation(),c=b.extend({},a),e=a.callsign.toUpperCase(),f=new d("AnvatoLocal::getStationData."+e);if("pending"!==f.state())return f;var g=b.get("/proxy",{request:a.logo_url}).pipe(function(a){var b={},c=e.length+1;for(var d in a)b[d.substr(c)]=a[d].url;return b},function(){return b.Deferred().resolve({})}),h=b.get("/proxy",{request:a.website}).pipe(function(a){return a.web_link},function(){return b.Deferred().resolve("")});return b.when(g,h).done(function(a,b){c.logos=a,c.link=b,f.resolve(c)}),f},e.prototype.getStation=function(){return this.data},e.prototype.getStationData=function(){return b.Deferred().resolve({id:"",callsign:this.data.callsign,website:this.data.url,timezone:this.data.timezone,has_tve_rights:!0,is_timezone_channel:!0,logos:{"desktop-0x68-color":this.data.logo}})},f.getLocal(),a.AnvatoLocation=f}(window,jQuery);;
