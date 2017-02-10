	
var customJS;

jQuery(document).ready(function($){

	customJS = {
		
		common : {
			commonJS : function(){
				
				$(document).on('click','.btnMobNav, .btnNavClose', function(){
			
					$('.container').toggleClass("selectedMobNav");
					
				});
				
			},
			
			html5Tags : function(){
				document.createElement('header');  
				document.createElement('section');  
				document.createElement('nav');  
				document.createElement('footer');  
				document.createElement('menu');  
				document.createElement('hgroup');  
				document.createElement('article');  
				document.createElement('aside');  
				document.createElement('details'); 
				document.createElement('figure');
				document.createElement('time');
				document.createElement('mark');
			},
						
			commonInput : function(){
				
				var $inputText = $('.queryInput input, .queryInput textarea');
				$inputText.each(function(){
					var $thisHH = $(this);
					if(!$(this).val()){
						$(this).parent().find('label').show();
					}else{
						setTimeout(function(){
						$thisHH.parent().find('label').hide();
						},100);
					}
					
				});
				$inputText.focus(function(){
					if(!$(this).val()){
						$(this).parent().find('label').addClass('showLab');
					}
				});
				$inputText.keydown(function(){
					if(!$(this).val()){
						$(this).parent().find('label').hide();
					}
				});
				$inputText.on("blur",function(){
					var $thisH = $(this);
					if(!$(this).val()){
						$(this).parent().find('label').show().removeClass('showLab');
					}else{
						$thisH.parent().find('label').hide();
					}
					
				});
				
			}
			
		}//end commonJS
			
	};
	
	
	customJS.common.commonJS();
	customJS.common.html5Tags();
	customJS.common.commonInput();

});
