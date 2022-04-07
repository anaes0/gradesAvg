function grades() {
var grade1 = parseInt(document.getElementById('grade1').value);
var grade2 = parseInt(document.getElementById('grade2').value);
var grade3 = parseInt(document.getElementById('grade3').value);
var grade4 = parseInt(document.getElementById('grade4').value);
var grade5 = parseInt(document.getElementById('grade5').value);

var total = grade1+grade2+grade3+grade4+grade5;
var per  = total/5;
var grade;
if (per >= 90) {
grade = 'A';
} 

else if(per >= 80 && per < 90){
grade = 'B';
}

else if(per >= 70 && per < 80){
grade = 'C';
}

else if(per >= 60 && per< 70){
grade = 'D';
}

else if(per < 50){
grade = 'F';
}

else{
grade = "Not valid";
}
document.getElementById("demo").innerHTML = "<b>Your Total Marks is:</b> "+total+"<br><b>Your Average is :</b> "+per+"<br><b>Your Grade is:</b> "+grade;
// document.write("Your Total Marks : "+total);
// document.write("<br>Your Percentage : "+per);
// document.write("<br>Your Grade : "+grade);
				
}