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

  const imgArr = [
    "images/view1.jpg",
    "images/view2.jpg",
    "images/view3.jpg",
    "images/view4.jpg",
    "images/view5.jpg",
    "images/view6.jpg",
  ];

  const rotateImg = (() => {
    const imgIndex = imgArr.indexOf(document.querySelector("#myImages").getAttribute("src"));
    
    return imgArr[(imgIndex === imgArr.length - 1) ? 0 : imgIndex + 1];
  });   

  document.querySelector("#myImages").addEventListener("click", () => {
    document.querySelector("#myImages").setAttribute("src", rotateImg());
  });
})();
