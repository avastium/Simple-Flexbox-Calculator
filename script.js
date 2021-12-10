let expression = '0';
let darktheme = false;

const update = () => output.value = expression;

function clearAll() {
  expression = '0';
  update();
}

function equal() {
  expression = eval(expression);
  update();
}

function clearLast() {
  if (expression == '0') return true;
  if (expression.length == 1) expression = '0';
  else expression = expression.slice(0, -1);
  update();
}

function input(n) {
  if (expression.length >= 20) return alert("Character limit reached (20)");
  if (expression == '0' && n != '.') expression = '';
  expression += n;
  update();
}

function switchTheme() {
  if (darktheme == false) {
    document.documentElement.style.setProperty('--theme-color', '#2d2d2d');
    document.documentElement.style.setProperty('--theme-opposite-color', '#d6d6d6');
    darktheme = true;
  } else {
    document.documentElement.style.setProperty('--theme-color', '#d6d6d6');
    document.documentElement.style.setProperty('--theme-opposite-color', '#2d2d2d');
    darktheme = false;
  }
}