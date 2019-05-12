let n1 = '';
let n2 = '';
let op = '';
let res = '';
$(document).ready(function() {

    $(".btn").click(function () {
        n1 = $("#n1").val();
        n2 = $("#n2").val();
        op = $("#sign").val();
        if(n1 === '' || n2 === ''){
            alert("Input any number to calc!");
            console.log("Input any number to calc!");
        }
        else if (isNaN(n1) || isNaN(n2)){
            alert("Check out input");
            console.log("Check out input");
        }
        else if ((op == '/' || op == '%') && parseInt(n2) == 0) {
            alert("Divide on 0!");
            console.log("Divide on 0!");
        }
        else {
            switch (op) {
                case '+':
                    res = +n1 + +n2;
                    break;
                case '-':
                    res = +n1 - +n2;
                    break;
                case '*':
                    res = +n1 * +n2;
                    break;
                case '/':
                    res = +n1 / +n2;
                    break;
                case '%':
                    res = +n1 % +n2;
                    break;

            }
            alert(res);
            $('input').val('');
        }

    });
});
