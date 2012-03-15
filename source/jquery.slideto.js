//		Author Christophe Verbinnen djpate@gmail.com
//		Documentation http://djpate.com/2011/01/01/animated-scrollto-effect-jquery-plugin/
//      This program is free software; you can redistribute it and/or modify
//      it under the terms of the GNU General Public License as published by
//      the Free Software Foundation; either version 2 of the License, or
//      (at your option) any later version.
//      
//      This program is distributed in the hope that it will be useful,
//      but WITHOUT ANY WARRANTY; without even the implied warranty of
//      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//      GNU General Public License for more details.
//      
//      You should have received a copy of the GNU General Public License
//      along with this program; if not, write to the Free Software
//      Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
//      MA 02110-1301, USA.

(function($){
	
	$.fn.slideto = function(options) {

		var defaults = {  
			slide_duration: "slow",
			highlight_duration: 3000,
			highlight: true,
			highlight_color: "#FFFF99",
			offset: 0
		};
		
		var options = $.extend(defaults, options);  

		return this.each(function() {
			
			var callback = false;
			
			obj = $(this);
			
			$('html,body').animate({scrollTop: obj.offset().top + options.offset},options.slide_duration,function(){
				if(callback == false){
					if(options.highlight  && $.ui.version){
						obj.effect("highlight", {'color': options.highlight_color}, options.highlight_duration);
					}
					callback = true;
				}
			});
			
		});
		
	};
})(jQuery);
