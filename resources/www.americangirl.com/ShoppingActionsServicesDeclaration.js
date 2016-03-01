dojo.require("wc.service.common");shoppingActionsServicesDeclarationJS={langId:"-1",storeId:"",catalogId:"",setCommonParameters:function(langId,storeId,catalogId){this.langId=langId;this.storeId=storeId;this.catalogId=catalogId;}};wc.service.declare({id:"AddOrderItem",actionId:"AddOrderItem",url:getAbsoluteURL()+"AjaxOrderChangeServiceItemAdd",formId:"",successHandler:function(serviceResponse){resetRequest();
var emailPromoCookie=getCookie("WC_EmailPromoCode_"+shoppingActionsServicesDeclarationJS.storeId);console.info("emailPromoCookie :"+emailPromoCookie);if(emailPromoCookie!=undefined&&emailPromoCookie!=null&&emailPromoCookie!=""){var params=[];params.storeId=shoppingActionsServicesDeclarationJS.storeId;
params.catalogId=shoppingActionsServicesDeclarationJS.catalogId;params.langId=shoppingActionsServicesDeclarationJS.langId;params.orderId=serviceResponse.orderId;wc.service.invoke("applyEmailPromotion",params);}var renderContext=wc.render.getContextById("MattelMSOrderDetailContext");if(renderContext!=undefined&&renderContext!=null){if(CheckoutHelperJS.splitItem){CheckoutHelperJS.splitCartLineItemAddServicesMS(serviceResponse.orderItemId);
}else{wc.render.updateContext("MattelMSOrderDetailContext",{"updateContextFlag":true});}}else{if(CheckoutHelperJS.splitItem){CheckoutHelperJS.splitCartLineItemAddServices(serviceResponse.orderItemId);}}},failureHandler:function(serviceResponse){$("#addTocartLoadIcon").css("display","none");$("#addTocartLoadIconADD").css("display","none");
$("#addTocartLoadIconQV").css("display","none");resetRequest();var storeName=Mattel.storeName;var templateType=Mattel.templateType;console.info("Store Name :"+storeName);if(templateType=="AGTemplate"){if(serviceResponse.errorMessage){if(serviceResponse.errorMessageKey=="_ERR_NO_ELIGIBLE_TRADING"){}else{if(serviceResponse.errorMessageKey=="_ERR_RETRIEVE_PRICE"){var tempString=storeNLS["GENERICERR_MAINTEXT"];
tempString=dojo.string.substitute(tempString,{0:storeNLS["GENERICERR_CONTACT_US"]});}else{if(serviceResponse.errorMessageKey=="_ERR_ADDTOCART_INVALID_THRESHOLD_QUANTITY"){document.location.href="AjaxOrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&thersholdQty="+serviceResponse.errorMessageParam[0]+"&productName="+serviceResponse.errorMessageParam[1]+"&errorMessageKey="+serviceResponse.errorMessageKey;
}else{if(serviceResponse.errorMessageKey=="_ERR_INVALID_THRESHOLD_QUANTITY"){document.location.href="AjaxOrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&thersholdQty="+serviceResponse.errorMessageParam[0]+"&productName="+serviceResponse.errorMessageParam[1]+"&errorMessageKey="+serviceResponse.errorMessageKey;
}else{if(serviceResponse.errorMessageKey=="_ERR_INVALID_QUANTITY"){document.location.href="AjaxOrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&errorMessageKey="+serviceResponse.errorMessageKey+"&cartQtyLimit="+serviceResponse.errorMessageParam[0];
}else{if(serviceResponse.errorMessageKey=="_ERR_TOTAL_CART_LINE_ITEM_LIMIT_EXCEEDS"){document.location.href="AjaxOrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&errorMessageKey="+serviceResponse.errorMessageKey+"&cartQtyLimit="+serviceResponse.errorMessageParam[0];
}else{if(serviceResponse.errorMessageKey=="_ERR_CATALOG_ENTRY_MARK_FOR_DELETE"){document.location.href="AjaxOrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&errorMessageKey="+serviceResponse.errorMessageKey+"&mattelErrorMessage="+serviceResponse.errorMessage;
}else{if(serviceResponse.errorMessageKey=="_ERR_QUANTITY_NOT_AVAILABLE_ATP_KILLSWITCHED"){document.location.href="AjaxOrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&errorMessageKey="+serviceResponse.errorMessageKey+"&Catqty="+serviceResponse.errorMessageParam;
}else{if(serviceResponse.errorMessageKey=="_ERR_REQUESTED_QUANTITY_NOT_AVAILABLE"){document.location.href="AjaxOrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&errorMessageKey="+serviceResponse.errorMessageKey+"&availableQty="+serviceResponse.errorMessageParam[0]+"&catEntryId="+serviceResponse.errorMessageParam[2];
}else{if(serviceResponse.errorMessageKey=="_ERR_ORDER_IS_LOCKED"){document.location.href="AjaxOrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId;}}}}}}}}}}}}else{if(serviceResponse.errorMessage){if(serviceResponse.errorMessageKey=="_ERR_NO_ELIGIBLE_TRADING"){}else{if(serviceResponse.errorMessageKey=="_ERR_RETRIEVE_PRICE"){var tempString=storeNLS["GENERICERR_MAINTEXT"];
tempString=dojo.string.substitute(tempString,{0:storeNLS["GENERICERR_CONTACT_US"]});}else{if(serviceResponse.errorMessageKey=="_ERR_ADDTOCART_INVALID_THRESHOLD_QUANTITY"){document.location.href="OrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&thersholdQty="+serviceResponse.errorMessageParam[0]+"&productName="+serviceResponse.errorMessageParam[1]+"&errorMessageKey="+serviceResponse.errorMessageKey;
}else{if(serviceResponse.errorMessageKey=="_ERR_INVALID_THRESHOLD_QUANTITY"){document.location.href="OrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&thersholdQty="+serviceResponse.errorMessageParam[0]+"&productName="+serviceResponse.errorMessageParam[1]+"&errorMessageKey="+serviceResponse.errorMessageKey;
}else{if(serviceResponse.errorMessageKey=="_ERR_INVALID_QUANTITY"){document.location.href="OrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&errorMessageKey="+serviceResponse.errorMessageKey+"&cartQtyLimit="+serviceResponse.errorMessageParam[0];
}else{if(serviceResponse.errorMessageKey=="_ERR_TOTAL_CART_LINE_ITEM_LIMIT_EXCEEDS"){document.location.href="OrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&errorMessageKey="+serviceResponse.errorMessageKey+"&cartQtyLimit="+serviceResponse.errorMessageParam[0];
}else{if(serviceResponse.errorMessageKey=="_ERR_CATALOG_ENTRY_MARK_FOR_DELETE"){document.location.href="OrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&errorMessageKey="+serviceResponse.errorMessageKey+"&mattelErrorMessage="+serviceResponse.errorMessage;
}else{if(serviceResponse.errorMessageKey=="_ERR_QUANTITY_NOT_AVAILABLE_ATP_KILLSWITCHED"){document.location.href="OrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&errorMessageKey="+serviceResponse.errorMessageKey+"&Catqty="+serviceResponse.errorMessageParam;
}else{if(serviceResponse.errorMessageKey=="_ERR_REQUESTED_QUANTITY_NOT_AVAILABLE"){document.location.href="OrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&errorMessageKey="+serviceResponse.errorMessageKey+"&availableQty="+serviceResponse.errorMessageParam[0]+"&catEntryId="+serviceResponse.errorMessageParam[2];
}else{if(serviceResponse.errorMessageKey=="_ERR_ORDER_IS_LOCKED"){document.location.href="OrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId;}else{if(serviceResponse.errorMessageKey=="_ERR_TOTAL_COLLECTOR_LIMIT_EXCEEDS"){document.location.href="OrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&errorMessageKey="+serviceResponse.errorMessageKey+"&mattelErrorMessage="+serviceResponse.errorMessage;
}else{if(serviceResponse.errorMessageKey=="_ERR_FLASH_SALE_TIME"||serviceResponse.errorMessageKey=="_ERR_FLASH_SALE_USER"){var fromPage=$("#t_fromPage").val();var quickView=$("#quickViewPage").val();if(fromPage=="Product Detail"||quickView=="true"){if(serviceResponse.errorMessageKey=="_ERR_FLASH_SALE_TIME"){$("#FlashSaleErrorMsgDisplay").html($("#flashSaleTimeError").val());
}else{$("#FlashSaleErrorMsgDisplay").html($("#flashSaleUserError").val());}$("#FlashSaleErrorMsgDisplay").show();}else{document.location.href="OrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&errorMessageKey="+serviceResponse.errorMessageKey+"&mattelErrorMessage="+serviceResponse.errorMessage;
}}else{if(serviceResponse.errorMessageKey=="_ERR_ACCOUNT_PURCHASE_LIMIT_FAILURE"){document.location.href="OrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&errorMessageKey="+serviceResponse.errorMessageKey+"&quantityLimit="+serviceResponse.errorMessageParam[0];
}else{if(serviceResponse.errorMessageKey=="_ERR_SUBSCRIPTION_GUEST_USER_FAILURE"){document.location.href="OrderItemDisplayView?storeId="+ServicesDeclarationJS.storeId+"&catalogId="+ServicesDeclarationJS.catalogId+"&langId="+ServicesDeclarationJS.langId+"&errorMessageKey="+serviceResponse.errorMessageKey+"&mattelErrorMessage="+serviceResponse.errorMessage;
}}}}}}}}}}}}}}}}Mattel.Analytics.publishFormErrors();cursor_clear();}}),wc.service.declare({id:"AddPreConfigurationToCart",actionId:"AddOrderItem",url:getAbsoluteURL()+"AjaxOrderChangeServiceAddPreConfigurationToCart",formId:"",successHandler:function(serviceResponse){MessageHelper.hideAndClearMessage();
cursor_clear();if(shoppingActionsJS){var attributes=document.getElementsByName("attrValue");var singleSKU=true;for(var i=0;i<attributes.length;i++){if(attributes[i].options.length>1){singleSKU=false;}}if(!singleSKU){shoppingActionsJS.selectedAttributes=new Object();for(var i=0;i<attributes.length;i++){if(attributes[i]!=null){attributes[i].value="";
attributes[i].onchange();}}}}if(typeof(ShipmodeSelectionExtJS)!=null&&typeof(ShipmodeSelectionExtJS)!="undefined"){ShipmodeSelectionExtJS.setOrderItemId(serviceResponse.orderItemId[0]);}},failureHandler:function(serviceResponse){if(serviceResponse.errorMessage){if(serviceResponse.errorMessageKey=="_ERR_NO_ELIGIBLE_TRADING"){MessageHelper.displayErrorMessage(storeNLS["ERROR_CONTRACT_EXPIRED_GOTO_ORDER"]);
}else{if(serviceResponse.errorMessageKey=="_ERR_RETRIEVE_PRICE"){var tempString=storeNLS["GENERICERR_MAINTEXT"];tempString=dojo.string.substitute(tempString,{0:storeNLS["GENERICERR_CONTACT_US"]});MessageHelper.displayErrorMessage(tempString);}else{MessageHelper.displayErrorMessage(serviceResponse.errorMessage);
}}}else{if(serviceResponse.errorMessageKey){MessageHelper.displayErrorMessage(serviceResponse.errorMessageKey);}}Mattel.Analytics.publishFormErrors();cursor_clear();}}),wc.service.declare({id:"applyEmailPromotion",actionId:"applyEmailPromotion",url:getAbsoluteURL()+"MattelEmailPromotionApplyCmd",formId:"",successHandler:function(serviceResponse){if(serviceResponse.isPromotionApplied=="success"){console.info("Email Promotion applied successfully.");
if($("#pageName").val()=="SHIPPING_CHECKOUT"||$("#pageName").val()=="SHOPPING_CART"){var params=[];params.storeId=serviceResponse.storeId;params.catalogId=serviceResponse.catalogId;params.langId=serviceResponse.langId;params.orderId=".";if($("#pageName").val()=="SHOPPING_CART"){params.calculationUsage="-1,-2,-5,-6,-7";
}else{params.calculationUsage="-1,-2,-3,-4,-5,-6,-7";}wc.service.invoke("AjaxUpdateOrderItem",params);}var emailPromoCookie=getCookie("WC_EmailPromoCode_"+shoppingActionsServicesDeclarationJS.storeId);if(emailPromoCookie!=null){dojo.cookie("WC_EmailPromoCode_"+shoppingActionsServicesDeclarationJS.storeId,null,{expires:-1,path:"/"});
}console.info("Email cookie cleared after promotion applied.");}else{if(serviceResponse.isPromotionApplied=="failed"){console.info("Email Promotion applied Failed.");}}},failureHandler:function(serviceResponse){if(serviceResponse.errorMessage){}else{if(serviceResponse.errorMessageKey){}}}});