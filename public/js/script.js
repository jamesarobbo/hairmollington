$(document).ready(function(){
	$(".menu").on("click", function(){

		$(".services-content").css("margin-top", "240px");
		$("nav.mobile").toggle();

		if ($("nav.mobile").is(":visible")) {
			$(".services-content").css("margin-top", "260px")
			$(".work-content").css("margin-top", "260px")
		}
		else {
			$(".services-content").css("margin-top", "0px")
			$(".work-content").css("margin-top", "180px")

		}

	});
});