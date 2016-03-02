rb.registerNamespace("rb.widget");rb.widget.titletooltiprollup=rb.widget.base.extend({get_hoverDelay:function(){return this._hoverDelay},set_hoverDelay:function(a){this._hoverDelay=a},get_productViewInstanceName:function(){return this._productViewInstanceName},set_productViewInstanceName:function(a){this._productViewInstanceName=a},init:function(){this._super();this._currentLookupID=-1;this._data={};this._registeredControls={};this._displayConfig={};this._hideDelay=200;this._mouseTimerDelay=600;this._tooltipID=null;this._hoverTimerHash=null;this._hideTimerHash=null;this._mouseTimerHash=null;this._hoverCtl=null;this._productViewInstanceName=null;this._productView=null;this._template=null;this._tooltip=null;this._buttonSetWidget=null;this.titleInWishList=false;this._wishListScope=null;this._currentItemAdded=null;this._wishListItemRemoved=false;this._wishListButtonLocked=false;this._uiBlockingEvent=false;this._delegates={onDataReceived:rb.createDelegate(this,this._onDataReceived),onHide:rb.createDelegate(this,this._onHide),onHideDelay:rb.createDelegate(this,this._onHideDelay),onHover:rb.createDelegate(this,this._onHover),onHoverDelay:rb.createDelegate(this,this._onHoverDelay),onAddRemoveBookmark:rb.createDelegate(this,this._onAddRemoveBookmark),onAddRemoveBookmarkSuccess:rb.createDelegate(this,this._onAddRemoveBookmarkSuccess),onAddRemoveBookmarkSuccessNonComingSoon:rb.createDelegate(this,this._onAddRemoveBookmarkSuccessNonComingSoon),onAddRemoveBookmarkSuccessComingSoon:rb.createDelegate(this,this._onAddRemoveBookmarkSuccessComingSoon),onButtonStart:rb.createDelegate(this,this._onButtonStart),onButtonFinished:rb.createDelegate(this,this._onButtonFinished),onUIBlockingEventEnd:rb.createDelegate(this,this._onUIBlockingEventEnd),onMouseLeave:rb.createDelegate(this,this._onMouseLeave),clearMouseTimer:rb.createDelegate(this,this._clearMouseTimer)}},bind:function(){rb.parseTemplate(this._template,this._tooltip,[this._data]);var a=$("div.titletooltiprollup .rollup-button");var b=this;this._buttonSetWidget.add_buttonProcessingStart(this._delegates.onButtonStart);this._buttonSetWidget.add_buttonProcessingComplete(this._delegates.onButtonFinished);a.each(function(d,e){var c=$(e);b._buttonSetWidget.createButton(c)})},cleanUp:function(a){clearTimeout(this._hideTimerHash);clearTimeout(this._hoverTimerHash);this._hideTimerHash=null;this._hoverTimerHash=null;if(a!=false){this.hideTooltip()}},showTooltip:function(){if(this._inXSMediaQuery()){return}this.bind();this._hoverCtl.bt(this._displayConfig).btOn()},hideTooltip:function(){if(this._hoverCtl!=null){this._hoverCtl.bt(this._displayConfig).btOff()}},register:function(b){this.cleanUp();var c=rb.helper.array.toDictionary(b,"id");for(var d in c){this._registeredControls[d]=c[d]}var a=$(rb.helper.array.toList(b,"ctl"));a.addClass("titletooltip-ctr");for(var d in this._registeredControls){if(this._registeredControls[d].ctl){this._registeredControls[d].ctl.id=d}}a.mouseenter(this._delegates.onHover);a.blur(this._delegates.onHide);a.mouseleave(this._delegates.onMouseLeave);$(window).resize(this._delegates.onHide)},_onLoad:function(f,a){this._super(f,a);this._template=this.getControl("Template");this._tooltip=this.getControl("Tooltip");this._tooltipID=this.getID("Tooltip");this._buttonSetWidget=rb.component.findFirstByType("buttonset");this._productView=rb.component.find(this._productViewInstanceName).getControl("Widget");var e=this;var c;var b;if(this._inSMMediaQuery()){c=240;b=20}else{c=260;b=30}this._displayConfig={closeWhenOthersOpen:true,contentSelector:'$("#'+this._tooltipID+'")',cornerRadius:b,fill:"#eeecec",offsetParent:"body",padding:null,positions:["right","left"],postShow:function(g){$(g).on("mouseleave",e._delegates.onHide).on("mouseenter",e._delegates.clearMouseTimer)},noShadowOpts:{strokeStyle:"#b51211"},trigger:"none",width:c,spikeLength:15,cssClass:"titletooltiprollup-wrapper",strokeWidth:0};var d=rb.persistence.cookie.get("addbookmark");if(rb.app.user.isLoggedIn()&&d!==null&&d!==undefined){this._delegates.onAddRemoveBookmark(d,"");rb.persistence.cookie.remove("addbookmark")}},_getDetail:function(){if(this._currentLookupID==null){return}if(this._registeredControls[this._currentLookupID].data==null){rb.api.product.getDetail(this._currentLookupID,300,this._delegates.onDataReceived,this._baseDelegates.onAjaxFailDelegate)}else{this._data=this._registeredControls[this._currentLookupID].data;var b=$("div[key="+this._data.productRef+"] a");var c=$(b).attr("href");this._data.titleDetailsLink=c;this.showTooltip()}},_onDataReceived:function(e,c){this._data=e.data;this._registeredControls[this._currentLookupID].data=this._data;var b=$("div[key="+this._data.productRef+"] a");var d=$(b).attr("href");this._data.titleDetailsLink=d;this.showTooltip()},_onHover:function(a){if(this._uiBlockingEvent){return}this._hoverCtl=$(a.target);var b=this._hoverCtl.attr("id");this.cleanUp(this._currentLookupID!=b);this._currentLookupID=b;this._clearMouseTimer();this._hoverTimerHash=setTimeout(this._delegates.onHoverDelay,this._hoverDelay)},_onHoverDelay:function(){this._getDetail()},_onHide:function(){clearTimeout(this._hoverTimerHash);this._clearMouseTimer();this._hoverTimerHash=null;this._mouseTimerHash=null;this._hideTimerHash=setTimeout(this._delegates.onHideDelay,this._hideDelay)},_onHideDelay:function(){this.cleanUp()},_onAddRemoveBookmark:function(b,c){this._wishListScope=c;this._currentItemAdded=b;var a=this._delegates;if(rb.app.user.isLoggedIn()){if(this.titleInWishList){this.toggleWishListStar();rb.api.account.removeBookmarks(b,this._delegates.onAddRemoveBookmarkSuccessNonComingSoon)}else{this.toggleWishListStar();rb.api.account.addBookmarks(b,this._delegates.onAddRemoveBookmarkSuccessComingSoon)}}else{if(this.titleInWishList){rb.app.user.showLogin()}else{rb.persistence.cookie.set("addbookmark",b);rb.app.user.showLogin("WishList",false,b)}}},deleteWishListItem:function(a){var b=$(".wishlist-manager-widget");if(b&&b.length>0&&this._wishListItemRemoved){$("div.outer-hide-div[data-key='"+a+"']").detach().remove().first();$("div.box-wrapper[key='"+a+"']").stop(true,true).remove();this._wishListItemRemoved=false;var d=b.find(".browse-product-list").first().find("div.box-wrapper");var c=b.find(".browse-product-list").last().find("div.box-wrapper");if(d!==null&&d!==undefined&&d.length===0){$("h4.rent-today-wishlist").parent().hide()}if(c!==null&&c!==undefined&&c.length===0){$("h4.coming-soon-wishlist").parent().hide()}if(this._buttonSetWidget._clientWishListCount()===0){$(".wishlist-link .link-item .ui-button-icon").css("background-position","0 -40px");$("h4").hide()}}},toggleWishListStar:function(){if(this.titleInWishList){if(this._wishListScope.length>0){$(".wishlist-message",this._wishListScope).html($(".wishlist-message",this._wishListScope).html().replace("Remove From Wishlist","Add To Wishlist"))}}else{if(this._wishListScope.length>0){$(".wishlist-message",this._wishListScope).html($(".wishlist-message",this._wishListScope).html().replace("Add To Wishlist","Remove From Wishlist"))}}},_onAddRemoveBookmarkSuccessNonComingSoon:function(a){this._delegates.onAddRemoveBookmarkSuccess(false,a)},_onAddRemoveBookmarkSuccessComingSoon:function(a){this._delegates.onAddRemoveBookmarkSuccess(true,a)},_onAddRemoveBookmarkSuccess:function(c,d){if(this.titleInWishList){this.titleInWishList=false;this._buttonSetWidget._removeFromClientWishList(this._currentItemAdded);this._wishListItemRemoved=true;var a=this._buttonSetWidget._clientWishListCount();if(a===0){$(".wishlist-link .link-item .ui-button-icon").css("background-position","0 -40px")}this.deleteWishListItem(this._currentItemAdded)}else{this.titleInWishList=true;if(c!==null&&c!==undefined&&!c){var b={products:";"+this._currentItemAdded};rb.rec.Omn.RecordAction("Added to Wishlist",b,["event81"])}this._buttonSetWidget._updateClientWishList(this._currentItemAdded);var a=this._buttonSetWidget._clientWishListCount();if(a>0&&a<2){$(".wishlist-link .link-item .ui-button-icon").css("background-position","0 0")}}if(this._buttonSetWidget){this._buttonSetWidget.raise_bookmarkChangeSubmitted({isBookmarkAdded:this.titleInWishList,productRef:this._currentItemAdded,hasbookmarks:this._buttonSetWidget._clientWishListCount()>0,addResult:d})}this._wishListButtonLocked=false},_onButtonStart:function(){this._uiBlockingEvent=true},_onButtonFinished:function(){this.cleanUp(true);setTimeout(this._delegates.onUIBlockingEventEnd,500)},_onUIBlockingEventEnd:function(){this._uiBlockingEvent=false},_inSMMediaQuery:function(){return this._inMediaQuery("sm-hidden")},_inXSMediaQuery:function(){return this._inMediaQuery("xs-hidden")},_inMediaQuery:function(a){var d=$("<div id='inMediaQuery' style='width = 0px; height = 0px' class='"+a+"' />");$("body").append(d);var c=$("#inMediaQuery");var b=!c.is(":visible");c.detach();return b},_onMouseLeave:function(){if(this._mouseTimerHash==null){this._mouseTimerHash=setTimeout(this._delegates.onHide,this._mouseTimerDelay)}},_clearMouseTimer:function(){if(this._mouseTimerHash!=null){clearTimeout(this._mouseTimerHash);this._mouseTimerHash=null}}});