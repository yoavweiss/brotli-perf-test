function setChipHeights(a){$(".row").each(function(){var a=0;$(this).find(".chip-container").each(function(){a=Math.max(a,$(this).height())}),$(this).find(".chip").each(function(){$(this).height(a)})})}$(window).load(function(){setChipHeights()});