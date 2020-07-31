const COLOR_LIGHT = '#d6d6d6';
const COLOR_DARK = '#2d2d2d';

let expression = '0';
let darktheme = false;
let output = document.getElementById('output-window');
let themeButton = document.getElementById('theme_button');
let buttons = document.getElementsByClassName('button');

const update = () => output.value = expression;
const clearAll = () => {
  expression = '0';
  update();
};
const equal = () => {
  expression = eval(expression);
  update();
};

function clearLast() {
  if (expression == '0') return true;
  if (expression.length == 1) expression = '0';
  else expression = expression.slice(0, -1);
  update();
}

function input(n) {
  if (expression.length >= 20) return alert("Достигнуто ограничение по количеству символов (20)");
  if (expression == '0' && n != '.') expression = '';
  expression += n;
  update();
}

function darkEnable() {
  if (darktheme == false) {
    document.body.style.backgroundColor = COLOR_DARK;
    output.style.color = COLOR_LIGHT;
    output.style.backgroundColor = COLOR_DARK;
    themeButton.style.color = COLOR_LIGHT;
    themeButton.style.backgroundColor = COLOR_DARK;
    themeButton.style.borderColor = COLOR_LIGHT;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.color = COLOR_LIGHT;
    }
    darktheme = true;
  } else {
    document.body.style.backgroundColor = COLOR_LIGHT;
    output.style.color = COLOR_DARK;
    output.style.backgroundColor = COLOR_LIGHT;
    themeButton.style.color = COLOR_DARK;
    themeButton.style.backgroundColor = COLOR_LIGHT;
    themeButton.style.borderColor = COLOR_DARK;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.color = COLOR_DARK;
    }
    darktheme = false;
  }
}
