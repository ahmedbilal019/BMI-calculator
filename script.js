let username = document.getElementById("user-name");
console.log("BMI calculator");
let gender = document.getElementById("gender");
let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");

function cal() {
  let w = Number(weight.value);
  let h = Number(height.value);
  if (h <= 0 || w <= 0) {
    alert("enter a valid value of height and weight.");
  }
  // converting height into meters
  h = h / 100;
  let BMI = w / (h * h);

  let result = BMI.toFixed(2);
  console.log(typeof BMI);
  console.log(username.value);
  console.log(gender.value);
  console.log(age.value);
  console.log(height.value);
  console.log(weight.value);
  console.log("BMI value=", result);
}
