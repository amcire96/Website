

function submitForm() {
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var comments=document.getElementById("comments").value;

	var shouldAlert=false;

	var greeting="Thanks!\n\n";

	if(name==""){
		name= "Please Fill In Your Name";
		greeting="Invalid Form!\n\n";
		shouldAlert=true;
	}
	if(email==""){
		email= "Please Fill In Your Email";
		greeting="Invalid Form!\n\n";
		shouldAlert=true;
	}
	if(comments==""){
		comments= "Please Leave Your Comments Here";
		greeting="Invalid Form!\n\n";	
		shouldAlert=true;
	}

	if(shouldAlert){
		alert(greeting+ "Name: " + name + "\nEmail: " + email
			+ "\nComments: " + comments);
	}
	else{
		window.open("submit-form.html");
	}
	
}

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
	document.getElementById("submit").addEventListener("click",submitForm);

	document.getElementById("logo").addEventListener("mouseover",function(){ 	  changeToHome(this)});

	document.getElementById("logo").addEventListener("mouseout",function(){ 	  changeToLogo(this) });


	var tab;
	for(var i=0;i<document.getElementsByName("other-tab").length;i++){
		tab=document.getElementsByName("other-tab")[i];
		tab.addEventListener("mouseover", function(){ 		  changeToHoverBackground(this) });
		tab.addEventListener("mouseout", function(){ 		  changeToRegBackground(this) });
		
	}
}

