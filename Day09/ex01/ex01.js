function go() {
    var n1, n2;
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    var x = document.getElementById("Sign").value;
    if (isNaN(n1) || isNaN(n2) || parseInt(n1) < 0 || parseInt(n2) < 0){
        alert("Error :(");
        console.log("Error  :(");
    }
    else if ((x == '/' || x == '%') && parseInt(n2) == 0) {
        alert("Divide on 0!");
        console.log("Divide on 0!");
    }
    else {
        var res = eval(n1 + x + n2);
        alert(res);
        console.log(res);
    }

}