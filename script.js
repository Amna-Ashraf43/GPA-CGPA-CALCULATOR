// ============================
// GPA & CGPA Calculator
// Developed by Amna Ashraf
// ============================

let subjectCount = 8;

// Grade Point Function
function getGradePoint(marks){

    if(marks>=85) return 4.00;
    else if(marks>=80) return 3.70;
    else if(marks>=75) return 3.30;
    else if(marks>=70) return 3.00;
    else if(marks>=65) return 2.70;
    else if(marks>=61) return 2.30;
    else if(marks>=58) return 2.00;
    else if(marks>=55) return 1.70;
    else if(marks>=50) return 1.00;
    else return 0.00;

}

// GPA Calculation
function calculateGPA(){

let totalCredits=0;
let totalPoints=0;

for(let i=1;i<=subjectCount;i++){

let marks=document.getElementById("marks"+i);
let credit=document.getElementById("credit"+i);

if(marks && credit){

let m=parseFloat(marks.value)||0;
let c=parseFloat(credit.value)||0;

if(m>100){

alert("Marks cannot be greater than 100");

marks.value=100;

m=100;

}

if(m<0){

marks.value=0;

m=0;

}

totalCredits+=c;

totalPoints+=getGradePoint(m)*c;

}

}

document.getElementById("totalCredit").innerHTML=totalCredits;

if(totalCredits>0){

let gpa=totalPoints/totalCredits;

document.getElementById("result").innerHTML=gpa.toFixed(2);

}
else{

document.getElementById("result").innerHTML="0.00";

}

}

// Add Subject
function addSubject(){

subjectCount++;

let container=document.getElementById("subjects");

let div=document.createElement("div");

div.className="subject";

div.innerHTML=`

<input type="text" placeholder="Subject ${subjectCount}">

<input
type="number"
id="marks${subjectCount}"
placeholder="Marks (0-100)"
oninput="calculateGPA()">

<input
type="number"
id="credit${subjectCount}"
placeholder="Credit Hours"
oninput="calculateGPA()">

`;

container.appendChild(div);

}

// CGPA Calculation

function calculateCGPA(){

let total=0;

let count=0;

for(let i=1;i<=8;i++){

let semester=document.getElementById("semester"+i);

if(semester){

let value=parseFloat(semester.value);

if(!isNaN(value) && value>0){

total+=value;

count++;

}

}

}

if(count>0){

let cgpa=total/count;

document.getElementById("cgpaResult").innerHTML=cgpa.toFixed(2);

}

else{

document.getElementById("cgpaResult").innerHTML="0.00";

}

}