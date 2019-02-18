function triangleSides() {

  var result = [];


  var m = parseInt(document.getElementById('M').value);
  result.push(m);
  var n = parseInt(document.getElementById('N').value);
  result.push(n);
  var o = parseInt(document.getElementById('O').value);
  result.push(o);
  var display = document.querySelector("#results");

  //Check if input is a triangle
  if((m+n>c) && (n+o>m)&& (m+o>n)) {
    if(m == n && m ==o && n == o) {
      display.innerHTML ="IT IS AN EQUILATERAL TRIANGLE"
    }
    else if (m == n || m ==o || n == o) {
      display.innerHTML = "IT IS AN ISOSCELES TRIANGLE"
    }
    else {
      display.innerHTML = "IT IS A SCALENE TRIANGLE"
    }
  }
};
