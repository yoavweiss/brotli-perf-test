/* NOPLUGIN - Script:NP%20Prod%20Lego%20Homepage - ScriptInstance:269ed1 - ModifiedAt:2015-04-23 15:44:56 - CompiledAt:2015-04-23 11:45:02 */

(function(){var compiledTemplate0="";var compiledTemplate1="";window.NATIVEADS=window.NATIVEADS||{};window.NATIVEADS.injectedAt=(new Date).getTime();window.NATIVEADS.onReady=function(ads){var MVPropertyID="NA-NATIPOST-11236855";ads.setPropertyID(MVPropertyID);ads.setSecondaryPageURL("/index.html");var aamValues="";var aam_uuid="";try{aamValues=get_aamCookie("aam_adtag");aam_uuid=get_aamCookie("aam_uuid")}catch(err){}ads.insertPreview({label:"MainTop - nationalpost.com - Homepage",unit:{server:"dfp",id:"/3081/npo_ind/index",size:"2x2",targets:{loc:"main",pos:"1",outfitType:"mainmop",aam:aamValues,aamID:aam_uuid,imp:"index",ck:"index",blog:"index",pr:"np",staging:"false"}},location:"#npContentMain #NativeAdsA",infoText:"",infoButtonText:"Information here",template:compiledTemplate0,onRender:function($element){jQuery("#npContentMain #NativeAdsA").next().children(".npRuleLight:last-child").remove()},onFill:function(data){try{data.custom.natInfo=data.custom.Type.split("&")[1];data.custom.Type=data.custom.Type.split("&")[0]}catch(err){data.custom.natInfo=""}},onError:function(error){}});ads.insertPreview({label:"RightRail - nationalpost.com - Homepage",unit:{server:"dfp",id:"/3081/npo_ind/index",size:"2x2",targets:{loc:"right",pos:"1",outfitType:"rightrail",aam:aamValues,aamID:aam_uuid,imp:"index",ck:"index",blog:"index",pr:"np",staging:"false"}},location:"#npContentSide #NativeAdsA",infoText:"",infoButtonText:"Information Information",template:compiledTemplate0,onRender:function($element){},onFill:function(data){try{data.custom.natInfo=data.custom.Type.split("&")[1];data.custom.Type=data.custom.Type.split("&")[0]}catch(err){data.custom.natInfo=""}},onError:function(error){}});ads.injectCSS(".npNavAdsA img{width:140px;height:auto;}.npNavAdsA .sponsored-wrap {padding-bottom:2px;} .npNavAdsA .sponsored-label{font-size:10px;line-height: 1.4em;color: #666;text-transform: uppercase;margin:-5px 0 0 2px!important} .npNavAdsA .sponsored-label a,.npNavAdsA .sponsored-label span{display:block;font-weight:bold;color:#000;} .npNavAdsA .sponsored-icon {float:left;margin:-1px 2px -1px 0!important;} .npNavAdsA .sponsored-icon img {width:14px;height:14px;vertical-align:middle;} .npNavAdsA .sponsored-icon-popup{font-size:11px;color:#000;right:auto;text-transform:none;} ","head");ads.insertPreview({label:"MainMid - nationalpost.com - Homepage",unit:{server:"dfp",id:"/3081/npo_ind/index",size:"2x2",targets:{loc:"main",pos:"2",outfitType:"mainmid",aam:aamValues,aamID:aam_uuid,imp:"index",ck:"index",blog:"index",pr:"np",staging:"false"}},location:"#npContentMain #NativeAdsB",infoText:"",infoButtonText:"Information here",template:compiledTemplate1,onRender:function($element){jQuery("#npContentMain #NativeAdsB").parent().next().children(".npGutter").remove()},onFill:function(data){try{data.custom.natInfo=data.custom.Type.split("&")[1];data.custom.Type=data.custom.Type.split("&")[0]}catch(err){data.custom.natInfo=""}},onError:function(error){}});ads.injectCSS(".npNavAdsB img{width:300px;height:auto;} .npNavAdsB .sponsored-label {font-size:10px;line-height: 1.4em;color: #666;text-transform: uppercase;margin:5px 0 5px 2px!important} .npNavAdsB .sponsored-label a,.npNavAdsB .sponsored-label span{display:inline-block;font-weight:bold;color:#000;} .npNavAdsB .sponsored-icon {float:left;margin:-1px 2px -1px 0!important;} .npNavAdsB .sponsored-icon img {width:14px;height:14px;vertical-align:middle;} .npNavAdsB .sponsored-icon-popup{font-size:11px;color:#000;right:auto;text-transform:none;}","head");ads.configureSecondaryPage({binding:{sponsor:{link:"#sponsor-link",logo:"#sponsor-logo",name:"#sponsor-name"},title:"#title",summary:"#summary",content:"#content",author:"#author",pubDate:"#pub-date",image:{href:"#media",caption:"#media-caption",credits:"#media-credits"}},onFill:function(data){},onRender:function(){},onError:function(error){},track:function(){if(location.pathname.indexOf("sponsored")>=0){return"inbound"}}})};compiledTemplate0=function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var buffer="",stack1,stack2,functionType="function",escapeExpression=this.escapeExpression,self=this;function program1(depth0,data){var buffer="",stack1;buffer+='<a href="'+escapeExpression((stack1=(stack1=depth0.sponsor,stack1==null||stack1===false?stack1:stack1.link),typeof stack1===functionType?stack1.apply(depth0):stack1))+'">'+escapeExpression((stack1=(stack1=depth0.sponsor,stack1==null||stack1===false?stack1:stack1.name),typeof stack1===functionType?stack1.apply(depth0):stack1))+"</a>";return buffer}function program3(depth0,data){var buffer="",stack1;buffer+="<span>"+escapeExpression((stack1=(stack1=depth0.sponsor,stack1==null||stack1===false?stack1:stack1.name),typeof stack1===functionType?stack1.apply(depth0):stack1))+"</span>";return buffer}buffer+='<div class="npBlock npWidget01 npWidget09 npRule npNavAdsA">\n   <div class="sponsored-wrap">\n     <div class="sponsored-label">\n      <div class="sponsored-icon">\n       <img src="http://www.nationalpost.com/images/info-icon.jpg" tabindex="0" />\n       <div class="sponsored-icon-popup">'+escapeExpression((stack1=(stack1=depth0.custom,stack1==null||stack1===false?stack1:stack1.natInfo),typeof stack1===functionType?stack1.apply(depth0):stack1))+'<img src="http://www.nationalpost.com/images/close.png" tabindex="0" />\n       </div>\n      </div>\n       '+escapeExpression((stack1=(stack1=depth0.custom,stack1==null||stack1===false?stack1:stack1.Type),typeof stack1===functionType?stack1.apply(depth0):stack1))+" ";stack2=helpers["if"].call(depth0,(stack1=depth0.sponsor,stack1==null||stack1===false?stack1:stack1.link),{hash:{},inverse:self.program(3,program3,data),fn:self.program(1,program1,data),data:data});if(stack2||stack2===0){buffer+=stack2}buffer+='</div>\n   </div>\n   \n    <h2><a href="';if(stack2=helpers.link){stack2=stack2.call(depth0,{hash:{},data:data})}else{stack2=depth0.link;stack2=typeof stack2===functionType?stack2.apply(depth0):stack2}buffer+=escapeExpression(stack2)+'">';if(stack2=helpers.title){stack2=stack2.call(depth0,{hash:{},data:data})}else{stack2=depth0.title;stack2=typeof stack2===functionType?stack2.apply(depth0):stack2}buffer+=escapeExpression(stack2)+'</a></h2>\n    <a href="';if(stack2=helpers.link){stack2=stack2.call(depth0,{hash:{},data:data})}else{stack2=depth0.link;stack2=typeof stack2===functionType?stack2.apply(depth0):stack2}buffer+=escapeExpression(stack2)+'"><img src="'+escapeExpression((stack1=(stack1=depth0.image,stack1==null||stack1===false?stack1:stack1.href),typeof stack1===functionType?stack1.apply(depth0):stack1))+'" class="npLeft"></a>\n    <div class="npImgClearThumb"><p>';if(stack2=helpers.summary){stack2=stack2.call(depth0,{hash:{},data:data})}else{stack2=depth0.summary;stack2=typeof stack2===functionType?stack2.apply(depth0):stack2}if(stack2||stack2===0){buffer+=stack2}buffer+="</p></div>\n </div>";return buffer};compiledTemplate1=function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var buffer="",stack1,stack2,functionType="function",escapeExpression=this.escapeExpression,self=this;function program1(depth0,data){var buffer="",stack1;buffer+='<a href="'+escapeExpression((stack1=(stack1=depth0.sponsor,stack1==null||stack1===false?stack1:stack1.link),typeof stack1===functionType?stack1.apply(depth0):stack1))+'">'+escapeExpression((stack1=(stack1=depth0.sponsor,stack1==null||stack1===false?stack1:stack1.name),typeof stack1===functionType?stack1.apply(depth0):stack1))+"</a>";return buffer}function program3(depth0,data){var buffer="",stack1;buffer+="<span>"+escapeExpression((stack1=(stack1=depth0.sponsor,stack1==null||stack1===false?stack1:stack1.name),typeof stack1===functionType?stack1.apply(depth0):stack1))+"</span>";return buffer}buffer+='<div class="npBlock npWidget03 npNavAdsB">\n  <a href="';if(stack1=helpers.link){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.link;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'"><img src="'+escapeExpression((stack1=(stack1=depth0.image,stack1==null||stack1===false?stack1:stack1.href),typeof stack1===functionType?stack1.apply(depth0):stack1))+'"></a>\n  <div class="sponsored-wrap">\n    <div class="sponsored-label">\n     <div class="sponsored-icon">\n      <img src="http://www.nationalpost.com/images/info-icon.jpg" tabindex="0" />\n      <div class="sponsored-icon-popup">'+escapeExpression((stack1=(stack1=depth0.custom,stack1==null||stack1===false?stack1:stack1.natInfo),typeof stack1===functionType?stack1.apply(depth0):stack1))+'<img src="http://www.nationalpost.com/images/close.png" tabindex="0" />\n       </div>\n     </div>\n      '+escapeExpression((stack1=(stack1=depth0.custom,stack1==null||stack1===false?stack1:stack1.Type),typeof stack1===functionType?stack1.apply(depth0):stack1))+" ";stack2=helpers["if"].call(depth0,(stack1=depth0.sponsor,stack1==null||stack1===false?stack1:stack1.link),{hash:{},inverse:self.program(3,program3,data),fn:self.program(1,program1,data),data:data});if(stack2||stack2===0){buffer+=stack2}buffer+='</div>\n   </div>\n  <h3><a href="';if(stack2=helpers.link){stack2=stack2.call(depth0,{hash:{},data:data})}else{stack2=depth0.link;stack2=typeof stack2===functionType?stack2.apply(depth0):stack2}buffer+=escapeExpression(stack2)+'">';if(stack2=helpers.title){stack2=stack2.call(depth0,{hash:{},data:data})}else{stack2=depth0.title;stack2=typeof stack2===functionType?stack2.apply(depth0):stack2}buffer+=escapeExpression(stack2)+"</a></h3>\n  <p>";if(stack2=helpers.summary){stack2=stack2.call(depth0,{hash:{},data:data})}else{stack2=depth0.summary;stack2=typeof stack2===functionType?stack2.apply(depth0):stack2}if(stack2||stack2===0){buffer+=stack2}buffer+="</p>\n</div>\n\n\n";return buffer}})();(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return}js=d.createElement(s);js.id=id;js.type="text/javascript";js.async=true;js.src="http://plugin.mediavoice.com/plugin.js";fjs.parentNode.insertBefore(js,fjs)})(document,"script","nativeads-plugin");