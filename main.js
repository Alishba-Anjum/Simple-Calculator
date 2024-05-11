let input = document.querySelector("input");

function display(num) {
  input.value += num;
}

function clearDisplay() {
  input.value = "";
}
function del() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.style.color = "red";
    input.value = "ERROR";
    setTimeout(() => {
      input.value = "";
      input.style.color ="black";
    }, 1000);
  }
}
