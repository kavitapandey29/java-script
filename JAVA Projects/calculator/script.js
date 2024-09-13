let string = "";

let buttons = document.querySelectorAll('input[type="button"]');

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.value === '=') {
      string = eval(string);
    } else if (event.target.value === 'AC') {
      string = ""; // clear the string when AC is clicked
    } else if (event.target.value === 'DE') {
      string = string.slice(0, -1); // remove the last character when DE is clicked
    } else {
      string += event.target.value;
    }
    document.querySelector('input[name="display"]').value = string;
  });
});