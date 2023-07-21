var display = document.getElementById("display");
var button = document.getElementsByClassName("button");
var text = document.getElementById("text");

var op1 = null;
var op2 = null;
var op = null;


for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        if (value == '+') {
            op = '+';
            op1 = parseFloat(text.textContent);
            // text.innerText = "+";
            text.innerText = ""
        }
        else if (value == '-') {
            op = '-';
            op1 = parseFloat(text.textContent);
            // text.innerText = "+";
            text.innerText = ""
        }
        else if (value == '*') {
            op = '*';
            op1 = parseFloat(text.textContent);
            // text.innerText = "+";
            text.innerText = ""
        }
        else if (value == '/') {
            op = '/';
            op1 = parseFloat(text.textContent);
            // text.innerText = "+";
            text.innerText = ""
        }
        else if (value == '%') {
            op = '%';
            op1 = parseFloat(text.textContent);
            // text.innerText = "+";
            text.innerText = ""
        }
        else if (value == '=') {
            op2 = parseFloat(text.textContent);
            var result = null;
            if (op == "+") {
                result = eval("op1 + op2");
            }
            else if (op == "-") {
                result = eval("op1 - op2");
            }
            else if (op == "/") {
                result = eval("op1 / op2");
            }
            else if (op == "*") {
                result = eval("op1 * op2");
            }
            else if (op == "%") {
                result = eval("op1 % op2");
            }
            else {
                result = "ERROR";
            }
            text.innerText = result;
        }
        else if (value == 'AC') {
            text.innerText = "";
        }

        else {
            text.innerText += value;
        }
    })
}