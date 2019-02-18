function triangleSides() {

  var result = [];

  var a = parseInt(document.getElementById('A').value);
  result.push(a);
  var b = parseInt(document.getElementById('B').value);
  result.push(b);
  var c = parseInt(document.getElementById('C').value);
  result.push(c);
  var display = document.querySelector("#results");

  //Check if input is a triangle
  if(a+b>c && b+c>a && a+c>b) {
    if(a == b && a ==c && b == c) {
      display.innerHTML ="IT IS AN EQUILATERAL TRIANGLE"
    }
    else if (a == b || a ==c || b == c) {
      display.innerHTML = "IT IS AN ISOSCELES TRIANGLE"
    }
    else {
      display.innerHTML = "IT IS A SCALENE TRIANGLE"
    }
  }
}
