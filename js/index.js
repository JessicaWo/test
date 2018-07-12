$(document).ready(function() {
	//Call plugin
	$('.mySlideshow').edslider({
		width: '100%',
		height: 500
	});
});
$(function() {
	jQuery(".picScroll-left").slide({
		titCell: ".hd ul",
		mainCell: ".bd ul",
		autoPage: true,
		effect: "left",
		autoPlay: false,
		vis: 4,
		trigger: "click"
	});
})
$(function() {
		$("#containor_left ul li a").hover(function(){	
			$(this).css("color","goldenrod");
		})
	$("#price").click(function() {
		if($(this).children('.fa-caret-up').hasClass('fa-caret-up')) {
			$(this).children('.fa-caret-up').removeClass("fa-caret-up").addClass("fa-caret-down");
		} else {
			$(this).children('.fa-caret-up').removeClass("fa-caret-down").addClass('fa-caret-up');
		}
		return false;
	})

	$(".containor_left_classic").each(function() {
		$(this).click(function() {
			if($(this).children().hasClass('fa-angle-down')) {
				$(this).children().removeClass("fa-angle-down").addClass("fa-angle-up");
			} else {
				$(this).children().removeClass("fa-angle-up").addClass('fa-angle-down');
			}

			if($(this).siblings().css("display") == "none") {
				$(this).siblings().slideDown();
			} else {
				$(this).siblings().slideUp();
			}
		})
	})

})



