let expression = '0';
let output = document.getElementById('output-window');

let update = () => output.value = expression;
let clearAll = () => {expression = '0'; update()};
let equal = () => {expression = eval(expression); update()};

function clearLast() {
    if (expression == '0') return true;
    if (expression.length == 1) expression = '0';
    else expression = expression.slice(0, -1);
    update();
}

function input(n) {
    if (expression == '0' && n != '.') expression = '';
    expression += n;
    update();
}