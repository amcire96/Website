function changeToHome(image){
	image.src="home.png";	
}

function changeToLogo(image){
	image.src="logo3.png";	
}


function changeToHoverBackground(tab){
	tab.style.background="url(hover-background.gif)";
}

function changeToRegBackground(tab){
	tab.style.background="#0066CC";
}



window.onload = function(){

	document.getElementById("logo").addEventListener("mouseover",function(){ 	  changeToHome(this)});

	document.getElementById("logo").addEventListener("mouseout",function(){ 	  changeToLogo(this) });




	var tab;
	for(var i=0;i<document.getElementsByName("other-tab").length;i++){
		tab=document.getElementsByName("other-tab")[i];
		tab.addEventListener("mouseover", function(){ 		  changeToHoverBackground(this) });
		tab.addEventListener("mouseout", function(){ 		  changeToRegBackground(this) });
		
	}
}
