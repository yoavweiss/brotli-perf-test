(function($){var lib=window.lib={image:{preload:function(images){var tImageArr=[];var tImages=images.split(",");$(tImages).each(function(i){tImageArr[i]=new Image();tImageArr[i].src=tImages[i]})},isComplete:function(selector){var complete=true;$(selector).each(function(){if(!$(this).get(0).complete){complete=false}});return complete}},input:{defaultText:function(selector,settings){var settings=$.extend({defaultText:"enter keyword or item"},settings);$(selector).each(function(){$(this).focus(function(){if($(this).val()==settings.defaultText){$(this).val("")}});$(this).blur(function(){$(this).val(lib.utils.strTrim($(this).val()));if($(this).val()==""){$(this).val(settings.defaultText)}});$(this).blur()})},setMaxCharacters:function(selector,settings){var settings=$.extend({limit:500,results:"#_donotplace"},settings);$(selector).bind("keyup.max_characters",function(){if($(this).val().length>settings.limit){$(this).val($(this).val().substring(0,settings.limit))}var remainingCount=((settings.limit-$(this).val().length)==0)?"0":settings.limit-$(this).val().length;$(settings.results).html(remainingCount)});$(selector).keyup()},autoAdvance:function(selector){$(selector).each(function(i){$(this).keyup(function(){if($(this).val().length>=$(this).prop("maxlength")){$(this).blur();$(selector).eq(i+1).focus()}})})}},link:{popupWindow:function(selector,settings){$(selector).click(function(evt){evt.preventDefault();lib.link.openPopup($(this).attr("href"),settings)})},openPopup:function(url,settings){var settings=jQuery.extend({name:"Popup_Window",width:500,height:500,toolbar:0,menubar:0,location:0,directories:0,status:0,scrollbars:0,resizable:0},settings);var features="width="+settings.width+","+"height="+settings.height+","+"toolbar="+settings.toolbar+","+"menubar="+settings.menubar+","+"location="+settings.location+","+"directories="+settings.directories+","+"status="+settings.status+","+"scrollbars="+settings.scrollbars+","+"resizable="+settings.resizable;var newWindow=window.open(url,settings.name,features);if(newWindow!=null){newWindow.focus()}}},screen:{position:function(){if(typeof(window.pageYOffset)=='number'){return[window.pageXOffset,window.pageYOffset]}else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){return[document.body.scrollLeft,document.body.scrollTop]}else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){return[document.documentElement.scrollLeft,document.documentElement.scrollTop]}else{return[0,0]}},size:function(){var myWidth=0,myHeight=0;if(typeof(window.innerWidth)=='number'){myWidth=window.innerWidth;myHeight=window.innerHeight}else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){myWidth=document.documentElement.clientWidth;myHeight=document.documentElement.clientHeight}else if(document.body&&(document.body.clientWidth||document.body.clientHeight)){myWidth=document.body.clientWidth;myHeight=document.body.clientHeight}return[myWidth,myHeight]}},layer:{initManager:function(){$(window).unbind("resize.layerManager").bind("resize.layerManager",function(){$(".lib__keepcentered").each(function(){lib.layer.center("#"+$(this).attr("id"))});$(".lib__shouldbecentered").each(function(){$(this).addClass("lib__keepcentered").removeClass("lib__shouldbecentered");lib.layer.center("#"+$(this).attr("id"))})}).unbind("scroll.layerManager").bind("scroll.layerManager",function(){$(".lib__keepcentered").each(function(){lib.layer.center("#"+$(this).attr("id"))})})},create:function(selector,settings){var settings=$.extend({closeSelector:"#_none",url:null,defaultContent:"",xPos:null,yPos:null,keepCentered:false,callback:null,method:"get",data:null,transition:false},settings);lib.layer.add(selector,settings);if(settings.url!=null){if(settings.method=="get"){$.get(settings.url,settings.data,function(data){settings.defaultContent=data;lib.layer.add(selector,settings);if(settings.callback!=null){settings.callback()}})}else{$.post(settings.url,settings.data,function(data){settings.defaultContent=data;lib.layer.add(selector,settings);if(settings.callback!=null){settings.callback()}})}}else{if(settings.callback!=null){settings.callback()}}},add:function(selector,settings){lib.layer.remove(selector);var layerTransitionHTML=(settings.transition)?('class="lib__transition" style="opacity:0;filter:alpha(opacity=0)"'):"";var addHTML='<div id="'+selector.split("#")[1]+'" '+layerTransitionHTML+'></div>';$("body").append(addHTML);if(settings.xPos!=null&&settings.yPos!=null){$(selector).css("left",settings.xPos+"px").css("top",settings.yPos+"px");$(selector).append(settings.defaultContent)}else{if(settings.keepCentered){$(selector).addClass("lib__keepcentered")}lib.layer.center(selector);$(selector).append(settings.defaultContent);lib.layer.center(selector)}if(settings.transition){$(selector).fadeTo(250,1)}lib.layer.ie6Fix(selector,"a");lib.layer.closeButton(settings.closeSelector,selector)},remove:function(selector){$(selector).remove();lib.layer.ie6Fix(selector,"r")},center:function(selector){var wPosition=lib.screen.position();var wSize=lib.screen.size();var left=0;left=((wSize[0]-$(selector).width())/2);left=(left<0)?20:left;left+=wPosition[0];var top=0;top=((wSize[1]-$(selector).height())/2);top=(top<0)?20:top;top+=wPosition[1];if(($(selector).width()>wSize[0])||($(selector).height()>wSize[1])){if($(selector).hasClass("lib__keepcentered")){$(selector).removeClass("lib__keepcentered").addClass("lib__shouldbecentered")}}$(selector).css("top",top+"px").css("left",left+"px");lib.layer.ie6Fix(selector,"u")},closeButton:function(selector,layerSelector){$(layerSelector+" "+selector).unbind("click.lib.layer.close").bind("click.lib.layer.close",function(evt){evt.preventDefault();lib.layer.remove(layerSelector)})},ie6Fix:function(selector,action){if(lib.utils.isIE6()){var fixId=selector.split("#")[1]+"-iframe";var exists=$("#"+fixId).length>0?true:false;if(action=="r"&&exists){$("#"+fixId).remove()}if(((action=="a")||(action=="u"))&&!exists){fixHTML='<div id="'+fixId+'"><iframe width="100%" height="100%" frameborder="0" src="/css/blank.gif" style="filter:progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0);"><!----></iframe></div>';$("body").append(fixHTML);exists=$("#"+fixId).length>0?true:false}if((action=="a"||"u")&&exists){$("#"+fixId).css("position",$(selector).css("position"));$("#"+fixId).css("height",$(selector).height());$("#"+fixId).css("width",$(selector).width());$("#"+fixId).css("margin-left",$(selector).css("margin-left"));$("#"+fixId).css("margin-right",$(selector).css("margin-right"));$("#"+fixId).css("margin-top",$(selector).css("margin-top"));$("#"+fixId).css("margin-bottom",$(selector).css("margin-bottom"));$("#"+fixId).css("top",$(selector).css("top"));$("#"+fixId).css("left",$(selector).css("left"));$("#"+fixId).css("bottom",$(selector).css("bottom"));$("#"+fixId).css("right",$(selector).css("right"));$("#"+fixId).css("z-index",$(selector).css("z-index")-1)}}}},utils:{isIE6:function(){var IE6=/msie|MSIE 6/.test(navigator.userAgent);return IE6},timestamp:function(){return new Date().getTime()},strTrim:function(s){return s.replace(/^\s+|\s+$/g,"")},getPosition:function(selector){var positions=[];$(selector).each(function(i){var offset=$(this).offset();positions[positions.length]=[offset.left,offset.top]});return positions},strTruncate:function(selector,settings){var settings=$.extend({length:20,postfix:"..."},settings);settings.length-=settings.postfix.length;$(selector).each(function(){var text=$(this).text();if(text.length>settings.length){var tIndex=settings.length-1;while((text.charAt(tIndex)!=" ")&&(tIndex>0)){tIndex--}tIndex=(tIndex==0)?settings.length:tIndex+1;$(this).text(text.substr(0,tIndex)+settings.postfix)}})},cookie:function(settings){var settings=$.extend({name:"",value:null,expires:null,path:null,domain:null,secure:null},settings);var cookieValue=null;if(settings.name!=""){if(settings.value!=null||settings.expires!=null){settings.value=(settings.value==null)?"":settings.value;var cookieString=settings.name+"="+encodeURIComponent(settings.value);if(settings.expires!=null){var expirationDate=new Date();expirationDate.setTime(expirationDate.getTime()+(settings.expires*24*60*60*1000));cookieString+=";expires="+expirationDate.toUTCString()}cookieString+=(settings.path!=null)?";path="+settings.path:"";cookieString+=(settings.domain!=null)?";domain="+settings.domain:"";cookieString+=(settings.secure!=null)?";secure":"";document.cookie=cookieString}if(document.cookie.length>0){var results=document.cookie.match('(^|;)?'+settings.name+'=([^;]*)(;|$)');if(results){cookieValue=decodeURIComponent(results[2])}}}return cookieValue}},func:{formSetup:function(){var formSelector=".formArea";var globalErrorClass="errorText";var formFieldHighlightClass="formFieldHighlight";var formEntryErrorClass="formError";var formEntryClass="formEntry";var inputs="input,select,textarea";$(formSelector+" ."+globalErrorClass).each(function(){$(this).parents("."+formEntryClass).addClass(formEntryErrorClass)});$(inputs,$(formSelector)).bind("focus.fields",function(evt){if((!$(evt.target).is("input[type=image]"))&&(!$(evt.target).is("input[type=radio]"))&&(!$(evt.target).is("input[type=checkbox]"))){$(evt.target).addClass(formFieldHighlightClass)}});$(inputs,$(formSelector)).bind("blur.fields",function(evt){$(evt.target).removeClass(formFieldHighlightClass)});$("select",$(formSelector)).mousedown(function(evt){$(evt.target).addClass(formFieldHighlightClass)})}},obj:{contentCollection:function(settings){if(arguments.length>0){this.init(settings)}},itemSlider:function(settings){if(arguments.length>0){this.init(settings)}},ajaxItemSlider:function(settings){if(arguments.length>0){this.init(settings)}},button:function(settings){if(arguments.length>0){this.init(settings)}},pageOverlay:function(settings){if(arguments.length>0){this.init(settings)}}},about:function(){}};lib.obj.button.prototype.init=function(settings){var settings=jQuery.extend({off:"but-off.gif",on:"but-on.gif",hover:"but-hover.gif",hasClick:false,hasHover:true,activeId:"but-active",cssButton:false,cssOff:"glo-but-css-off",cssOn:"glo-but-css-on",cssHover:"glo-but-css-hover",buttonSelector:".but-class",buttonCollectionSelector:".but-class"},settings);this.buttonSelector=settings.buttonSelector;this.buttonCollectionSelector=settings.buttonCollectionSelector;this.activeId=settings.activeId;this.hasClick=settings.hasClick;this.hasHover=settings.hasHover;if(settings.cssButton){this.type="CSSBUTTON";this.cssOff=settings.cssOff;this.cssOn=settings.cssOn;this.cssHover=settings.cssHover;var pObj=this;$(this.buttonSelector).each(function(){if($(this).attr("id")!=pObj.activeId){$(this).addClass(pObj.cssOff)}else{$(this).removeClass(pObj.cssOff);$(this).addClass(pObj.cssOn)}if(pObj.hasHover){$(this).unbind("mouseover.button").bind("mouseover.button",function(){if($(this).attr("id")!=pObj.activeId){$(this).removeClass(pObj.cssOff);$(this).addClass(pObj.cssHover)}});$(this).unbind("mouseout.button").bind("mouseout.button",function(){if($(this).attr("id")!=pObj.activeId){$(this).removeClass(pObj.cssHover);$(this).addClass(pObj.cssOff)}})}if(pObj.hasClick){$(this).unbind("click.button").bind("click.button",function(){if($(this).attr("id")!=pObj.activeId){$(pObj.buttonCollectionSelector).attr("id","");$(pObj.buttonCollectionSelector).removeClass(pObj.cssHover);$(pObj.buttonCollectionSelector).removeClass(pObj.cssOn);$(pObj.buttonCollectionSelector).trigger("mouseout.button");$(this).removeClass(pObj.cssOff);$(this).addClass(pObj.cssOn);$(this).attr("id",pObj.activeId)}})}})}else{this.type="IMAGEBUTTON";this.off=settings.off;this.on=settings.on;this.hover=settings.hover;var pObj=this;$(this.buttonSelector).each(function(){$(this).unbind("mouseout.button").bind("mouseout.button",function(){if($(this).attr("id")!=pObj.activeId){$(this).attr("src",pObj.off)}});if(pObj.hasHover){$(this).unbind("mouseover.button").bind("mouseover.button",function(){if($(this).attr("id")!=pObj.activeId){$(this).attr("src",pObj.hover)}})}if(pObj.hasClick){$(this).unbind("click.button").bind("click.button",function(){if($(this).attr("id")!=pObj.activeId){$(pObj.buttonCollectionSelector).attr("id","");$(pObj.buttonCollectionSelector).trigger("mouseout.button");$(this).attr("src",pObj.on);$(this).attr("id",pObj.activeId)}})}});lib.image.preload(pObj.off);if(pObj.hasClick){lib.image.preload(pObj.on)}if(pObj.hasHover){lib.image.preload(pObj.hover)}}};lib.obj.itemSlider.prototype.init=function(settings){var settings=$.extend({viewport:"#widget-slider-viewport",content:"#widget-slider-content",next:"#widget-slider-next",prev:"#widget-slider-prev",first:"#widget-slider-first",last:"#widget-slider-last",item:"div",direction:"vertical",showAmount:3,scrollAmount:1,circular:false,interval:350,easing:"linear",preMoveCallback:null,postMoveCallback:null},settings);this.viewport=settings.viewport;this.content=settings.content;this.next=settings.next;this.prev=settings.prev;this.first=settings.first;this.last=settings.last;this.item=settings.item;this.circular=settings.circular;this.interval=settings.interval;this.easing=settings.easing;this.direction=settings.direction;this.showAmount=settings.showAmount;this.sliderInfo=new Object();this.sliderInfo.index=0;this.scrollAmount=settings.scrollAmount;this.sliderInfo.end=$(this.item).length-this.showAmount;this.preMoveCallback=settings.preMoveCallback;this.postMoveCallback=settings.postMoveCallback;$(this.item+"*").add($(this.item)).each(function(){if($(this).css("overflow")=="auto"){$(this).addClass("is__overflow")}});if($(this.viewport).length>0){$(this.viewport).animate({scrollTop:0,scrollLeft:0},{duration:1});this.overflowBeforeMove();this.overflowAfterMove();$(this.next).hide();$(this.prev).hide();if(this.circular&&($(this.item).length>this.showAmount)){$(this.next).show();$(this.prev).show()}else if(!this.circular&&($(this.item).length>this.showAmount)){$(this.next).show()}if(this.direction=="vertical"){this.sliderInfo.itemSize=$(this.item).eq(0).height()}else{this.sliderInfo.itemSize=$(this.item).eq(0).width();$(this.content).css("width",(this.sliderInfo.itemSize*$(this.item).length)+"px")}this.removeEvents();$(this.next+","+this.prev+","+this.first+","+this.last).click(function(evt){evt.preventDefault()});this.createEvents()}};lib.obj.itemSlider.prototype.overflowBeforeMove=function(){$(this.content+" .is__overflow").css("overflow","hidden")};lib.obj.itemSlider.prototype.overflowAfterMove=function(){$(this.item).slice(this.sliderInfo.index,this.sliderInfo.index+this.showAmount).each(function(){if($(this).hasClass("is__overflow")){$(this).css("overflow","auto")}$(".is__overflow",this).css("overflow","auto")})};lib.obj.itemSlider.prototype.createEvents=function(){var currObj=this;$(this.prev).bind("click.itemSlider",function(evt){currObj.backward()});$(this.next).bind("click.itemSlider",function(evt){currObj.forward()});$(this.first).bind("click.itemSlider",function(evt){currObj.toFirst()});$(this.last).bind("click.itemSlider",function(evt){currObj.toLast()})};lib.obj.itemSlider.prototype.removeEvents=function(){$(this.prev).unbind("click.itemSlider");$(this.next).unbind("click.itemSlider");$(this.last).unbind("click.itemSlider");$(this.first).unbind("click.itemSlider")};lib.obj.itemSlider.prototype.move=function(){this.removeEvents();this.overflowBeforeMove();if(this.circular){if(this.sliderInfo.index>this.sliderInfo.end){this.sliderInfo.index=0}else if(this.sliderInfo.index<0){this.sliderInfo.index=this.sliderInfo.end}}else{if(this.sliderInfo.index>this.sliderInfo.end){this.sliderInfo.index=this.sliderInfo.end}else if(this.sliderInfo.index<0){this.sliderInfo.index=0}}if(!this.circular){if(this.sliderInfo.index==this.sliderInfo.end){$(this.next).hide()}else if(this.sliderInfo.end>0){$(this.next).show()}if(this.sliderInfo.index==0){$(this.prev).hide()}else{$(this.prev).show()}}if($.isFunction(this.preMoveCallback)){this.preMoveCallback(this)}var currObj=this;var newPos=this.sliderInfo.index*this.sliderInfo.itemSize;if(this.direction=="vertical"){var params={scrollTop:newPos}}else{var params={scrollLeft:newPos}}$(this.viewport).animate(params,{duration:this.interval,easing:this.easing,complete:function(){currObj.overflowAfterMove();currObj.createEvents();if($.isFunction(currObj.postMoveCallback)){currObj.postMoveCallback(currObj)}}})};lib.obj.itemSlider.prototype.forward=function(){this.sliderInfo.index+=this.scrollAmount;this.move()};lib.obj.itemSlider.prototype.backward=function(){this.sliderInfo.index-=this.scrollAmount;this.move()};lib.obj.itemSlider.prototype.toFirst=function(){this.sliderInfo.index=0;this.move()};lib.obj.itemSlider.prototype.toLast=function(){this.sliderInfo.index=this.sliderInfo.end;this.move()};lib.obj.ajaxItemSlider.prototype.init=function(settings){var settings=$.extend({url:"",ajaxItemSelector:"div",pageSize:1,preMoveCallback:null,makeInitialRequest:true},settings);this.makeInitialRequest=settings.makeInitialRequest;this.url=settings.url;this.pageSize=settings.pageSize;this.ajaxItemSelector=settings.ajaxItemSelector;var currObj=this;var tempCallback=null;if($.isFunction(settings.preMoveCallback)){tempCallback=settings.preMoveCallback}settings.preMoveCallback=function(slider){var start=slider.sliderInfo.index;var end=slider.sliderInfo.index+(slider.scrollAmount*currObj.pageSize);end=(end>currObj.itemStatus.length)?currObj.itemStatus.length:end;var doRequest=false;for(var x=start;x<(start+slider.scrollAmount);x++){if(currObj.itemStatus[x]==undefined){doRequest=true;x=end}}if(doRequest){$.get(currObj.url,{start:start,end:end},function(data){$(data).filter(currObj.ajaxItemSelector).each(function(i){$(slider.item).eq(start+i).html($(this).html())});for(var x=start;x<end;x++){currObj.itemStatus[x]=1}})}if($.isFunction(tempCallback)){tempCallback(slider)}};this.slider=new lib.obj.itemSlider(settings);this.itemStatus=new Array($(this.slider.item).length);if(this.makeInitialRequest){var temp=this.slider.scrollAmount;this.slider.scrollAmount=this.slider.showAmount;this.slider.move();this.slider.scrollAmount=temp}else{for(var x=0;x<this.slider.showAmount;x++){currObj.itemStatus[x]=1}}};lib.obj.contentCollection.prototype.init=function(settings){var settings=$.extend({selectorContent:".lib_cC_Content",selectorActivator:".lib_cC_Activator",defaultIndex:0},settings);this.selectorContent=settings.selectorContent;this.defaultIndex=settings.defaultIndex;this.eventName="click.contentCollection_"+lib.utils.timestamp();this.selectorActivators=settings.selectorActivator.split(",");this.activateContent(this.defaultIndex);var this_contentCollection=this;for(var x=0;x<this.selectorActivators.length;x++){$(this.selectorActivators[x]).each(function(i){$(this).unbind(this_contentCollection.eventName).bind(this_contentCollection.eventName,function(evt){evt.preventDefault();this_contentCollection.activateContent(i)})})}};lib.obj.contentCollection.prototype.activateContent=function(index){$(this.selectorContent).hide();$(this.selectorContent).eq(index).show()};lib.obj.pageOverlay.prototype.init=function(settings){var settings=jQuery.extend({selector:"#widget-pageOverlay"},settings);var myOverlay=this;this.selector=settings.selector;this.currentInfo={};this.addOverlay()};lib.obj.pageOverlay.prototype.resize=function(){if(($(window).width()!=this.currentInfo.wWidth)||($(window).height()!=this.currentInfo.wHeight)||($(document).width()!=this.currentInfo.dWidth)||($(document).height()!=this.currentInfo.dHeight)){this.currentInfo.wWidth=$(window).width();this.currentInfo.wHeight=$(window).height();this.currentInfo.dWidth=$(document).width();this.currentInfo.dHeight=$(document).height();$(this.selector).height($(window).height());$(this.selector).width($(window).width());var height=Math.max($(document).height(),$(window).height());var width=Math.max($(document).width(),$(window).width());$(this.selector).height(height);$(this.selector).width(width);lib.layer.ie6Fix(this.selector,'u')}};lib.obj.pageOverlay.prototype.addOverlay=function(){this.currentInfo={wWidth:0,wHeight:0,dWidth:0,dHeight:0};lib.layer.create(this.selector,{xPos:0,yPos:0,transition:false});$(this.selector).css("position","absolute");this.resize();var myOverlay=this;this.interval=setInterval(function(){myOverlay.resize()},250)};lib.obj.pageOverlay.prototype.removeOverlay=function(){lib.layer.remove(this.selector);clearInterval(this.interval)};$(function(){lib.func.formSetup();lib.layer.initManager()})})($);
/*
FILE=lib_min.js
MD5=13456c4b956ec8214a3b0debf5b6f688
BUILD NUMBER=434
BUILD REVISION=RELEASE-20160217
TIMESTAMP=02/18/2016 at 09:24:03 MST
*/