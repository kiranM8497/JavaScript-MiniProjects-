let string = "";
// console.log("hi");
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        string = string.replace(/X/g, "*"); // Replace "X" with "*"
        string = eval(string);
        document.querySelector(".input").value = string;
      } else if (e.target.innerHTML === "AC") {
        string = "";
        document.querySelector(".input").value = string;
      } else if (e.target.innerHTML === "C") {
        string = string.slice(0, -1); // Remove the last character
        document.querySelector(".input").value = string;
      } else {
        string += e.target.innerHTML;
        // console.log(String);
        document.querySelector(".input").value = string;
      }
    } catch (error) {
      console.error("Error: ", error.message);
      document.querySelector(".input").value = "Error";
      setTimeout(() => {
        document.querySelector(".input").value = string;
      }, 1200);
    }
  });
});
