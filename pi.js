function main(){
	let slider = document.getElementById("slider-range");
	let output = document.getElementById("slideout");
	let image = document.getElementById("pi-image"); //pi. Isn't it so pretty?
		output.textContent = "Value: " + slider.value;

	let pi_height = 200;
	let pi_width = 200;
	
	let counter = 0;

	image.style.height=pi_height;
	image.style.width=pi_height;	
	slider.oninput = function() {
		counter++;
		let modifier = slider.value / 10;
		if (slider.value >= 70) {output.innerHTML = "Value:OUR PI!!! IT'S BROKEN!!"}
		else if (slider.value <= 3.14) {output.innerHTML = "Value: smaller than pi"}
		else {output.innerHTML = "Value: " + this.value;}
		image.style.height = pi_height * modifier;
		image.style.width = pi_width * modifier;
		if (counter == 40) {
			//should wipe the page clean
			document.body.innerHTML = ""
			
			let warn_header = document.createElement("h1");
			let warn_text = document.createElement("p");
			
			warn_header.textContent = "Page locked due to potential vandalism";
			warn_text.textContent = "You have broken rule #34. Because of your actions, I will not let you see the almighty pi anymore."

			document.title = "[VANDALISM DETECTED]"
			document.body.appendChild(warn_header)
			document.body.appendChild(warn_text)
		}

	}
}
