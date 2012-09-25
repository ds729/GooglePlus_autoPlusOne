$(function(){	
	var result_area = $('<div style="position:fixed; bottom:35px; background:rgba(45, 46, 49, 0.63); text-align:center; color:#fff; z-index:500; width:100%; padding:10px 0;" class="autoClickTemp"></div>');
	$('body').append(result_area).find('.autoClickTemp').hide();

	$(window).keydown(function(e){
	//48COが入っているか確認
	var f_48CO = $('*').hasClass('us48co-button-settings'); 
	//console.log(f_48CO);
		if(e.keyCode===17){  //ctrl
			var len_article = $('div.esw.eswd.Hf.Od').length;
			var len_48CO = 0;
			$('div.esw.eswd.Hf.Od').click();
			if(f_48CO){
				len_48CO =$('.us48co-comment-plusone').find('.eswd').length;
				$('.us48co-comment-plusone').find('.eswd').click();
			}
		console.log(len_article+len_48CO+'件+1しました。');
		result_area.text(len_article+len_48CO+'件+1しました。');
		$('.autoClickTemp').show().delay('2000').fadeOut('slow');
		}
	});
});

