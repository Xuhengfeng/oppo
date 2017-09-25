$(function(){
	$('#dian').click(function(){
		$('#dian_1').toggle();
		$('#tupian_1').hide();
	})
	$('#tupian').click(function(){
		$('#tupian_1').toggle();
		$('#dian_1').hide();
	})

	$('#footer_3 .one').mouseover(function(){
		$(this).attr('src','img/36.png');
	}).mouseout(function(){
		$(this).attr('src','img/38.png');
	})
	$('#footer_3 .two').mouseover(function(){
		$(this).attr('src','img/37.png');
	}).mouseout(function(){
		$(this).attr('src','img/39.png');
	})
	$('#footer_3 .three').mouseover(function(){
		$(this).attr('src','img/35.png');
	}).mouseout(function(){
		$(this).attr('src','img/40.png');
	})
})