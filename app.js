$(document).ready(function(){
	$(".contain1").show();
	$(".contain2").hide();
	$(".contain3").hide();
	$(".MODUL").removeClass("open", 1000, "easeOutSine");
});



$(document).ready(function(){
$(".acueil").click(function(){
	$(".contain1").show();
	$(".contain2").hide();
	$(".contain3").hide();
	$(".MODUL").removeClass("open", 1000, "easeOutSine");

});

});

$(document).ready(function(){
$(".nous").click(function(){
	$(".contain1").hide();
	$(".contain2").show();
	$(".contain3").hide();
	$(".MODUL").toggleClass("open", 1000, "easeOutSine");

});

});
