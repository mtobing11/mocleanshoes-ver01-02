
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 200)
});
	
var screenWidth = parseInt($('#home-page').css('width'))
var screenHeight = parseInt($('#home-page').css('height'))
//var widthMyslidesH = parseInt($('.mySlides').css('height'))
var widthImgH = parseInt($('.pict1').css('height'))
var widthlayerH = parseInt($('.layer-img').css('height'))
var widthMyslides = parseInt($('.mySlides').css('width'))

console.log("Screen Width: "+ screenWidth);
console.log("Screen height: "+ screenHeight);


//console.log("My slides W: "+widthMyslides);
//console.log("My slides H: "+widthMyslidesH);
//console.log("Image H: "+widthImgH);
//console.log("Layer H: "+widthlayerH);

var slideIndex = 0;
var slideLengthTime = 4000;
showSlides();

function showSlides(){
	var i;
	var slides = document.getElementsByClassName("slide-box");
	//console.log(slides.length);
	
	for (i=0; i < slides.length; i++){
		slides[i].style.display = "none";
	};
	slideIndex++;
	if(slideIndex > slides.length){slideIndex = 1};
	slides[slideIndex-1].style.display = "block";
	
	setTimeout(showSlides, slideLengthTime);
}

var myModals;

window.onclick = function(event){
	if(event.target == myModals){
		myModals.style.display = "none";
	};
};

var popUpWin = function(modal, disp){
	myModals = document.getElementById(modal);
	document.getElementById(modal).style.display = disp;
}
		


