let display = document.querySelector(".calc__display");
display.value = "0";
let buttons = Array.from(document.querySelectorAll(".calc__buttons"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    if (
      e.target.tagName.toLowerCase() === "button" ||
      e.target.tagName.toLowerCase() === "img"
    ) {
      if (e.target.closest(".del")) {
        if (display.value !== "0") {
          display.value = display.value.slice(0, -1);
        }
      } else {
        switch (e.target.innerText) {
          case "AC":
            display.value = "0";
            break;
          case "=":
            try {
              display.value = eval(
                display.value
                  .replace(/÷/gi, "/")
                  .replace(/x/gi, "*")
                  .replace(/–/gi, "-")
              );
              let result = display.value;
              display.value = Math.round(result * 10000) / 10000;
            } catch (e) {
              display.value = "Error!";
            }
            break;
          case "%":
            let passedText = display.value + "/100";
            display.value = eval(
              passedText
                .replace(/÷/gi, "/")
                .replace(/x/gi, "*")
                .replace(/–/gi, "-")
            );
            break;
          default:
            if (
              (display.value === "0" || display.value === "0.0") &&
              e.target.innerText !== "."
            ) {
              display.value = e.target.innerText;
            } else {
              display.value += e.target.innerText;
            }
            break;
        }
      }
    }
  });
});

const themeButton = document.querySelector(".theme__button");
const svg = document.getElementById("theme__b");

themeButton.addEventListener("click", () => {
  if (document.body.hasAttribute("dark")) {
    document.body.removeAttribute("dark", "");
    svg.style.stroke = "black";
  } else {
    document.body.setAttribute("dark", "");
    svg.style.stroke = "white";
  }
});
