function myFunction() {
    document.getElementById("display").value= " ";
  }


function myCalculate() {
    var p = document.getElementById("display").value;
    var q = eval(p);
    document.getElementById("display").value= q;
  }

  