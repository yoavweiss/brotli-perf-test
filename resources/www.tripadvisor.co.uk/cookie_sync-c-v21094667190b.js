(function(j,k,l){var e=1000*60*30;var f=1000*60*60*24;var d="TART";var b="SRT";var o="WLRedir";var m="COOKIESYNC:";if(c(d)){return}var a=l.createElement("iframe");function g(r,s,t){var p=!("addEventListener" in l),q=p?"attachEvent":"addEventListener";if(p){s="on"+s}r[q](s,t)}function i(q,r,t){var p=!("addEventListener" in l),s=p?"detachEvent":"removeEventListener";if(p){r="on"+r}q[s](r,t)}function n(q,r,p){l.cookie=q+"="+r+";domain="+k.location.hostname+";path=/;expires="+new Date(new Date().getTime()+p).toUTCString()}function c(p){return !!l.cookie.match(p+"=[^;]+")}function h(p){if(!a||!p||!p.data||!p.data.indexOf||p.data.indexOf(m)!==0){return}var q=p.data.substring(m.length);if(q){n(b,q,e)}else{if(!c(o)){n(o,"requested",f)}}i(k,"message",h);l.body.removeChild(a);a=null}g(k,"message",h);a.style.display="none";a.id="ta_cookie_sync";j.retargeting={url:null};g(k,"load",function(){if(!a){return}a.src=k.location.protocol+"//"+j.retargeting.url+"?-sync=true";l.body.appendChild(a)})})(ta,window,document);