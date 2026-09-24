let username = document.getElementById("user-name");
console.log("BMI calculator");
let gender = document.getElementById("gender");
let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
<<<<<<< HEAD
let result = document.getElementById("results");
=======

>>>>>>> 55278bae3086e53f8820dd77903e392f6d3d0bcc
function cal() {
  let w = Number(weight.value);
  let h = Number(height.value);
  if (h <= 0 || w <= 0) {
    alert("enter a valid value of height and weight.");
  }
  // converting height into meters
  h = h / 100;
  let BMI = w / (h * h);
<<<<<<< HEAD
  if (BMI > 0) {
    result.innerText = BMI.toFixed(2);
  } else {
    result.innerText = "00.0";
  }

=======

  let result = BMI.toFixed(2);
>>>>>>> 55278bae3086e53f8820dd77903e392f6d3d0bcc
  console.log(typeof BMI);
  console.log(username.value);
  console.log(gender.value);
  console.log(age.value);
  console.log(height.value);
  console.log(weight.value);
  console.log("BMI value=", result);
}
