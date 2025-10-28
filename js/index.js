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

  const rotateImg = () => {
    const imgIndex = imgArr.indexOf(
      document.querySelector("#myImages").getAttribute("src")
    );

    const path = imgArr[imgIndex === imgArr.length - 1 ? 0 : imgIndex + 1];

    document.querySelector("#myImages").setAttribute("src", path);
  };

  let imgIntervalId = setInterval(rotateImg, 3000);

  const clickToRotateImg = () => {
    clearInterval(imgIntervalId);
    rotateImg();
    imgIntervalId = setInterval(rotateImg, 3000);
  };

  document.querySelector("#myImages").addEventListener("click", () => {
    clickToRotateImg();
  });
})();
