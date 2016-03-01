(function(X){var N="left",O="right",Y="up",F="down",Z="in",E="out",Q="none",J="auto",R="swipe",I="pinch",D="tap",T="doubletap",aa="longtap",M="horizontal",H="vertical",U="all",K=10,W="start",S="move",V="end",L="cancel",ab="ontouchstart" in window,C="TouchSwipe";
var P={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"button, input, select, textarea, a, .noSwipe"};
X.fn.swipe=function(a){var b=X(this),c=b.data(C);
if(c&&typeof a==="string"){if(c[a]){return c[a].apply(this,Array.prototype.slice.call(arguments,1))
}else{X.error("Method "+a+" does not exist on jQuery.swipe")
}}else{if(!c&&(typeof a==="object"||!a)){return G.apply(this,arguments)
}}return b
};
X.fn.swipe.defaults=P;
X.fn.swipe.phases={PHASE_START:W,PHASE_MOVE:S,PHASE_END:V,PHASE_CANCEL:L};
X.fn.swipe.directions={LEFT:N,RIGHT:O,UP:Y,DOWN:F,IN:Z,OUT:E};
X.fn.swipe.pageScroll={NONE:Q,HORIZONTAL:M,VERTICAL:H,AUTO:J};
X.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:U};
function G(a){if(a&&(a.allowPageScroll===undefined&&(a.swipe!==undefined||a.swipeStatus!==undefined))){a.allowPageScroll=Q
}if(a.click!==undefined&&a.tap===undefined){a.tap=a.click
}if(!a){a={}
}a=X.extend({},X.fn.swipe.defaults,a);
return this.each(function(){var b=X(this);
var c=b.data(C);
if(!c){c=new B(this,a);
b.data(C,c)
}})
}function B(a,a9){var aw=(ab||!a9.fallbackToMouseEvents),w=aw?"touchstart":"mousedown",ay=aw?"touchmove":"mousemove",j=aw?"touchend":"mouseup",l=aw?null:"mouseleave",t="touchcancel";
var bn=0,bE=null,c=0,bs=0,bu=0,ax=1,bd=0,bK=0,r=null;
var bC=X(a);
var e="start";
var h=0;
var bD=null;
var k=0,br=0,bV=0,bp=0,q=0;
var bx=null;
try{bC.bind(w,bG);
bC.bind(t,bR)
}catch(bj){X.error("events not supported "+w+","+t+" on jQuery.swipe")
}this.enable=function(){bC.bind(w,bG);
bC.bind(t,bR);
return bC
};
this.disable=function(){bJ();
return bC
};
this.destroy=function(){bJ();
bC.data(C,null);
return bC
};
this.option=function(ac,ad){if(a9[ac]!==undefined){if(ad===undefined){return a9[ac]
}else{a9[ac]=ad
}}else{X.error("Option "+ac+" does not exist on jQuery.swipe.options")
}};
function bG(ac){if(x()){return
}if(X(ac.target).closest(a9.excludedElements,bC).length>0){return
}var af=ac.originalEvent?ac.originalEvent:ac;
var ad,ae=ab?af.touches[0]:af;
e=W;
if(ab){h=af.touches.length
}else{ac.preventDefault()
}bn=0;
bE=null;
bK=null;
c=0;
bs=0;
bu=0;
ax=1;
bd=0;
bD=bk();
r=d();
m();
if(!ab||(h===a9.fingers||a9.fingers===U)||bw()){bl(0,ae);
k=bb();
if(h==2){bl(1,af.touches[1]);
bs=bu=ba(bD[0].start,bD[1].start)
}if(a9.swipeStatus||a9.pinchStatus){ad=p(af,e)
}}else{ad=false
}if(ad===false){e=L;
p(af,e);
return ad
}else{bf(true)
}}function bq(ai){var af=ai.originalEvent?ai.originalEvent:ai;
if(e===V||e===L||bh()){return
}var ac,ad=ab?af.touches[0]:af;
var ah=bM(ad);
br=bb();
if(ab){h=af.touches.length
}e=S;
if(h==2){if(bs==0){bl(1,af.touches[1]);
bs=bu=ba(bD[0].start,bD[1].start)
}else{bM(af.touches[1]);
bu=ba(bD[0].end,bD[1].end);
bK=bc(bD[0].end,bD[1].end)
}ax=bT(bs,bu);
bd=Math.abs(bs-bu)
}if((h===a9.fingers||a9.fingers===U)||!ab||bw()){bE=bI(ah.start,ah.end);
bi(ai,bE);
bn=bB(ah.start,ah.end);
c=bH();
bL(bE,bn);
if(a9.swipeStatus||a9.pinchStatus){ac=p(af,e)
}if(!a9.triggerOnTouchEnd||a9.triggerOnTouchLeave){var ae=true;
if(a9.triggerOnTouchLeave){var ag=bv(this);
ae=a7(ah.end,ag)
}if(!a9.triggerOnTouchEnd&&ae){e=v(S)
}else{if(a9.triggerOnTouchLeave&&!ae){e=v(V)
}}if(e==L||e==V){p(af,e)
}}}else{e=L;
p(af,e)
}if(ac===false){e=L;
p(af,e)
}}function s(ad){var ac=ad.originalEvent;
if(ab){if(ac.touches.length>0){az();
return true
}}if(bh()){h=bp
}ad.preventDefault();
br=bb();
c=bH();
if(bQ()){e=L;
p(ac,e)
}else{if(a9.triggerOnTouchEnd||(a9.triggerOnTouchEnd==false&&e===S)){e=V;
p(ac,e)
}else{if(!a9.triggerOnTouchEnd&&bU()){e=V;
bO(ac,e,D)
}else{if(e===S){e=L;
p(ac,e)
}}}}bf(false)
}function bR(){h=0;
br=0;
k=0;
bs=0;
bu=0;
ax=1;
m();
bf(false)
}function u(ad){var ac=ad.originalEvent;
if(a9.triggerOnTouchLeave){e=v(V);
p(ac,e)
}}function bJ(){bC.unbind(w,bG);
bC.unbind(t,bR);
bC.unbind(ay,bq);
bC.unbind(j,s);
if(l){bC.unbind(l,u)
}bf(false)
}function v(af){var ag=af;
var ac=z();
var ad=bg();
var ae=bQ();
if(!ac||ae){ag=L
}else{if(ad&&af==S&&(!a9.triggerOnTouchEnd||a9.triggerOnTouchLeave)){ag=V
}else{if(!ad&&af==V&&a9.triggerOnTouchLeave){ag=L
}}}return ag
}function p(ac,ae){var ad=undefined;
if(y()||i()){ad=bO(ac,ae,R)
}else{if((o()||bw())&&ad!==false){ad=bO(ac,ae,I)
}}if(bN()&&ad!==false){ad=bO(ac,ae,T)
}else{if(be()&&ad!==false){ad=bO(ac,ae,aa)
}else{if(bm()&&ad!==false){ad=bO(ac,ae,D)
}}}if(ae===L){bR(ac)
}if(ae===V){if(ab){if(ac.touches.length==0){bR(ac)
}}else{bR(ac)
}}return ad
}function bO(af,ae,ac){var ad=undefined;
if(ac==R){bC.trigger("swipeStatus",[ae,bE||null,bn||0,c||0,h]);
if(a9.swipeStatus){ad=a9.swipeStatus.call(bC,af,ae,bE||null,bn||0,c||0,h);
if(ad===false){return false
}}if(ae==V&&by()){bC.trigger("swipe",[bE,bn,c,h]);
if(a9.swipe){ad=a9.swipe.call(bC,af,bE,bn,c,h);
if(ad===false){return false
}}switch(bE){case N:bC.trigger("swipeLeft",[bE,bn,c,h]);
if(a9.swipeLeft){ad=a9.swipeLeft.call(bC,af,bE,bn,c,h)
}break;
case O:bC.trigger("swipeRight",[bE,bn,c,h]);
if(a9.swipeRight){ad=a9.swipeRight.call(bC,af,bE,bn,c,h)
}break;
case Y:bC.trigger("swipeUp",[bE,bn,c,h]);
if(a9.swipeUp){ad=a9.swipeUp.call(bC,af,bE,bn,c,h)
}break;
case F:bC.trigger("swipeDown",[bE,bn,c,h]);
if(a9.swipeDown){ad=a9.swipeDown.call(bC,af,bE,bn,c,h)
}break
}}}if(ac==I){bC.trigger("pinchStatus",[ae,bK||null,bd||0,c||0,h,ax]);
if(a9.pinchStatus){ad=a9.pinchStatus.call(bC,af,ae,bK||null,bd||0,c||0,h,ax);
if(ad===false){return false
}}if(ae==V&&bS()){switch(bK){case Z:bC.trigger("pinchIn",[bK||null,bd||0,c||0,h,ax]);
if(a9.pinchIn){ad=a9.pinchIn.call(bC,af,bK||null,bd||0,c||0,h,ax)
}break;
case E:bC.trigger("pinchOut",[bK||null,bd||0,c||0,h,ax]);
if(a9.pinchOut){ad=a9.pinchOut.call(bC,af,bK||null,bd||0,c||0,h,ax)
}break
}}}if(ac==D){if(ae===L||ae===V){clearTimeout(bx);
if(f()&&!A()){q=bb();
bx=setTimeout(X.proxy(function(){q=null;
bC.trigger("tap",[af.target]);
if(a9.tap){ad=a9.tap.call(bC,af,af.target)
}},this),a9.doubleTapThreshold)
}else{q=null;
bC.trigger("tap",[af.target]);
if(a9.tap){ad=a9.tap.call(bC,af,af.target)
}}}}else{if(ac==T){if(ae===L||ae===V){clearTimeout(bx);
q=null;
bC.trigger("doubletap",[af.target]);
if(a9.doubleTap){ad=a9.doubleTap.call(bC,af,af.target)
}}}else{if(ac==aa){if(ae===L||ae===V){clearTimeout(bx);
q=null;
bC.trigger("longtap",[af.target]);
if(a9.longTap){ad=a9.longTap.call(bC,af,af.target)
}}}}}return ad
}function bg(){var ac=true;
if(a9.threshold!==null){ac=bn>=a9.threshold
}return ac
}function bQ(){var ac=false;
if(a9.cancelThreshold!==null&&bE!==null){ac=(bA(bE)-bn)>=a9.cancelThreshold
}return ac
}function bo(){if(a9.pinchThreshold!==null){return bd>=a9.pinchThreshold
}return true
}function z(){var ac;
if(a9.maxTimeThreshold){if(c>=a9.maxTimeThreshold){ac=false
}else{ac=true
}}else{ac=true
}return ac
}function bi(ae,ad){if(a9.allowPageScroll===Q||bw()){ae.preventDefault()
}else{var ac=a9.allowPageScroll===J;
switch(ad){case N:if((a9.swipeLeft&&ac)||(!ac&&a9.allowPageScroll!=M)){ae.preventDefault()
}break;
case O:if((a9.swipeRight&&ac)||(!ac&&a9.allowPageScroll!=M)){ae.preventDefault()
}break;
case Y:if((a9.swipeUp&&ac)||(!ac&&a9.allowPageScroll!=H)){ae.preventDefault()
}break;
case F:if((a9.swipeDown&&ac)||(!ac&&a9.allowPageScroll!=H)){ae.preventDefault()
}break
}}}function bS(){var ad=bF();
var ae=g();
var ac=bo();
return ad&&ae&&ac
}function bw(){return !!(a9.pinchStatus||a9.pinchIn||a9.pinchOut)
}function o(){return !!(bS()&&bw())
}function by(){var ah=z();
var af=bg();
var ac=bF();
var ae=g();
var ad=bQ();
var ag=!ad&&ae&&ac&&af&&ah;
return ag
}function i(){return !!(a9.swipe||a9.swipeStatus||a9.swipeLeft||a9.swipeRight||a9.swipeUp||a9.swipeDown)
}function y(){return !!(by()&&i())
}function bF(){return((h===a9.fingers||a9.fingers===U)||!ab)
}function g(){return bD[0].end.x!==0
}function bU(){return !!(a9.tap)
}function f(){return !!(a9.doubleTap)
}function bz(){return !!(a9.longTap)
}function n(){if(q==null){return false
}var ac=bb();
return(f()&&((ac-q)<=a9.doubleTapThreshold))
}function A(){return n()
}function a0(){return((h===1||!ab)&&(isNaN(bn)||bn===0))
}function bt(){return((c>a9.longTapThreshold)&&(bn<K))
}function bm(){return !!(a0()&&bU())
}function bN(){return !!(n()&&f())
}function be(){return !!(bt()&&bz())
}function az(){bV=bb();
bp=event.touches.length+1
}function m(){bV=0;
bp=0
}function bh(){var ad=false;
if(bV){var ac=bb()-bV;
if(ac<=a9.fingerReleaseThreshold){ad=true
}}return ad
}function x(){return !!(bC.data(C+"_intouch")===true)
}function bf(ac){if(ac===true){bC.bind(ay,bq);
bC.bind(j,s);
if(l){bC.bind(l,u)
}}else{bC.unbind(ay,bq,false);
bC.unbind(j,s,false);
if(l){bC.unbind(l,u,false)
}}bC.data(C+"_intouch",ac===true)
}function bl(ad,ae){var ac=ae.identifier!==undefined?ae.identifier:0;
bD[ad].identifier=ac;
bD[ad].start.x=bD[ad].end.x=ae.pageX||ae.clientX;
bD[ad].start.y=bD[ad].end.y=ae.pageY||ae.clientY;
return bD[ad]
}function bM(ae){var ac=ae.identifier!==undefined?ae.identifier:0;
var ad=b(ac);
ad.end.x=ae.pageX||ae.clientX;
ad.end.y=ae.pageY||ae.clientY;
return ad
}function b(ac){for(var ad=0;
ad<bD.length;
ad++){if(bD[ad].identifier==ac){return bD[ad]
}}}function bk(){var ad=[];
for(var ac=0;
ac<=5;
ac++){ad.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})
}return ad
}function bL(ad,ac){ac=Math.max(ac,bA(ad));
r[ad].distance=ac
}function bA(ac){return r[ac].distance
}function d(){var ac={};
ac[N]=a8(N);
ac[O]=a8(O);
ac[Y]=a8(Y);
ac[F]=a8(F);
return ac
}function a8(ac){return{direction:ac,distance:0}
}function bH(){return br-k
}function ba(af,ac){var ad=Math.abs(af.x-ac.x);
var ae=Math.abs(af.y-ac.y);
return Math.round(Math.sqrt(ad*ad+ae*ae))
}function bT(ae,ad){var ac=(ad/ae)*1;
return ac.toFixed(2)
}function bc(){if(ax<1){return E
}else{return Z
}}function bB(ac,ad){return Math.round(Math.sqrt(Math.pow(ad.x-ac.x,2)+Math.pow(ad.y-ac.y,2)))
}function bP(ah,ad){var ae=ah.x-ad.x;
var af=ad.y-ah.y;
var ac=Math.atan2(af,ae);
var ag=Math.round(ac*180/Math.PI);
if(ag<0){ag=360-Math.abs(ag)
}return ag
}function bI(ad,ae){var ac=bP(ad,ae);
if((ac<=45)&&(ac>=0)){return N
}else{if((ac<=360)&&(ac>=315)){return N
}else{if((ac>=135)&&(ac<=225)){return O
}else{if((ac>45)&&(ac<135)){return F
}else{return Y
}}}}}function bb(){var ac=new Date();
return ac.getTime()
}function bv(ae){ae=X(ae);
var ac=ae.offset();
var ad={left:ac.left,right:ac.left+ae.outerWidth(),top:ac.top,bottom:ac.top+ae.outerHeight()};
return ad
}function a7(ad,ac){return(ad.x>ac.left&&ad.x<ac.right&&ad.y>ac.top&&ad.y<ac.bottom)
}}})(jQuery);