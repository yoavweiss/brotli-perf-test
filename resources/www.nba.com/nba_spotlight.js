/* Deployed On: 2016-01-27 11:30:57 */
if (window.crtg_content) {
	var crtg_split = crtg_content.split(";");
	for (var i=0; i<crtg_split.length; i++) {
		var item = crtg_split[i];
		if (item) {
			var key = item.split("=")[0];
			var value = item.split("=")[1];
			AMPTManager.addPageLevelTarget("'" + key + "', '" + value + "'");
		}
	}
}

AMPTManager.renderSingleSlot("ad_mod_4450a751f", [[88,31]], [["transId", cnnad_transactionID], ["kuid", Krux.user], ["ksg", Krux.segments], ["guid", AMPTManager.readCookie("ug")], ["mod",["spotlight"]], ["pos",["mod"]]], [], "8663477/NBA/module", 0, false, false, 0);