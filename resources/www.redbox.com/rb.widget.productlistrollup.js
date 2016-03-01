rb.registerNamespace("rb.widget");rb.widget.productlistrollup=rb.widget.base.extend({get_data:function(){return this._data},set_data:function(a){this._data=a},get_seoFilters:function(){return this._seoFilters},set_seoFilters:function(a){this._seoFilters=a},get_maxItems:function(){return this._maxItems},set_maxItems:function(a){this._maxItems=a},get_productType:function(){return this._productType},set_productType:function(a){this._productType=a},get_selectedGenre:function(){return this._selectedGenre},set_selectedGenre:function(a){this._selectedGenre=a},get_selectedFormat:function(){return this._selectedFormat},set_selectedFormat:function(a){this._selectedFormat=a},get_useStoreContext:function(){return this._useStoreContext},set_useStoreContext:function(a){this._useStoreContext=a},get_omnGenres:function(){return this._omnGenres},set_omnGenres:function(a){this._omnGenres=a},get_recordOmn:function(){return this._recordOmn},set_recordOmn:function(a){this._recordOmn=a},get_omnPageName:function(){return this._omnPageName},set_omnPageName:function(a){this._omnPageName=a},get_filteredByAvailability:function(){return this._filteredByAvailability},set_filteredByAvailability:function(a){this._filteredByAvailability=a},get_isCustomList:function(){return this._isCustomList},set_isCustomList:function(a){this._isCustomList=a},get_customProducts:function(){return this._customProducts},set_customProducts:function(a){this._customProducts=a},get_firstWidgetInstance:function(){return this._firstWidgetInstance},set_firstWidgetInstance:function(a){this._firstWidgetInstance=a},init:function(){this._super();this._buttonSetWidget=null;this._data={};this._productType=null;this._selectedGenre=null;this._selectedFormat=null;this._maxItems=10;this._pageNum=1;this._recordPageNum=1;this._filters={};this._seoFilters={};this._sort=null;this._availability=null;this._boxWrappers=[];this._stateProps=["genre","format","rating","sort","availability"];this._useStoreContext=false;this._sessionScope=null;this._recordSort=false;this._omnGenres=[];this._recordOmn=true;this._omnPageName=null;this._filteredByAvailability=null;this._isCustomList=false;this._customProducts=null;this._optionalFormats=null;this._firstWidgetInstance=null;this._dirtyM17="m+(17+)";this._cleanM17="m (17+)";this._dirtyE10="e+10+";this._cleanE10="e 10+";this._itemList=null;this._template=null;this._productViewRollup=null;this._titleTip=null;this._shoppingSessionWidget=null;this._widget=null;this._subscriptions=[this.events.storeChange,this.events.cartChange];this._delegates={onInventoryReceived:rb.createDelegate(this,this._onInventoryReceived),onProductsReceived:rb.createDelegate(this,this._onProductsReceived),onFilter:rb.createDelegate(this,this._onFilter),onClearFilter:rb.createDelegate(this,this._onClearFilter),onSort:rb.createDelegate(this,this._onSort),onHistoryStateChange:rb.createDelegate(this,this._onHistoryStateChange)}},refresh:function(a){this.lock();this.hideNotification();rb.api.product.getProducts(this._getProductFilters(),this._pageNum,10000,this._delegates.onProductsReceived,a);this._refreshFilterWidgets()},bind:function(a){this._productViewRollup.bind(a);this._refreshProductFilterState()},filter:function(a,b){if(b==="none"){b=null}this._filters[a]=b;this.refresh();rb.history.recordState(a,b,true,this._sessionScope)},clearFilter:function(a){if(a&&a.data&&a.data.canKeepFormat===false){delete this._filters.format}if(a&&a.data&&a.data.canKeepGenre===false){delete this._filters.genre}delete this._filters.rating;var b=["format","rating","genre"];rb.history.clearState(b,this._sessionScope);this.refresh()},sort:function(b,a){this._sort=b=="date"?null:b;this._availability=a;this._recordSort=true;this.refresh();rb.history.recordState("sort",this._sort,true,this._sessionScope);rb.history.recordState("availability",this._availability,true,this._sessionScope)},_getSessionScope:function(){var a="productType_"+this._productType;if(this._productType===this.productType.movie&&this._selectedGenre!=="none"){a="productType_"+this._productType+this._selectedGenre}else{if(this._productType===this.productType.game&&this._selectedFormat!=="none"){a="productType_"+this._productType+this._selectedFormat}}return a},_onLoad:function(e,a){this._super(e,a);this._itemList=this.getControl("ItemList");this._productViewRollup=this.getWidget("ProductViewRollup");this._template=this.getControl("Template");this._titleTip=this.getWidget("TitleTip");this._widget=this.getControl("Widget");this._buttonSetWidget=rb.component.findFirstByType("buttonset");rb.app.store.requireInventoryOnStoreChange();this._initOptionalFormats();var b=rb.component._getFilterWidgets();if(b.length>0){this._sessionScope=this._getSessionScope();var d=this._loadChangedState();for(var c=0;c<b.length;c++){b[c].addOnFilter(this._delegates.onFilter);b[c].addOnClearFilter(this._delegates.onClearFilter);b[c].addOnSort(this._delegates.onSort);if(location.hash&&location.hash.length>0){this._filters=this._getFiltersFromHash();if(this._productType===this.productType.movie&&this._selectedGenre!="none"){this._filters.genre=this._selectedGenre}if(this._productType===this.productType.game&&this._selectedFormat!="none"){this._filters.format=this._selectedFormat}this._sort=this._filters.sort;this._availability=this._filters.availability;if(this._availability==null){this._availability=true}if(b[c]._type=="productfilter"&&this._firstWidgetInstance==true){this.refresh()}}else{if(b[c].get_hasCookie()){if(this._productType===this.productType.movie&&this._selectedGenre!="none"){this._filters.genre=this._selectedGenre}if(this._productType===this.productType.game&&this._selectedFormat!="none"){this._filters.format=this._selectedFormat}}else{delete this._filters.format;delete this._filters.rating;delete this._filters.genre;var f=["format","rating","genre"];rb.history.clearState(f,this._sessionScope);if(b[c].get_selectedGenre()&&b[c].get_selectedGenre()!="none"){this._filters.genre=b[c].get_selectedGenre().toLowerCase()}if(b[c].get_selectedFormat()&&b[c].get_selectedFormat()!="none"){this._filters.format=b[c].get_selectedFormat().toLowerCase()}if(b[c].get_selectedRating()&&b[c].get_selectedRating()!="none"){this._filters.rating=b[c].get_selectedRating().toLowerCase()}this._sort=b[c].get_selectedSort();this._availability=b[c].get_selectedAvailability()}}}this._recordPage();this._refreshProductFilterState();rb.history.addStateChange(this._delegates.onHistoryStateChange)}if(this._seoFilters&&this._seoFilters.genre){rb.history.recordState("genre",this._seoFilters.genre,true,this._sessionScope)}},_getFiltersFromHash:function(){var c={};var b=document.location.hash;if(b&&b.length>0){b=b.replace("#","");var a=b.split("&");for(var d=0;d<a.length;d++){if(a[d]==""){continue}var f=a[d].split("=");if(f.length==2){var e=f[0].toLowerCase();var g=f[1];c[e]=this._getCleanRating(g)}}}return c},_getCleanRating:function(a){a=this._decode(a);if(a==this._dirtyM17){a=this._cleanM17}else{if(a==this._dirtyE10){a=this._cleanE10}}return a},_decode:function(b){var a="";if(b){b=b.replace(/%252B/g,"PLUSSIGN");b=unescape(b.replace(/%2B/g,"PLUSSIGN"));a=b.replace(/PLUSSIGN/g,"%2B")}return a},_onFilter:function(b,a){this._recordPageNum=1;this.filter(a.filter.name,a.filter.val)},_onClearFilter:function(b,a){this._recordPageNum=1;this.clearFilter(a)},_onSort:function(b,a){this.sort(a.sort,a.avail)},_onProductsReceived:function(b,a){this._data=b.data;if(rb.app.store.isStoreSelected()||rb.app.store.isRadiusSelected()){if(a){rb.app.store.getInventory(this._delegates.onInventoryReceived)}else{this._onInventoryReceived(this._buttonSetWidget.get_inventory())}}else{this._displayData(this._data)}this._recordPage()},_onInventoryReceived:function(b){if(b==null){b=[]}this._buttonSetWidget.set_inventory(b);var a=this._isCustomList?rb.helper.array.outerJoin(this._data,b,"ID","id"):rb.helper.array.innerJoin(this._data,b,"ID","id");this._displayData(a)},_displayData:function(a){if(this._shoppingSessionWidget!=null){a=rb.helper.array.outerJoin(a,this._shoppingSessionWidget.get_data().session.items,"id","productRef")}if(this._sort!=null){a=rb.helper.array.orderby(a,[{name:this._sort,dir:1}])}if((rb.app.store.isStoreSelected()||rb.app.store.isRadiusSelected())&&!this._isCustomList){if(this._availability==null||this._availability=="true"||this._availability==true){a=rb.helper.array.groupby(a,{name:"stock",values:[true,false]})}}else{if(this._filters.productType===this.productType.game&&this._filters.format===undefined){}}if(this._maxItems!=0){a=rb.helper.array.skiptake(a,0,this._maxItems)}if(this._isCustomList){a=this._sortCustomProductsData(a)}this.bind(a);this.unlock()},_removeOptionalFormats:function(a){return rb.helper.array.filter(a,rb.createDelegate(this,function(c){var b=c.fmt;return b!=this._optionalFormats.xboxone.id&&b!=this._optionalFormats.ps4.id}))},_initOptionalFormats:function(){var a=rb.api.product._filterMappings.format;this._optionalFormats={xboxone:{id:a.valueMap.xboxone,disabled:true},ps4:{id:a.valueMap.ps4,disabled:true}}},_updateOptionalFormats:function(){this._optionalFormats.xboxone.disabled=true;this._optionalFormats.ps4.disabled=true;if(rb.app.store.isStoreSelected()&&this._buttonSetWidget._inventory){var d=rb.api.product.getProducts().data;var c=rb.helper.array.innerJoin(d,this._buttonSetWidget._inventory,"ID","id");for(var b=0;b<c.length;b++){var a=c[b]["fmt"];if(a==this._optionalFormats.xboxone.id){this._optionalFormats.xboxone.disabled=false}else{if(a==this._optionalFormats.ps4.id){this._optionalFormats.ps4.disabled=false}}}}},_sortCustomProductsData:function(a){for(var b=0;b<a.length;b++){a[b].WidgetSortOrder=$.inArray(a[b].ID,this._customProducts)}return rb.helper.array.orderby(a,[{name:"WidgetSortOrder",dir:1}])},_onCartChange:function(c,a){if(a.type=="remove"){var b=this.getControl("Widget").find('div[key="'+a.data.productRef+'"]').find(".rb-ribbon-blue").removeClass("rb-ribbon-blue").addClass("rb-ribbon-red")}this.unlock()},_onHistoryStateChange:function(b,a){if(this._loadChangedState()){this.refresh()}},_onStoreChange:function(b,a){if(a.state=="pending"){this.lock()}else{if(a.state=="completed"){this.refresh(true)}else{if(a.state=="cancelled"){this.unlock()}}}},_getProductFilters:function(){this._filters.productType=this._productType;if(this._useStoreContext==false||(!rb.app.store.isStoreSelected()&&!rb.app.store.isRadiusSelected())){this._filters.def="1"}else{this._filters.def=null}var a=[];if(this._isCustomList&&this._customProducts){a.push({name:"ID",val:this._customProducts,matchType:"any"})}else{for(var b in this._filters){var c=this._filters[b];if(c!=null){a.push({name:b,val:this._filters[b],matchType:"exact"})}}a.push({name:"soon",val:"0",matchType:"exact"});a.push({name:"extendedSoon",val:"0",matchType:"exact"})}return a},_loadChangedState:function(){var a=rb.history.loadChangedState(this._getCurrentState(),this._stateProps,true,this._sessionScope);if(a!=null||(this._seoFilters&&this._seoFilters.length>0)){this._setState(a);return true}return false},_getCurrentState:function(){var b=$.extend({},this._filters);if(this._sort!=null){b.sort=this._sort}if(this._availability!=null){b.availability=this._availability}var a=rb.persistence.clientSession.get(null,this._sessionScope);if(a){if(a.genre){b.genre=a.genre}if(a.rating){b.rating=a.rating}if(a.format){b.format=a.format}if(a.sort&&this._sort==null){b.sort=a.sort}}return b},_setState:function(b){if(b){for(var a in b){if(a=="sort"){this._sort=b[a]}else{if(a=="availability"){this._availability=b[a]}else{this._filters[a]=b[a]}}}}if(this._seoFilters){for(var a in this._seoFilters){if(a=="sort"){this._sort=this._seoFilters[a]}else{if(a=="availability"){this._availability=this._seoFilters[a]}else{this._filters[a]=this._seoFilters[a]}}}}},_getAvail:function(a,b){return true},_refreshFilterWidgets:function(){var a=rb.component._getFilterWidgets();for(var b=0;b<a.length;b++){a[b].selectFormat(this,this._filters.format!=null?this._filters.format:"none");a[b].selectRating(this,this._filters.rating!=null?this._filters.rating:"none");a[b].selectSort(this,this._sort!=null?this._sort:"date");a[b].selectAvailability(this,this._getAvail(this._availability,true));a[b].selectGenre(this,this._filters.genre!=null?this._filters.genre:"none")}},_refreshFilterState:function(){var a=rb.component._getFilterWidgets();for(var b=0;b<a.length;b++){a[b].updateFormatState(this,this._filters.format!=null?this._filters.format:"none",this._optionalFormats);a[b].updateRatingState(this,this._filters.rating!=null?this._filters.rating:"none");a[b].updateGenreState(this,this._filters.genre!=null?this._filters.genre:"none");this._availability=this._getAvail(this._availability,this._filteredByAvailability===null?true:this._filteredByAvailability);a[b].updateAvailabilityState(this,this._availability)}},_refreshProductFilterState:function(){this.lock();this.hideNotification();this._refreshFilterState()},_recordPage:function(){if(this._recordOmn==false||(typeof(lockRecord)!="undefined"&&lockRecord)){return}if(this._firstWidgetInstance==false){return}var b={};if(this._recordSort){b.prop8=this._sort==null?"Release Date":"Name";this._recordSort=false}var d=this._recordPageNum+this._omnPageName;var c="Find A ";var a="All ";if(this._productType==1){c+="Movie";a+="Movies";if(this._filters&&this._filters.genre){a=this._filters.genre}if(this._omnGenres[a]!=null){a=this._omnGenres[a]}}else{c+="Game";a+="Games";if(this._productType!=1&&this._filters&&this._filters.format){a=this._filters.format}}b.eVar3="Browse";b.eVar4=a;rb.rec.Omn.RecordPage(c,a,d,b)}});