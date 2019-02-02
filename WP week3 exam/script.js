var input = {
	"products": [{
			"title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
			"description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
			"image": "1.jpeg",
			"quantity":"10"
		},
		{
			"title": "Mi A2 4GB + 64GB | 6GB + 128GB",
			"description": "15.2cm (5.99) large display",
			"image": "2.jpeg",
			"quantity":"20"
		},
		{
			"title": "Apple iphone 32GB",
			"description": "11.4 cm(4.7)display",
			"image": "3.jpeg",
			"quantity":"30"
		},
		{
			"title": "red mi note 6 pro",
			"description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ",
			"image": "4.jpeg",
			"quantity":"40"
		}
	]
};
localStorage.setItem('myStorage', JSON.stringify(input));
var output = JSON.parse(localStorage.getItem('myStorage'));
console.log(output);
function editsam() {
document.getElementById("samname").style.display = "block";
document.getElementById("samdesc").style.display = "block";
document.getElementById("samquan").style.display = "block";
document. getElementById("edit1").disabled = true;
document. getElementById("delete1").style.display = "none";
document.getElementById("save1").style.display = "block";

}
function deletesam() {
	// body...
	// document.getElementById('1').innerHTML = '';
	// document.getElementById('img1').src = '';
	document.getElementById("samsung").innerHTML = '';
	input.products[0].title = "";
	input.products[0].description = "";
	input.products[0].image = "";
	input.products[0].quantity = "";
	delete input[0];
}

