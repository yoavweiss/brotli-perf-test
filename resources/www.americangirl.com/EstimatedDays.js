function getShipModesInPopup(shipModeId){var xhReq=new XMLHttpRequest();var url=document.getElementById("addRefreshUrl").value;var state=document.getElementById("state").value;var zipCode=document.getElementById("zipCode").value;xhReq.open("GET",url+"&state="+state+"&zipCode="+zipCode+"&shipModeId="+shipModeId,false);
xhReq.send(null);var serverResponse=xhReq.responseText;serverResponse=serverResponse.trim();serverResponse=serverResponse.replace("/*","");serverResponse=serverResponse.replace("*/","");var response=JSON.parse(serverResponse);var shippingModes=response.shipModeDescABs;var hasShipModes=response.shipModesAvailable;
var estimatedDays=response.estimatedDays;var stateList=response.stateList;var stateHtml="";if(null!=stateList&&state==""){for(var i=0;i<stateList.length;i++){stateHtml+='<option value="'+stateList[i].stateAbbr+'">'+stateList[i].name+"</option>";}document.getElementById("state").innerHTML=stateHtml;}var html="";
if(estimatedDays==""&&hasShipModes=="false"&&zipCode!=""){document.getElementById("zipcodeerrormsg").innerHTML="Please enter a valid ZipCode";document.getElementById("ShippingMethod").innerHTML=html;}else{if(null!=shippingModes&&typeof shippingModes!="undefined"){document.getElementById("zipcodeerrormsg").innerHTML="";
for(var i=0;i<shippingModes.length;i++){html+='<option value="'+shippingModes[i].shipModeId+'">'+shippingModes[i].description+"</option>";}document.getElementById("ShippingMethod").innerHTML=html;document.getElementById("ShippingMethod").onchange();}}if(estimatedDays!=""){document.getElementById("estimatedDaysText").innerHTML="Estimated Days :"+estimatedDays;
}else{if(hasShipModes==false&&estimatedDays==""){document.getElementById("estimatedDaysText").innerHTML="";}}}