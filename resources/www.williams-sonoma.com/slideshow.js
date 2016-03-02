/* © 2012 Williams-Sonoma Inc. All rights reserved. */
dojo.provide("slideshow");if(!dojo._hasResource["dojo.fx.Toggler"]){dojo._hasResource["dojo.fx.Toggler"]=true;dojo.provide("dojo.fx.Toggler");dojo.declare("dojo.fx.Toggler",null,{node:null,showFunc:dojo.fadeIn,hideFunc:dojo.fadeOut,showDuration:200,hideDuration:200,constructor:function(_1){var _2=this;dojo.mixin(_2,_1);_2.node=_1.node;_2._showArgs=dojo.mixin({},_1);_2._showArgs.node=_2.node;_2._showArgs.duration=_2.showDuration;_2.showAnim=_2.showFunc(_2._showArgs);_2._hideArgs=dojo.mixin({},_1);_2._hideArgs.node=_2.node;_2._hideArgs.duration=_2.hideDuration;_2.hideAnim=_2.hideFunc(_2._hideArgs);dojo.connect(_2.showAnim,"beforeBegin",dojo.hitch(_2.hideAnim,"stop",true));dojo.connect(_2.hideAnim,"beforeBegin",dojo.hitch(_2.showAnim,"stop",true));},show:function(_3){return this.showAnim.play(_3||0);},hide:function(_4){return this.hideAnim.play(_4||0);}});}if(!dojo._hasResource["dojo.fx"]){dojo._hasResource["dojo.fx"]=true;dojo.provide("dojo.fx");(function(){var d=dojo,_5={_fire:function(_6,_7){if(this[_6]){this[_6].apply(this,_7||[]);}return this;}};var _8=function(_9){this._index=-1;this._animations=_9||[];this._current=this._onAnimateCtx=this._onEndCtx=null;this.duration=0;d.forEach(this._animations,function(a){this.duration+=a.duration;if(a.delay){this.duration+=a.delay;}},this);};d.extend(_8,{_onAnimate:function(){this._fire("onAnimate",arguments);},_onEnd:function(){d.disconnect(this._onAnimateCtx);d.disconnect(this._onEndCtx);this._onAnimateCtx=this._onEndCtx=null;if(this._index+1==this._animations.length){this._fire("onEnd");}else{this._current=this._animations[++this._index];this._onAnimateCtx=d.connect(this._current,"onAnimate",this,"_onAnimate");this._onEndCtx=d.connect(this._current,"onEnd",this,"_onEnd");this._current.play(0,true);}},play:function(_a,_b){if(!this._current){this._current=this._animations[this._index=0];}if(!_b&&this._current.status()=="playing"){return this;}var _c=d.connect(this._current,"beforeBegin",this,function(){this._fire("beforeBegin");}),_d=d.connect(this._current,"onBegin",this,function(_e){this._fire("onBegin",arguments);}),_f=d.connect(this._current,"onPlay",this,function(arg){this._fire("onPlay",arguments);d.disconnect(_c);d.disconnect(_d);d.disconnect(_f);});if(this._onAnimateCtx){d.disconnect(this._onAnimateCtx);}this._onAnimateCtx=d.connect(this._current,"onAnimate",this,"_onAnimate");if(this._onEndCtx){d.disconnect(this._onEndCtx);}this._onEndCtx=d.connect(this._current,"onEnd",this,"_onEnd");this._current.play.apply(this._current,arguments);return this;},pause:function(){if(this._current){var e=d.connect(this._current,"onPause",this,function(arg){this._fire("onPause",arguments);d.disconnect(e);});this._current.pause();}return this;},gotoPercent:function(_10,_11){this.pause();var _12=this.duration*_10;this._current=null;d.some(this._animations,function(a){if(a.duration<=_12){this._current=a;return true;}_12-=a.duration;return false;});if(this._current){this._current.gotoPercent(_12/this._current.duration,_11);}return this;},stop:function(_13){if(this._current){if(_13){for(;this._index+1<this._animations.length;++this._index){this._animations[this._index].stop(true);}this._current=this._animations[this._index];}var e=d.connect(this._current,"onStop",this,function(arg){this._fire("onStop",arguments);d.disconnect(e);});this._current.stop();}return this;},status:function(){return this._current?this._current.status():"stopped";},destroy:function(){if(this._onAnimateCtx){d.disconnect(this._onAnimateCtx);}if(this._onEndCtx){d.disconnect(this._onEndCtx);}}});d.extend(_8,_5);dojo.fx.chain=function(_14){return new _8(_14);};var _15=function(_16){this._animations=_16||[];this._connects=[];this._finished=0;this.duration=0;d.forEach(_16,function(a){var _17=a.duration;if(a.delay){_17+=a.delay;}if(this.duration<_17){this.duration=_17;}this._connects.push(d.connect(a,"onEnd",this,"_onEnd"));},this);this._pseudoAnimation=new d.Animation({curve:[0,1],duration:this.duration});var _18=this;d.forEach(["beforeBegin","onBegin","onPlay","onAnimate","onPause","onStop","onEnd"],function(evt){_18._connects.push(d.connect(_18._pseudoAnimation,evt,function(){_18._fire(evt,arguments);}));});};d.extend(_15,{_doAction:function(_19,_1a){d.forEach(this._animations,function(a){a[_19].apply(a,_1a);});return this;},_onEnd:function(){if(++this._finished>this._animations.length){this._fire("onEnd");}},_call:function(_1b,_1c){var t=this._pseudoAnimation;t[_1b].apply(t,_1c);},play:function(_1d,_1e){this._finished=0;this._doAction("play",arguments);this._call("play",arguments);return this;},pause:function(){this._doAction("pause",arguments);this._call("pause",arguments);return this;},gotoPercent:function(_1f,_20){var ms=this.duration*_1f;d.forEach(this._animations,function(a){a.gotoPercent(a.duration<ms?1:(ms/a.duration),_20);});this._call("gotoPercent",arguments);return this;},stop:function(_21){this._doAction("stop",arguments);this._call("stop",arguments);return this;},status:function(){return this._pseudoAnimation.status();},destroy:function(){d.forEach(this._connects,dojo.disconnect);}});d.extend(_15,_5);dojo.fx.combine=function(_22){return new _15(_22);};dojo.fx.wipeIn=function(_23){var _24=_23.node=d.byId(_23.node),s=_24.style,o;var _25=d.animateProperty(d.mixin({properties:{height:{start:function(){o=s.overflow;s.overflow="hidden";if(s.visibility=="hidden"||s.display=="none"){s.height="1px";s.display="";s.visibility="";return 1;}else{var _26=d.style(_24,"height");return Math.max(_26,1);}},end:function(){return _24.scrollHeight;}}}},_23));d.connect(_25,"onEnd",function(){s.height="auto";s.overflow=o;});return _25;};dojo.fx.wipeOut=function(_27){var _28=_27.node=d.byId(_27.node),s=_28.style,o;var _29=d.animateProperty(d.mixin({properties:{height:{end:1}}},_27));d.connect(_29,"beforeBegin",function(){o=s.overflow;s.overflow="hidden";s.display="";});d.connect(_29,"onEnd",function(){s.overflow=o;s.height="auto";s.display="none";});return _29;};dojo.fx.slideTo=function(_2a){var _2b=_2a.node=d.byId(_2a.node),top=null,_2c=null;var _2d=(function(n){return function(){var cs=d.getComputedStyle(n);var pos=cs.position;top=(pos=="absolute"?n.offsetTop:parseInt(cs.top)||0);_2c=(pos=="absolute"?n.offsetLeft:parseInt(cs.left)||0);if(pos!="absolute"&&pos!="relative"){var ret=d.position(n,true);top=ret.y;_2c=ret.x;n.style.position="absolute";n.style.top=top+"px";n.style.left=_2c+"px";}};})(_2b);_2d();var _2e=d.animateProperty(d.mixin({properties:{top:_2a.top||0,left:_2a.left||0}},_2a));d.connect(_2e,"beforeBegin",_2e,_2d);return _2e;};})();}if(!dojo._hasResource["dojo.fx.easing"]){dojo._hasResource["dojo.fx.easing"]=true;dojo.provide("dojo.fx.easing");dojo.fx.easing={linear:function(n){return n;},quadIn:function(n){return Math.pow(n,2);},quadOut:function(n){return n*(n-2)*-1;},quadInOut:function(n){n=n*2;if(n<1){return Math.pow(n,2)/2;}return -1*((--n)*(n-2)-1)/2;},cubicIn:function(n){return Math.pow(n,3);},cubicOut:function(n){return Math.pow(n-1,3)+1;},cubicInOut:function(n){n=n*2;if(n<1){return Math.pow(n,3)/2;}n-=2;return (Math.pow(n,3)+2)/2;},quartIn:function(n){return Math.pow(n,4);},quartOut:function(n){return -1*(Math.pow(n-1,4)-1);},quartInOut:function(n){n=n*2;if(n<1){return Math.pow(n,4)/2;}n-=2;return -1/2*(Math.pow(n,4)-2);},quintIn:function(n){return Math.pow(n,5);},quintOut:function(n){return Math.pow(n-1,5)+1;},quintInOut:function(n){n=n*2;if(n<1){return Math.pow(n,5)/2;}n-=2;return (Math.pow(n,5)+2)/2;},sineIn:function(n){return -1*Math.cos(n*(Math.PI/2))+1;},sineOut:function(n){return Math.sin(n*(Math.PI/2));},sineInOut:function(n){return -1*(Math.cos(Math.PI*n)-1)/2;},expoIn:function(n){return (n==0)?0:Math.pow(2,10*(n-1));},expoOut:function(n){return (n==1)?1:(-1*Math.pow(2,-10*n)+1);},expoInOut:function(n){if(n==0){return 0;}if(n==1){return 1;}n=n*2;if(n<1){return Math.pow(2,10*(n-1))/2;}--n;return (-1*Math.pow(2,-10*n)+2)/2;},circIn:function(n){return -1*(Math.sqrt(1-Math.pow(n,2))-1);},circOut:function(n){n=n-1;return Math.sqrt(1-Math.pow(n,2));},circInOut:function(n){n=n*2;if(n<1){return -1/2*(Math.sqrt(1-Math.pow(n,2))-1);}n-=2;return 1/2*(Math.sqrt(1-Math.pow(n,2))+1);},backIn:function(n){var s=1.70158;return Math.pow(n,2)*((s+1)*n-s);},backOut:function(n){n=n-1;var s=1.70158;return Math.pow(n,2)*((s+1)*n+s)+1;},backInOut:function(n){var s=1.70158*1.525;n=n*2;if(n<1){return (Math.pow(n,2)*((s+1)*n-s))/2;}n-=2;return (Math.pow(n,2)*((s+1)*n+s)+2)/2;},elasticIn:function(n){if(n==0||n==1){return n;}var p=0.3;var s=p/4;n=n-1;return -1*Math.pow(2,10*n)*Math.sin((n-s)*(2*Math.PI)/p);},elasticOut:function(n){if(n==0||n==1){return n;}var p=0.3;var s=p/4;return Math.pow(2,-10*n)*Math.sin((n-s)*(2*Math.PI)/p)+1;},elasticInOut:function(n){if(n==0){return 0;}n=n*2;if(n==2){return 1;}var p=0.3*1.5;var s=p/4;if(n<1){n-=1;return -0.5*(Math.pow(2,10*n)*Math.sin((n-s)*(2*Math.PI)/p));}n-=1;return 0.5*(Math.pow(2,-10*n)*Math.sin((n-s)*(2*Math.PI)/p))+1;},bounceIn:function(n){return (1-dojo.fx.easing.bounceOut(1-n));},bounceOut:function(n){var s=7.5625;var p=2.75;var l;if(n<(1/p)){l=s*Math.pow(n,2);}else{if(n<(2/p)){n-=(1.5/p);l=s*Math.pow(n,2)+0.75;}else{if(n<(2.5/p)){n-=(2.25/p);l=s*Math.pow(n,2)+0.9375;}else{n-=(2.625/p);l=s*Math.pow(n,2)+0.984375;}}}return l;},bounceInOut:function(n){if(n<0.5){return dojo.fx.easing.bounceIn(n*2)/2;}return (dojo.fx.easing.bounceOut(n*2-1)/2)+0.5;}};}if(!dojo._hasResource["dojo.NodeList-traverse"]){dojo._hasResource["dojo.NodeList-traverse"]=true;dojo.provide("dojo.NodeList-traverse");dojo.extend(dojo.NodeList,{_buildArrayFromCallback:function(_2f){var ary=[];for(var i=0;i<this.length;i++){var _30=_2f.call(this[i],this[i],ary);if(_30){ary=ary.concat(_30);}}return ary;},_filterQueryResult:function(_31,_32){var _33=dojo.filter(_31,function(_34){return dojo.query(_32,_34.parentNode).indexOf(_34)!=-1;});var _35=this._wrap(_33);return _35;},_getUniqueAsNodeList:function(_36){var ary=[];for(var i=0,_37;_37=_36[i];i++){if(_37.nodeType==1&&dojo.indexOf(ary,_37)==-1){ary.push(_37);}}return this._wrap(ary,null,this._NodeListCtor);},_getUniqueNodeListWithParent:function(_38,_39){var ary=this._getUniqueAsNodeList(_38);ary=(_39?this._filterQueryResult(ary,_39):ary);return ary._stash(this);},_getRelatedUniqueNodes:function(_3a,_3b){return this._getUniqueNodeListWithParent(this._buildArrayFromCallback(_3b),_3a);},children:function(_3c){return this._getRelatedUniqueNodes(_3c,function(_3d,ary){return dojo._toArray(_3d.childNodes);});},closest:function(_3e){var _3f=this;return this._getRelatedUniqueNodes(_3e,function(_40,ary){do{if(_3f._filterQueryResult([_40],_3e).length){return _40;}}while((_40=_40.parentNode)&&_40.nodeType==1);return null;});},parent:function(_41){return this._getRelatedUniqueNodes(_41,function(_42,ary){return _42.parentNode;});},parents:function(_43){return this._getRelatedUniqueNodes(_43,function(_44,ary){var _45=[];while(_44.parentNode){_44=_44.parentNode;_45.push(_44);}return _45;});},siblings:function(_46){return this._getRelatedUniqueNodes(_46,function(_47,ary){var _48=[];var _49=(_47.parentNode&&_47.parentNode.childNodes);for(var i=0;i<_49.length;i++){if(_49[i]!=_47){_48.push(_49[i]);}}return _48;});},next:function(_4a){return this._getRelatedUniqueNodes(_4a,function(_4b,ary){var _4c=_4b.nextSibling;while(_4c&&_4c.nodeType!=1){_4c=_4c.nextSibling;}return _4c;});},nextAll:function(_4d){return this._getRelatedUniqueNodes(_4d,function(_4e,ary){var _4f=[];var _50=_4e;while((_50=_50.nextSibling)){if(_50.nodeType==1){_4f.push(_50);}}return _4f;});},prev:function(_51){return this._getRelatedUniqueNodes(_51,function(_52,ary){var _53=_52.previousSibling;while(_53&&_53.nodeType!=1){_53=_53.previousSibling;}return _53;});},prevAll:function(_54){return this._getRelatedUniqueNodes(_54,function(_55,ary){var _56=[];var _57=_55;while((_57=_57.previousSibling)){if(_57.nodeType==1){_56.push(_57);}}return _56;});},andSelf:function(){return this.concat(this._parent);},first:function(){return this._wrap(((this[0]&&[this[0]])||[]),this);},last:function(){return this._wrap((this.length?[this[this.length-1]]:[]),this);},even:function(){return this.filter(function(_58,i){return i%2!=0;});},odd:function(){return this.filter(function(_59,i){return i%2==0;});}});}if(!dojo._hasResource["wsgc.js.Selector"]){dojo._hasResource["wsgc.js.Selector"]=true;dojo.provide("wsgc.js.Selector");(function(_5a,_5b){var _5c=_5d(),_5e="_sel_",_5f=0,_60="parentNode",_61="previousSibling",_62={},_63={">":_64(_60,true)," ":_64(_60,false),"+":_64(_61,true),"~":_64(_61,false)};_5a.mixin(wsgc.js.Selector,{is:function is(_65,_66,_67){var _68=this.parse(_66),_69,i,l;for(i=0,l=_68.length;i<l;++i){_69=_67?[[" ",_67]].concat(_68[i]):_68[i];if(this.test(_6a([_65]),_69,_69.length-1)){return true;}}return false;},test:function test(_6b,_6c,_6d){var _6e=_6c[_6d][0],_6f=_6c[_6d][1],_70=_63[_6e],_71,_72;while((_72=_6b())){if(_6f===_72||_6f==="*"||(typeof _6f==="string"&&_5a._filterQueryResult([_72],_6f).length)){_71=_70(_72);if(_6d===0||this.test(_71,_6c,_6d-1)){return _72;}if(_6b.axis===_71.axis&&!_71.singleton){break;}}}},parse:function parse(_73){var _74=[],_75=_62[_73]||[],_76,_77;if(_75.length){return _75;}while((_76=_5c.exec(_73))){_77=(_76[1]&&_5a.trim(_76[1]))||" ";if(_77.charAt(0)===","){_75.push(_74);_74=[[_5a.trim(_77.substr(1))||" ",_76[2]]];}else{_74.push([_77,_76[2]]);}}if(_74.length){_75.push(_74);}return _62[_73]=_75;},closest:function closest(_78,_79){var _7a=this.parse(_78),_7b,_7c,_7d,_7e,_7f;for(var i=0,len=_7a.length;i<len;i++){_7f=_7a[i];_7b=true;_7c=_63[" "](_79);_7d=function(){if(_7b){_7b=false;return _79;}return _7c();};_7e=this.test(_7d,_7f,_7f.length-1);if(_7e){return _7e;}}},idFor:function idFor(_80){if(!_80.id){do{var id=_5e+_5f++;}while(_5a.byId(id));_80.id=id;}return _80.id;}});function _6a(_81){var i=0;return function arrayIterator(){return _81[i++];};};function _64(_82,_83){return function nextIteratorGenerator(_84){var _85=true,_86=function _86(){_86.axis=_82;_86.singleton=_83;if(!_83||_85){_85=false;while((_84=_84[_82])&&_84.nodeType!==1){}return _84;}};return _86;};};function _5d(){return /((?:\s+(?![>+~,])|\s*(?:,\s*)?[>+~]\s*|\s*,\s*|^\s*))((?:\*|[a-z_\\][a-z0-9_\\|-]*)?(?:(?:[.#][a-z_\\][a-z0-9_\\|-]*|(?::not\(\s*(?:\*|[.#]?[a-z_\\][a-z0-9_\\|-]*|\[\s*[a-z_\\][a-z0-9_\\|-]*\s*(?:[~|^$*]?=\s*(?:'[^']*'|"[^"]*")\s*)?\]|::?[a-z_\\][a-z0-9_\\|-]*(?:\((?:'[^']*'|"[^"]*"|[^)])*\))?)\s*\))|::?[a-z_\\][a-z0-9_\\|-]*(?:\((?:'[^']*'|"[^"]*"|[^)])*\))?|\[\s*[a-z_\\][a-z0-9_\\|-]*\s*(?:[~|^$*]?=\s*(?:'[^']*'|"[^"]*")\s*)?\])*))/ig;};}(dojo));}if(!dojo._hasResource["wsgc.js.Events"]){dojo._hasResource["wsgc.js.Events"]=true;dojo.provide("wsgc.js.Events");(function(_87,_88){WSI=window.WSI||{};WSI.Events=_87.mixin(wsgc.js.Events,wsgc.js.Selector,{delegate:function(_89,_8a,_8b,_8c){var _8d=this,_8e=this.idFor(_8b),_8f=this.delegate.delegates||(this.delegate.delegates={}),_90=_8f[_8e]||(_8f[_8e]={}),_91=_90.events||(_90.events={}),_92,_93,_89=_89.split(" ");if(!_8c){_8c=_8b;_8b=_87.body();}for(var _94=0;_94<_89.length;_94++){_93=_89[_94].replace(/^on/,"");_92=_91[_93];this.parse(_8a);if(!_92){_92=_91[_93]=function(evt){var _95=_92.selectors,_96=evt.target,_97={};do{if(_96.disabled){continue;}for(var _98 in _95){if(_95.hasOwnProperty(_98)){if(_a8(_95[_98],_97)&&_8d.is(_96,_98,_8b===_87.body()?null:_8b)){_87.forEach(_95[_98],function(_99){if(!_97[_99]){_97[_99]=true;_99.call(_96,evt);}});}}}}while(_96!=evt.currentTarget&&(_96=_96.parentNode)&&_96!=document.documentElement);};if(_93==="focus"||_93==="blur"){var _9a=function(evt){return _92(_87.fixEvent(evt||window.event,this));};if(document.attachEvent){document.attachEvent("onfocus"+(_93==="blur"?"out":"in"),_9a);}else{_8b.addEventListener(_93,_9a,true);}}else{_87.connect(_8b,_93,_92);}_92.selectors={};}_92.selectors[_8a]=_92.selectors[_8a]||[];_92.selectors[_8a].push(_8c);}},undelegate:function(_9b,_9c,_9d,_9e){if(!_9e){if(!_9d){if(typeof _9c==="function"){_9e=_9c;_9d=_87.body();_9c=null;}else{if(typeof _9c==="object"){_9d=_9c;_9c=null;}else{_9d=_87.body();}}}else{if(typeof _9d==="function"){_9e=_9d;_9d=_87.body();}}}var _9f=this.delegate.delegates||{},_a0=_9f[this.idFor(_9d)]||{},_a1=_a0.events||{},_9b=_9b.split(" "),_a2,_a3,_a4,_a5,_a6;for(var _a7=0;_a7<_9b.length;_a7++){_a5=_9b[_a7];_a2=_a1[_a5]||{};_a3=_a2.selectors||{};_a4=_a3[_9c||""]||[];_a6=_9e?_87.indexOf(_a4,_9e):-1;if(!_9c){if(!_9e){_a2.selectors={};}else{for(_9c in _a3){if(_a3.hasOwnProperty(_9c)){_a4=_a3[_9c];_a6=_87.indexOf(_a4,_9e);if(_a6>-1){_a4.splice(_a6,1);}}}}}else{if(!_a4||(_9e&&_a6===-1)){return;}else{if(_9e){_a4.splice(_a6,1);}else{_a3[_9c]=[];}}}}}});function _a8(_a9,_aa){return _87.some(_a9,function(_ab){return !_aa[_ab];});};if(_87){_87.delegateEvent=WSI.Events.delegate;_87.undelegateEvent=WSI.Events.undelegate;}}(dojo));}if(!dojo._hasResource["wsgc.js.Slideshow"]){dojo._hasResource["wsgc.js.Slideshow"]=true;dojo.provide("wsgc.js.Slideshow");(function(_ac,_ad){var _ae=1,_af=-1,_b0=1,_b1=-1,_b2=1,UP=-1,IN=1,OUT=-1;var _b3={autoplay:true,autopause:false,startdelay:0,repeat:"loop",flip:true,delay:5000,duration:500,rate:10,easing:"linear",transition:"fade",startIndex:0,direction:_ae};function _b4(_b5,_b6){var _b7=_ac.mixin({},_b6,_ac.fromJson(_ac.attr(_b5,"data-slideshow")));if(typeof _b7.easing==="string"){_b7.easing=_ac.fx.easing[_b7.easing];}return _b7;};function _b8(_b9,_ba){return function(_bb,_bc,_bd,_be,_bf){_ac.style(_bc,{display:"block","z-index":1});var _c0=this,_c1=this.direction*_bd*_b9,_c2=_ac.contentBox(this.slideshow),_c3=_ac.marginBox(_bc),_c4=_ba(_c2,_c3,-_c1);_ac.marginBox(_bc,{l:_c4.left,t:_c4.top});var _c5=_ac.fx.slideTo({node:_bc,left:_c3.l,top:_c3.t,duration:_be.duration,rate:_be.rate,easing:_be.easing});_ac.connect(_c5,"onEnd",_c5,function(){_ac.style(_bc,{"z-index":0});_ac.style(_bb,{display:"none"});if(_bf){_bf.call(_c0);}});_c5.play();};};function _c6(_c7){return _b8(_c7,function(_c8,_c9,_ca){return {left:_ca*_c8.w,top:_c9.t};});};function _cb(_cc){return _b8(_cc,function(_cd,_ce,_cf){return {top:_cf*_cd.h,left:_ce.l};});};function _d0(_d1,_d2){return function(_d3,_d4,_d5,_d6,_d7){_ac.style(_d4,{display:"block"});var _d8=this,_d9=this.direction*_d5*_d1,_da=_ac.contentBox(this.slideshow),_db={l:0,t:0},_dc=_d2(_da,_db,-_d9),_dd={duration:_d6.duration,rate:_d6.rate,easing:_d6.easing};_ac.marginBox(_d4,{l:_dc.left,t:_dc.top});var _de=_ac.fx.combine([_ac.fx.slideTo(_ac.mixin({node:_d4,left:_db.l,top:_db.t},_dd)),_ac.fx.slideTo(_ac.mixin({node:_d3},_dd,_d2(_da,_db,_d9)))]);_ac.connect(_de,"onEnd",_de,function(){_ac.marginBox(_d3,_db);_ac.style(_d3,{display:"none"});if(_d7){_d7.call(_d8);}});_de.play();};};function _df(_e0){return _d0(_e0,function(_e1,_e2,_e3){return {left:_e3*_e1.w,top:_e2.t};});};function _e4(_e5){return _d0(_e5,function(_e6,_e7,_e8){return {top:_e8*_e6.h,left:_e7.l};});};function _e9(_ea,_eb,n,_ec){n=_ec?_ec(n):n;return {t:_ea.t+(_eb.t*n),r:_ea.r+(_eb.r*n),b:_ea.b+(_eb.b*n),l:_ea.l+(_eb.l*n)};};function _ed(_ee){return "rect("+_ee.t+"px,"+_ee.r+"px,"+_ee.b+"px,"+_ee.l+"px)";};function _ef(_f0,_f1){return function(_f2,_f3,_f4,_f5,_f6){_ac.style(_f3,{display:"block"});var _f7=this,_f8=_f7.direction*_f4*_f0,_f9=_ac.coords(_f3),_fa=_f1(_f9,_f8),_fb={t:-_fa.t,r:(_f9.w-_fa.r),b:(_f9.h-_fa.b),l:-_fa.l};_ac.style(_f3,{clip:_ed(_fa),"z-index":1});var _fc=+new Date;var _fd=window.setInterval(function(){var now=+new Date;var _fe=(now-_fc)/_f5.duration;if(_fe>=1){window.clearInterval(_fd);_ac.style(_f3,{"z-index":0});_ac.style(_f2,{display:"none"});if(_f6){_f6.call(_f7);}}else{_ac.style(_f3,{clip:_ed(_e9(_fa,_fb,_fe,_f5.easing))});}},_f5.rate);};};function _ff(_100){return _ef(_100,function(_101,_102){return _102===_b0?{t:0,b:_101.h,r:0,l:0}:{t:0,b:_101.h,r:_101.w,l:_101.w};});};function _103(_104){return _ef(_104,function(_105,_106){return _106===_b2?{t:0,b:0,r:_105.w,l:0}:{t:_105.h,b:_105.h,r:_105.w,l:0};});};function _107(_108){return function(_109,_10a,_10b,_10c,_10d){_ac.style(_10a,{display:"block"});var self=this,_10e=self.direction*_108*_10b,_10f=_ac.coords(_10a),_110={t:_10f.t,r:_10f.w,b:_10f.h,l:_10f.l},_111=_110.t+((_110.b-_110.t)/2),_112=_110.l+((_110.r-_110.l)/2),_113={t:_111,r:-_112,b:-_111,l:_112};if(_10e===OUT){var temp=_110;_110={t:_111,b:_111,r:_112,l:_112};_113={t:-_10f.h/2,b:_10f.h/2,r:_10f.w/2,l:-_10f.w/2};}_ac.style(_10e===OUT?_10a:_109,{clip:_ed(_110),"z-index":1});var _114=+new Date;var _115=window.setInterval(function(){var now=+new Date;var _116=(now-_114)/_10c.duration;if(_116>1){window.clearInterval(_115);_ac.style(_10e===OUT?_10a:_109,{"z-index":0});_ac.style(_109,{clip:_ed(_110)});_ac.style(_109,{display:"none"});if(_10d){_10d.call(self);}}else{_ac.style(_10e===OUT?_10a:_109,{clip:_ed(_e9(_110,_113,_116,_10c.easing))});}},_10c.rate);};};var _117={none:function(_118,_119,_11a,_11b,_11c){_ac.style(_118,{display:"none"});_ac.style(_119,{display:"block"});var self=this;if(_11c){_11c.call(self);}},crossfade:function(_11d,_11e,_11f,_120,_121){_ac.style(_11e,{opacity:0,display:"block"});var self=this,anim=_ac.fx.combine([_ac.fadeOut({node:_11d,duration:_120.duration,easing:_120.easing,rate:_120.rate}),_ac.fadeIn({node:_11e,duration:_120.duration,easing:_120.easing,rate:_120.rate})]);_ac.connect(anim,"onEnd",anim,function(){_ac.style(_11d,{opacity:1,display:"none"});if(_121){_121.call(self);}});anim.play();},fade:function(_122,_123,_124,_125,_126){var _127=this.slides[0]===(_124===_ae?_123:_122),anim=(_124===(_127?_af:_ae))?_ac.fadeIn({node:_123,duration:_125.duration,easing:_125.easing,rate:_125.rate}):_ac.fadeOut({node:_122,duration:_125.duration,easing:_125.easing,rate:_125.rate});_ac.style(_123,{opacity:(_124===(_127?_af:_ae))?0:1,display:"block"});_ac.connect(anim,"onEnd",this,function(){_ac.style(_122,{opacity:1,display:"none"});if(_126){_126.call(this);}});anim.play();},coverLeft:_c6(_b1),coverRight:_c6(_b0),coverDown:_cb(_b2),coverUp:_cb(UP),pushLeft:_df(_b1),pushRight:_df(_b0),pushDown:_e4(_b2),pushUp:_e4(UP),wipeLeft:_ff(_b1),wipeRight:_ff(_b0),wipeDown:_103(_b2),wipeUp:_103(UP),boxIn:_107(IN),boxOut:_107(OUT)};function _128(_129,_12a,_12b){var _12c=_129(_12a/_12b);return function(_12d){return _129((_12a+_12d)/_12b)-_12c;};};function _12e(_12f,_130,_131,_132,_133){var self=this,_134=0;(function(){var fn=arguments.callee,_135=self.slides[_130+(_134*_12f)],_136=self.slides[_130+((_134+1)*_12f)],_137=_117[_132.transition]||_117.none,opts=_ac.mixin(_b4(_136,_132),{duration:_132.duration/_131,rate:_132.rate,easing:_ac.fx.easing.linear});_137.call(self,_135,_136,_12f,opts,function(){if(++_134<_131){fn.call(self);}else{if(_133){_133.call(self);}}});})();};var _138=0,_139={},_13a="";_ac.subscribe("slideshow",function(_13b){var _13c=wsgc.js.Slideshow.slideshowFor(_13b.slideshowId);if(_13c){switch(_13b.action){case "gotoSlide":_13c.gotoSlide(_13b.slide);break;case "play":_13c.play(_13b.delay||0);break;default:_13c[_13b.action]();break;}}});function _13d(evt,_13e){return evt.pageX>=_13e.x&&evt.pageX<=_13e.x+_13e.w&&evt.pageY>=_13e.y&&evt.pageY<=_13e.y+_13e.h;};_ac.declare("wsgc.js.Slideshow",null,{constructor:function(_13f,_140){if(!_13f){return;}var _141=(_ac.attr(_13f,"data-slideshow")!=="")?_ac.fromJson(_ac.attr(_13f,"data-slideshow")):{};this.options=_140=_ac.mixin({},_b3,_140||{},_141);this.slideshow=_13f;this.slides=_ac.query("> .slide",_13f);this.positioners=_ac.query(".gotoSlide",_13f);_ac.style(this.slides[0],{display:"block"});this.positioners.at(0).addClass("currentPosition");this.slideshowId=_13f.id||("_ss"+_138++);_ac.attr(this.slideshow,"id",this.slideshowId);_139[this.slideshowId]=this;this.currentSlideIndex=_140.startIndex;this.direction=_140.direction;if(this.options.autoplay){var self=this;setTimeout(function(){self.play(self.options.delay);},this.options.startdelay);}if(this.options.autopause){this._registerAutoPause();}},_registerAutoPause:function(){var _142=_ac.coords(this.slideshow,true);_ac.connect(_ac.body(),"mousemove",this,function(evt){if(!_ac.hasClass(this.slideshow,"paused")&&_13d(evt,_142)){_ac.addClass(this.slideshow,"paused");if(this.playing){this.autoPaused=true;this.pause();}var _143=_ac.connect(_ac.body(),"mousemove",this,function(evt){if(!_13d(evt,_142)){_ac.disconnect(_143);_ac.removeClass(this.slideshow,"paused");if(this.autoPaused){this.autoPaused=false;this.play();}}});}});},play:function(_144){this.playing=true;_144=_144||this.delayRemaining;if(!this.interval&&this.slides.length>1){var self=this;this.delayExpires=+new Date()+_144;this.timeout=window.setTimeout(function(){self.pause();self.next();self.play(self.options.delay);},_144);}},pause:function(){this.playing=false;if(this.timeout){window.clearTimeout(this.timeout);delete this.timeout;this.delayRemaining=Math.max(0,this.delayExpires-new Date());}},_move:function(_145){if(this.moving){return;}var self=this,_146=this.timeout,_147=self.currentSlideIndex+(_145*self.direction);this.moving=true;this.pause();if(_147===self.slides.length||_147<0){if(this.options.repeat==="loop"){_147+=_145*self.slides.length*-self.direction;}else{if(this.options.repeat==="reverse"){self.direction*=-1;_147+=self.direction*_145*2;}else{if(this.options.repeat==="rewind"){this.moving=false;if(self.direction*_145===_ae){self.rewind();}else{self.fastForward();}return;}else{this.moving=false;return;}}}}if(_147>=self.slides.length||_147<0){throw "Invalid nextIndex: "+_147;}var _148=self.slides[_147],_149=_b4(_148,this.options),_14a=_117[_149.transition]||_117.none;_14a.call(self,self.slides[self.currentSlideIndex],_148,_145,_149,function(){self.moved(_147,_149,_146);});},moved:function(_14b,_14c,_14d){this.currentSlideIndex=_14b;this.moving=false;this.positioners.removeClass("currentPosition").at(this.currentSlideIndex).addClass("currentPosition");if(_14d){this.play(_14c.delay);}},next:function(){this._move(_ae);},prev:function(){this._move(_af);},forward:function(){this.direction=_ae;},reverse:function(){this.direction=_af;},gotoSlide:function(n){if(this.moving){return;}if(n>=0&&n<this.slides.length&&n!==this.currentSlideIndex){var _14e=this.timeout;this.pause();this.moving=true;var self=this,_14f=_b4(this.slides[n],this.options),_150=_117[_14f.transition]||_117.none;if(_14f.flip){_12e.call(this,n>this.currentSlideIndex?1:-1,this.currentSlideIndex,Math.abs(n-this.currentSlideIndex),_14f,function(){self.moved(n,_14f,_14e);});}else{_150.call(this,this.slides[this.currentSlideIndex],this.slides[n],n>this.currentSlideIndex?1:-1,_14f,function(){self.moved(n,_14f,_14e);});}}},rewind:function(){this.gotoSlide(0);},fastForward:function(){this.gotoSlide(this.slides.length-1);}});_ac.mixin(wsgc.js.Slideshow,{slideshowFor:function(elem,_151){var _152="common-"+_151,_153,_154;_153=WSI.utils.closest(_152?_152.replace(/^\.?/,"."):_13a,elem);if(_153){_154=_ac.query(".slideshow",_153)[0];return _139[_154.id];}return _139[WSI.utils.closest(_151?_151.replace(/^\.?/,"."):_13a,elem).id];},registerSlideshowClass:function(_155){if(!_155){return;}_155=_155.replace(/^\./,"");if(!new RegExp("\b"+_155+"\b").test(_13a)){_13a+=" ."+_155;_ac.forEach(["next","prev"],function(_156){WSI.Events.delegate("click",".common-"+_155+" .arrows ."+_156,function(evt){var _157=wsgc.js.Slideshow.slideshowFor(this,_155);if(_157){_157[_156]();}});});_ac.forEach(["play","pause","next","prev","forward","reverse","rewind","fastForward"],function(_158){WSI.Events.delegate("click","."+_155+" ."+_158,function(evt){var _159=wsgc.js.Slideshow.slideshowFor(this,_155);if(_159){_159[_158]();}});});WSI.Events.delegate("click","."+_155+" .gotoSlide",function(evt){var _15a=wsgc.js.Slideshow.slideshowFor(this,_155);if(_15a){_15a.gotoSlide(_ac.query(this).prevAll(".gotoSlide").length);}});}}});_ac.addOnLoad(function(){wsgc.js.Slideshow.slideshows=_ac.query(".slideshow").map(function(_15b){return new wsgc.js.Slideshow(_15b);});});wsgc.js.Slideshow.registerSlideshowClass("slideshow");})(dojo);}