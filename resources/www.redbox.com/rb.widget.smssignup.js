rb.registerNamespace("rb.widget");rb.widget.smssignup=rb.widget.base.extend({init:function(){this._super();this._notification=null;this._mobilePhoneNumber=null;this._signupButton=null;this._toggle=null;this._mainBody=null;this._delegates={onSignupClicked:rb.createDelegate(this,this._onSignupClicked),onSignupResponse:rb.createDelegate(this,this._onSignupResponse),onToggleClick:rb.createDelegate(this,this._onToggleClick)}},_onLoad:function(b,a){this._form=this.getControl("Form");this._mobilePhoneNumber=this.getControl("Number");this._signupButton=this.getControl("SignUp");this._mobilePhoneNumber.attr("title",this.getText("Watermark")).simpleWaterMark("watermark");this._toggle=$(".sms-widget .heading-container");this._mainBody=$(".sms-widget .body-block");this._signupButton.click(this._delegates.onSignupClicked);this._toggle.on("click",this._delegates.onToggleClick);this._validator=rb.validation.registerControls(this._form,[{ctl:this._mobilePhoneNumber,required:true,type:"phoneUS"}],this.getControl("Error"),[{ctl:this._mobilePhoneNumber,message:this.getText("InvalidNumber","Please enter a valid phone number.")}])},_onKeyEnter:function(a){this._signupButton.click();return false},_onSignupClicked:function(b,a){this._signUp()},_onSignupResponse:function(a){this.unlock();if(a.data.success){this.showNotification(this.getText("SubscribeSuccessful","Your number has been successfully added to our sms list."),2000)}else{this.showError(this.getText("PleaseTryAgain","Something went wrong, please try again later"))}},_signUp:function(){if(!this.locked&&this._form.valid()){this.lock();rb.api.account.signupSMS(this._mobilePhoneNumber.val(),this._delegates.onSignupResponse,this._baseDelegates.onAjaxFailDelegate)}},_onToggleClick:function(){if(this._toggle.hasClass("block-expanded")){this._toggle.removeClass("block-expanded").addClass("block-collapsed");this._mainBody.removeClass("body-show").addClass("body-hide")}else{this._toggle.removeClass("block-collapsed").addClass("block-expanded");this._mainBody.removeClass("body-hide").addClass("body-show")}}});