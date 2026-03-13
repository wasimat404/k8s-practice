function calculateBMI(){

let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;

let bmi = weight/(height*height);

let message="";

if(bmi<18.5){
message="Underweight";
}
else if(bmi<25){
message="Normal weight";
}
else if(bmi<30){
message="Overweight";
}
else{
message="Obese";
}

document.getElementById("result").innerHTML =
"Your BMI: "+bmi.toFixed(2)+"<br>"+message;

}
