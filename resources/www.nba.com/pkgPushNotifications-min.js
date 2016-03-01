(function(b){var a={version:"0.1.0",safari:{apiKey:"lo6Zp0Kbdw_f1BA",websitePushID:"web.com.nba.lo6Zp0Kbdw.f1BA",packageVersion:"2"},inited:false,init:function(){this.inited=true;if(this._checkSupportsPush()){this.apiKey=this.safari.apiKey;this.websitePushID=this.safari.websitePushID;this.packageHost="packageHost" in this.safari?this.safari.packageHost:"i.push.io";this.packageVersion="packageVersion" in this.safari?this.safari.packageVersion:"1";this.registrationUrl="registrationUrl" in this.safari?this.safari.registrationUrl:"https://api.push.io/r/";if(typeof this.apiKey==="undefined"){a.log("PushIOManager must be initialized with an API key");return false;}if(typeof this.websitePushID==="undefined"){a.log("PushIOManager must be initialized with a websitePushID for support in this browser");return false;}var d=window.safari.pushNotification.permission(this.websitePushID);a.log("PushIO Init Permission Found:");this._processPermissionData(d);if(d.permission==="granted"&&this._canSaveRegistrationData()){var c=a._getRegHash();if(c&&"di" in c&&c["di"]!==null){a.registration._setValues(c);if(a.registration.packageVersion!==a.packageVersion){a.registration.packageVersion=a.packageVersion;a._saveRegHash(a.registration._toHash());a.requestPermission();}}}return true;}else{return false;}},requestPermission:function(){if(!this._checkInit()){return null;}this.permissionServerBase=("https://"+a.packageHost+"/"+a.apiKey+"/"+a.packageVersion);window.safari.pushNotification.requestPermission(this.permissionServerBase,a.websitePushID,{"ak":a.apiKey},this._permissionCallback);},enableLogging:function(c){if(c===true){a.log=a._log;}else{a.log=function(d){};}},log:function(c){},_log:function(c){if(typeof c=="string"){console.log("PushIO: "+c);}else{console.log(c);}},setPushPermissionStatusCallback:function(c){this.pushPermissionStatusCallback=c;},setCategories:function(c){a.registration._setCategories(c);},setUserID:function(c){a.registration._setUserId(c);},_permissionCallback:function(d){a.log("Push registration callback, permisions are "+d.permission);a.registration.packageVersion=a.safari.packageVersion;a._processPermissionData(d);var c="servererror";if(d.permission==="denied"){a.log("User rejected notification permission, or the server returned an error");c="denied";}else{if(d.permission==="granted"){a.log("User accepted notification permission");c="granted";}}if(typeof(a.pushPermissionStatusCallback)!==undefined){a.pushPermissionStatusCallback(c);}},_processPermissionData:function(d){a.log(d);if(d.permission==="default"){a.registration.permission="default";a.registration.deviceToken=null;a._deleteRegHash();}else{if(d.permission==="denied"){a.log("Notifications disabled");a.registration.permission="denied";a.registration.deviceToken=null;a._deleteRegHash();}else{if(d.permission==="granted"){var e=a._getRegHash();if(e&&"di" in e&&e["di"]!==null){a.registration._setValues(e);a.log("PushIOManager loaded  registration:");a.log(e);}else{var c=this._generateUUID();a.log("PushIOManager first run, device id = "+c);a.registration.deviceId=c;a.registration.installedAt=Date.now();}a.registration.permission="granted";a.registration._setDeviceToken(d.deviceToken);}}}a._saveRegHash(a.registration._toHash());},_checkSupportsPush:function(){return("safari" in window&&"pushNotification" in window.safari);},_checkInit:function(){if(this.inited){return true;}else{a.log("PushIOManager must have init() called before calling its methods");return false;}},_getRegHash:function(){if(!this._checkInit()){return null;}if(!localStorage){return null;}var c=localStorage.getItem("PushIOReg"+this.apiKey);return c==null?null:JSON.parse(c);},_saveRegHash:function(d){if(!this._checkInit()){return null;}if(!localStorage){return false;}try{localStorage.setItem("PushIOReg"+this.apiKey,JSON.stringify(d));}catch(c){a.log("Unable to save push notification settings.");a.log(c);return false;}return true;},_deleteRegHash:function(){try{localStorage.removeItem("PushIOReg"+this.apiKey);}catch(c){}},_generateUUID:function(){if(typeof(window.crypto)!="undefined"&&typeof(window.crypto.getRandomValues)!="undefined"){var f=function(i,g,h){return i.length>=g?i:f(h+i,g,h||" ");};var e=function(g){var h=g.toString(16);return f(h,4,"0");};var c=new window.Uint16Array(8);window.crypto.getRandomValues(c);return[e(c[0])+e(c[1]),e(c[2]),e(c[3]),e(c[4]),e(c[5])+e(c[6])+e(c[7])].join("-");}else{var d=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(h){var g=(d+Math.random()*16)%16|0;d=Math.floor(d/16);return(h==="x"?g:(g&7|8)).toString(16);});}},_canSaveRegistrationData:function(){try{return"localStorage" in window&&window["localStorage"]!==null;}catch(c){return false;}},registration:{deviceToken:null,deviceId:null,userId:null,categories:null,installedAt:0,permission:"default",dirty:true,updating:false,packageVersion:-1,_setCategories:function(c){if(!a._checkInit()){return false;}if(typeof c!=="array"){return false;}if(c.join(",")==this.categories){return true;}this.categories=c.join(",");this.dirty=true;this._saveAndUpdate();},_setUserId:function(c){if(!a._checkInit()){return false;}if(this.userId!=c){this.dirty=true;this.userId=c;this._saveAndUpdate();}},_setValues:function(c){if(!a._checkInit()){return false;}if("dt" in c){this.deviceToken=c["dt"];}if("di" in c){this.deviceId=c["di"];}if("c" in c){this.categories=c["c"];}if("dirty" in c){this.dirty=c["dirty"]===true;}if("pv" in c){this.packageVersion=c["pv"];}if("usr" in c){this.userId=c["usr"];}},_setDeviceToken:function(c){if(!a._checkInit()){return false;}if(this.deviceToken!==c||this.dirty){this.dirty=true;this.deviceToken=c;this._saveAndUpdate();}},_saveAndUpdate:function(){if(!a._checkInit()){return false;}a._saveRegHash(this._toHash());if(this.deviceToken!=null&&this.deviceId!=null&&this.dirty){this._transmitRegistration();}},_toHash:function(){if(!a._checkInit()){return false;}return({dt:this.deviceToken,di:this.deviceId,c:this.categories,ins:this.installedAt,dirty:this.dirty,pv:this.packageVersion,usr:this.userId});},_utcOffset:function(){return -(new Date()).getTimezoneOffset()*60;},_transmitRegistration:function(){if(!a._checkInit()){return;}console.log("Calling PushIO registration");var e=function(){a.registration.dirty=false;a._saveRegHash(a.registration._toHash());};var d=new XMLHttpRequest();d.onreadystatechange=function(){if(d.readyState==4&&d.status>=200&&d.status<300){e(d.responseText);}};d.open("POST",a.registrationUrl+a.apiKey,true);d.setRequestHeader("Content-type","application/x-www-form-urlencoded");var c="dt="+this.deviceToken+"&di="+this.deviceId+"&c="+(this.categories==null?"":this.categories)+"&libv="+a.version+"&appv="+this.packageVersion+"&ins="+this.installedAt+"&utc="+this._utcOffset();if(this.userId!=null){c=c+"&usr="+this.userId;}a.log("Sending registration with params: ");a.log(c);d.send(c);}}};if(b.PushIOManager){throw new Error("PushIOManager has already been defined");}else{b.PushIOManager=a;}})(typeof window==="undefined"?this:window);(function(a,b){b.enableLogging(true);var c=function(d){a.analytics.click({focus:"safaripush",content:[d]});};b.setPushPermissionStatusCallback(c);if(b.init()){if(b.registration.permission==="default"){b.requestPermission();a.analytics.click({focus:"safaripush",content:["displayed"]});}}}(_nba,PushIOManager));