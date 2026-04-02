let username = document.getElementById("user-name");
console.log("BMI calculator");
let gender = document.getElementById("gender");
let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");

let BMI = weight / (height * height);
function cal() {
  console.log(username.value);
  console.log(gender.value);
  console.log(age.value);
  console.log(height.value);
  console.log(weight.value);
  console.log("BMI value=", BM);
}
