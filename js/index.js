(() => {
  document.querySelector(".red").addEventListener("click", () => {
    document.body.setAttribute("class", "redBack");
  });
  document.querySelector(".green").addEventListener("click", () => {
    document.body.setAttribute("class", "greenBack");
  });
  document.querySelector(".blue").addEventListener("click", () => {
    document.body.setAttribute("class", "blueBack");
  });
  document.querySelector(".reset").addEventListener("click", () => {
    document.body.removeAttribute("class");
  });
})();
