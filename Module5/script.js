var input = {
	questions: [{
			name:"question1",
			hint:"This is a hint1",
			correct:"b1"
		},
		{
			name:"question2",
			hint:"This is a hint2",
			correct:"a2"
		}
	]
};
var count = 0;
function hint(a) {
if (a == 1) {
	document.getElementById("hint1").style.display = "block";
	document.getElementById("hint1").innerHTML = "Hint!!" + input.questions[0].hint;
} else if (a == 2) {
	document.getElementById("hint2").style.display = "block";
	document.getElementById("hint2").innerHTML = "Hint!!" + input.questions[1].hint;
}
}
function check(id) {
if (id == input.questions[0].correct) {
document.getElementById("sucess1").style.display = "block";
document.getElementById("b1").style.backgroundColor = "green";
document.getElementById("a1").disabled = true;
document.getElementById("b1").disabled = true;
document.getElementById("sucess1").innerHTML = "Correct!!! Answer";
count++;
} else{
document.getElementById("failure1").style.display = "block";
document.getElementById("a1").style.backgroundColor = "red";
document.getElementById("a1").disabled = true;
document.getElementById("b1").disabled = true;
document.getElementById("failure1").innerHTML = "Wrong!!! Answer";
}
}

function check1(id) {
if (id == input.questions[1].correct) {
document.getElementById("sucess2").style.display = "block";
document.getElementById("a2").style.backgroundColor = "green";
document.getElementById("a2").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("sucess2").innerHTML = "Correct!!! Answer";
count++;
} else{
document.getElementById("failure2").style.display = "block";
document.getElementById("b2").style.backgroundColor = "red";
document.getElementById("a2").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("failure2").innerHTML = "Wrong!!! Answer";
}
}
