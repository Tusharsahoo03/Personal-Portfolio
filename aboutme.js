function hover2(event) {
  event.preventDefault();
  let hoverElement1 = document.getElementById("h2");
  hoverElement1.style.backgroundColor = "orangered";

  setTimeout(() => {
    window.location.href = "Tushar_Kanta_Sahoo_Resume.pdf";
  }, 200);
}

function Show() {
  let show = document.getElementById("show");
  let hide = document.getElementById("hide");
  let bar = document.getElementById("bar");
  let cross = document.getElementById("cross");
  let hideall = document.getElementById("hideall");
  let main = document.getElementById("main");
  let mainContainerforMobile = document.getElementById(
    "mainContainerforMobile"
  );

  show.addEventListener("click", () => {
    hide.style.display = "block";
    bar.style.display = "none";
    cross.style.display = "block";
    hideall.style.display = "block";
    main.style.display = "none";
    body.style.transition = "all 2s";
    mainContainerforMobile.style.backgroundColor = "red";
  });
}
function Cross() {
  let cross = document.getElementById("cross");
  let hideall = document.getElementById("hideall");
  let bar = document.getElementById("bar");
  let main = document.getElementById("main");
  let body = document.querySelectorAll("body");

  cross.addEventListener("click", () => {
    hideall.style.display = "none";
    bar.style.display = "block";
    cross.style.display = "none";
    main.style.display = "block";
    body.style.transition = "all 2s";
  });
}
