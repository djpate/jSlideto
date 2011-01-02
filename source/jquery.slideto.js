(function($){
	$.fn.slideto = function(options) {

		var defaults = {  
			slide_duration: "slow",
			highlight_duration: 3000,
			highlight: true,
			highlight_color: "#FFFF99"
		};
		
		var options = $.extend(defaults, options);  

		return this.each(function() {
			
			obj = $(this);
			
			$('body').animate({scrollTop: obj.offset().top},options.duration,function(){
				if(options.highlight  && $.ui.version){
					obj.effect("highlight", {'color': options.highlight_color}, options.highlight_duration);
				}
			});
			
		});
		
	};
})(jQuery);