function savSam() {
	var name1 = document.getElementById("samname").value;
	var desc1 = document.getElementById("samdesc").value;
	var quan1 = document.getElementById("samquan").value;
	if (name1 != "" && desc1 !="") {
			input.products[0].title = name1;
			input.products[0].description = desc1;
		if (quan1 != "") {

			input.products[0].quantity = quan1;
document.getElementById('1').innerHTML = input.products[0].title + "<br><br>" + input.products[0].description + "<br><br>"+ input.products[0].quantity + "<br><br>";
		} else {
document.getElementById('1').innerHTML = input.products[0].title + "<br><br>" + input.products[0].description + "<br><br>"+ input.products[0].quantity + "<br><br>";

		} 
		} else if (name1 != "" && desc1 == "") {
			input.products[0].title = name1;
			if (quan1 != "") {
				
				input.products[0].quantity = quan1;
document.getElementById('1').innerHTML = input.products[0].title + "<br><br>" + input.products[0].description + "<br><br>"+ input.products[0].quantity + "<br><br>";
			} else {
				
document.getElementById('1').innerHTML = input.products[0].title + "<br><br>" + input.products[0].description + "<br><br>"+ input.products[0].quantity + "<br><br>";
			}
		} else if (name1 == "" && desc1 != "") {
			input.products[0].description = desc1;
			if (quan1 != "") {
				
				input.products[0].quantity = quan1;
document.getElementById('1').innerHTML = input.products[0].title + "<br><br>" + input.products[0].description + "<br><br>"+ input.products[0].quantity + "<br><br>";
			} else {
				
document.getElementById('1').innerHTML = input.products[0].title + "<br><br>" + input.products[0].description + "<br><br>"+ input.products[0].quantity + "<br><br>";
			}
		} else if (name1 == "" && desc1 == "") {
			if(quan1 != "") {
				input.products[0].quantity = quan1;
document.getElementById('1').innerHTML = input.products[0].title + "<br><br>" + input.products[0].description + "<br><br>"+ input.products[0].quantity + "<br><br>";

			} else {
document.getElementById('1').innerHTML = input.products[0].title + "<br><br>" + input.products[0].description + "<br><br>"+ input.products[0].quantity + "<br><br>";
			}
		}
	document.getElementById("samname").style.display = "none";
	document.getElementById("samdesc").style.display = "none";
	document.getElementById("samquan").style.display = "none";
	document. getElementById("delete1").style.display = "block";
	document. getElementById("edit1").disabled = false;
	document.getElementById("save1").style.display = "none";

}
function editmi() {
document.getElementById("miname").style.display = "block";
document.getElementById("midesc").style.display = "block";
document.getElementById("miquan").style.display = "block";
document. getElementById("edit2").disabled = true;
document. getElementById("delete2").style.display = "none";
document.getElementById("save2").style.display = "block";


}
function deletemi() {
	// document.getElementById('2').innerHTML = '';
	// document.getElementById('img2').src = '';
	document.getElementById("mi").innerHTML = '';
	input.products[1].title = "";
	input.products[1].description = "";
	input.products[1].image = "";
	input.products[1].quantity = "";
	delete input[1];
}
function savMi() {
	var name2 = document.getElementById("miname").value;
	var desc2 = document.getElementById("midesc").value;
	var quan2 = document.getElementById("miquan").value;
	if (name2 != "" && desc2 !="") {
		input.products[1].title = name2;
		input.products[1].description = desc2;
		if (quan2 != "") {
			input.products[1].quantity = quan2;
document.getElementById('2').innerHTML = input.products[1].title + "<br><br>" + input.products[1].description + "<br><br>"+ input.products[1].quantity + "<br><br>";
		} else {
document.getElementById('2').innerHTML = input.products[1].title + "<br><br>" + input.products[1].description + "<br><br>"+ input.products[1].quantity + "<br><br>";

		} 
		} else if (name2 != "" && desc2 == "") {
			input.products[1].title = name2;
			if (quan2 != "") {
				input.products[1].quantity = quan2;
document.getElementById('2').innerHTML = input.products[1].title + "<br><br>" + input.products[1].description + "<br><br>"+ input.products[1].quantity + "<br><br>";
			} else {
document.getElementById('2').innerHTML = input.products[1].title + "<br><br>" + input.products[1].description + "<br><br>"+ input.products[1].quantity + "<br><br>";
			}
		} else if (name2 == "" && desc2 != "") {
			input.products[1].description = desc2;
			if (quan2 != "") {
				input.products[1].quantity = quan2;
document.getElementById('2').innerHTML = input.products[1].title + "<br><br>" + input.products[1].description + "<br><br>"+ input.products[1].quantity + "<br><br>";
			} else {
document.getElementById('2').innerHTML = input.products[1].title + "<br><br>" + input.products[1].description + "<br><br>"+ input.products[1].quantity + "<br><br>";
			}
		} else if (name2 == "" && desc2 == "") {
			if(quan2 != "") {
				input.products[1].quantity = quan2;
document.getElementById('2').innerHTML = input.products[1].title + "<br><br>" + input.products[1].description + "<br><br>"+ input.products[1].quantity + "<br><br>";

			} else {
document.getElementById('2').innerHTML = input.products[1].title + "<br><br>" + input.products[1].description + "<br><br>"+ input.products[1].quantity + "<br><br>";
			}
		}
document.getElementById("miname").style.display = "none";
document.getElementById("midesc").style.display = "none";
document.getElementById("miquan").style.display = "none";
document. getElementById("edit2").disabled = false;
document. getElementById("delete2").style.display = "block";
document.getElementById("save2").style.display = "none";
	
}
function editapp() {
document.getElementById("appname").style.display = "block";
document.getElementById("appdesc").style.display = "block";
document.getElementById("appquan").style.display = "block";
document. getElementById("edit3").disabled = true;
document. getElementById("delete3").style.display = "none";
document.getElementById("save3").style.display = "block";


}
function deleteapp() {
	// document.getElementById('3').innerHTML = '';
	// document.getElementById('img3').src = '';
	document.getElementById("apple").innerHTML = '';
	
	input.products[2].title = "";
	input.products[2].description = "";
	input.products[2].image = "";
	input.products[2].quantity = "";
	delete input[2];

}
function savApp() {
	var name3 = document.getElementById("appname").value;
	var desc3 = document.getElementById("appdesc").value;
	var quan3 = document.getElementById("appquan").value;

	if (name3 != "" && desc3 !="") {
		input.products[2].title = name3;
		input.products[2].description = desc3;
		if (quan3 != "") {
			input.products[2].quantity = quan3;
document.getElementById('3').innerHTML = input.products[2].title + "<br><br>" + input.products[2].description + "<br><br>"+ input.products[2].quantity + "<br><br>";
		} else {
document.getElementById('3').innerHTML = input.products[2].title + "<br><br>" + input.products[2].description + "<br><br>"+ input.products[2].quantity + "<br><br>";

		} 
		} else if (name3 != "" && desc3 == "") {
			input.products[2].title = name3; 
			if (quan3 != "") {
				input.products[2].quantity = quan3;
document.getElementById('3').innerHTML = input.products[2].title + "<br><br>" + input.products[2].description + "<br><br>"+ input.products[2].quantity + "<br><br>";
			} else {
document.getElementById('3').innerHTML = input.products[2].title + "<br><br>" + input.products[2].description + "<br><br>"+ input.products[2].quantity + "<br><br>";
			}
		} else if (name3 == "" && desc3 != "") {
			input.products[2].description = desc3;
			if (quan3 != "") {
				input.products[2].quantity = quan3;
document.getElementById('3').innerHTML = input.products[2].title + "<br><br>" + input.products[2].description + "<br><br>"+ input.products[2].quantity + "<br><br>";
			} else {
document.getElementById('3').innerHTML = input.products[2].title + "<br><br>" + input.products[2].description + "<br><br>"+ input.products[2].quantity + "<br><br>";
			}
		} else if (name3 == "" && desc3 == "") {
			if(quan3 != "") {
				input.products[2].quantity = quan3;
document.getElementById('3').innerHTML = input.products[2].title + "<br><br>" + input.products[2].description + "<br><br>"+ input.products[2].quantity + "<br><br>";

			} else {
document.getElementById('3').innerHTML = input.products[2].title + "<br><br>" + input.products[2].description + "<br><br>"+ input.products[2].quantity + "<br><br>";
			}
		}
document.getElementById("appname").style.display = "none";
document.getElementById("appdesc").style.display = "none";
document.getElementById("appquan").style.display = "none";
document. getElementById("edit3").disabled = false;
document. getElementById("delete3").style.display = "block";
document.getElementById("save3").style.display = "none";
	
}
function editred() {
document.getElementById("redname").style.display = "block";
document.getElementById("reddesc").style.display = "block";
document.getElementById("redquan").style.display = "block";
document. getElementById("edit4").disabled = true;
document. getElementById("delete4").style.display = "none";
document.getElementById("save4").style.display = "block";


}
function deletered() {
	// document.getElementById('4').innerHTML = '';
	// document.getElementById('img4').src = '';
	document.getElementById("redmi").innerHTML = '';
	input.products[3].title = "";
	input.products[3].description = "";
	input.products[3].image = "";
	input.products[3].quantity = "";
	delete input[3];	
}
function savRed() {
	var name4 = document.getElementById("redname").value;
	var desc4 = document.getElementById("reddesc").value;
	var quan4 = document.getElementById("redquan").value;
	if (name4 != "" && desc4 !="") {
		input.product[3].title = name4;
		input.products[3].description = desc4;
		if (quan4 != "") {
			input.products[3] = quan4;
document.getElementById('4').innerHTML = input.products[3].title + "<br><br>" + input.products[3].description + "<br><br>"+ input.products[3].quantity + "<br><br>";
		} else {
document.getElementById('4').innerHTML = input.products[3].title + "<br><br>" + input.products[3].description + "<br><br>"+ input.products[3].quantity + "<br><br>";

		} 
		} else if (name4 != "" && desc4 == "") {
			input.products[3].title = name4;
			if (quan4 != "") {
				input.products[3].quantity = quan4;
document.getElementById('4').innerHTML = input.products[3].title + "<br><br>" + input.products[3].description + "<br><br>"+ input.products[3].quantity + "<br><br>";
			} else {
document.getElementById('4').innerHTML = input.products[3].title + "<br><br>" + input.products[3].description + "<br><br>"+ input.products[3].quantity + "<br><br>";
			}
		} else if (name4 == "" && desc4 != "") {
			input.products[3].description = desc4;
			if (quan4 != "") {
				input.products[3].quantity = quan4;
document.getElementById('4').innerHTML = input.products[3].title + "<br><br>" + input.products[3].description + "<br><br>"+ input.products[3].quantity + "<br><br>";
			} else {
document.getElementById('4').innerHTML = input.products[3].title + "<br><br>" + input.products[3].description + "<br><br>"+ input.products[3].quantity + "<br><br>";
			}
		} else if (name4 == "" && desc4 == "") {
			if(quan4 != "") {
				input.products[3].quantity = quan4;
document.getElementById('4').innerHTML = input.products[3].title + "<br><br>" + input.products[3].description + "<br><br>"+ input.products[3].quantity + "<br><br>";

			} else {
document.getElementById('4').innerHTML = input.products[3].title + "<br><br>" + input.products[3].description + "<br><br>"+ input.products[3].quantity + "<br><br>";
			}
		}
document.getElementById("redname").style.display = "none";
document.getElementById("reddesc").style.display = "none";
document.getElementById("redquan").style.display = "none";
document. getElementById("edit4").disabled = false;
document. getElementById("delete4").style.display = "block";
document.getElementById("save4").style.display = "none";
	
}
document.getElementById('1').innerHTML = input.products[0].title + "<br><br>" + input.products[0].description + "<br><br>"+ input.products[0].quantity + "<br><br>";
document.getElementById('2').innerHTML = input.products[1].title + "<br><br>" + input.products[1].description + "<br><br>"+ input.products[1].quantity + "<br><br>";
document.getElementById('3').innerHTML = input.products[2].title + "<br><br>" + input.products[2].description + "<br><br>"+ input.products[2].quantity + "<br><br>";
document.getElementById('4').innerHTML = input.products[3].title + "<br><br>" + input.products[3].description + "<br><br>"+ input.products[3].quantity + "<br><br>";

// document.getElementById("image").src = "1.jpeg";
// document.getElementById('1').innerHTML = input.products[0].description + "<br><br>";
// document.getElementById('1').innerHTML = input.products[0].image + "<br><br>";
// document.getElementById('1').innerHTML = input.products[0].quantity + "<br><br>";


localStorage.setItem('myStorage', JSON.stringify(input));
var output = JSON.parse(localStorage.getItem('myStorage'));
console.log(output);
