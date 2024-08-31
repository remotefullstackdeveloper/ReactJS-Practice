function func1() {
  var x = document.getElementById("FirstOne").value;
  var y = document.getElementById("SecondOne").value;

  var sum = parseFloat(x) + parseFloat(y);
  document.write(sum);
}

func1();
