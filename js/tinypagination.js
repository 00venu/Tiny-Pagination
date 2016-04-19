// JavaScript Document
//tinyPagination is created by Venu Madhav U
//It is open source plugin. you can use, edit and modify

(function($){
	$.fn.tinyPagination = function(options){
		var defaults = {
			itemsPerPage: 5,
			itemClassName:"",
			pagingContainer:".paging",
			};
		var settings = {};
		$.extend(settings, defaults, options);
		$(settings.itemClassName).css("display","none");
		var showItems = function (val1) {
		$(settings.itemClassName).css("display","none");	
			for(var j=0; j<settings.itemsPerPage; j++){
				var c = val1++;
				$(settings.itemClassName).eq(c).css("display","block");
			};
		};
		var a=0;
		showItems(a);
		var len = $(settings.itemClassName).length/settings.itemsPerPage;
		for(var i=0; i<len; i++){
			var anc = $("<a/>",{
				href:"#",
				text:i+1,
					});
				$(settings.pagingContainer).append(anc);
		};
		$(settings.pagingContainer).find("a").on("click", function(){
			$(settings.pagingContainer).find("a").css("background-color","#fff");		
			$(this).css("background-color","#f1f1f1");		
			var num1 = $(this).text();
			a = (num1-1)*settings.itemsPerPage;
			showItems(a);
		
		});
	}
}( jQuery ));