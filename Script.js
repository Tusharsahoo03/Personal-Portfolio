function hover1(event) {
  event.preventDefault();
  let hoverElement1 = document.getElementById("h1");
  hoverElement1.style.backgroundColor = "orangered";

  setTimeout(() => {
    window.location.href = "aboutme.html";
  }, 100);
}
function About(event) {
  event.preventDefault();
  let aboutJs = document.getElementById("aboutJs");
  aboutJs.style.backgroundColor = "orangered";

  setTimeout(() => {
    window.location.href = "aboutme.html";
  }, 200);
}

function changeTheme() {
  let newTheme = true;
  let theme = document.getElementById("theme");
  let body = document.querySelector(".mainContainer");
  let webdev = document.getElementById("webdev");
  let summary = document.getElementById("summary");
  let aboutme = document.getElementById("aboutme");
  let img = document.getElementById("img1");
  theme.addEventListener("click", () => {
    if (newTheme) {
      body.style.backgroundColor = "white";
      theme.style.backgroundColor = "yellow";
      webdev.style.color = "grey";
      theme.innerHTML = '<i class="fa-solid fa-moon"></i>';
      summary.style.color = "black";
      aboutme.style.color = "black";
      body.style.transition = "all 2s";
      img.src = "portfolio_img.jpg";
    } else {
      body.style.backgroundColor = "black";
      theme.style.backgroundColor = "grey";
      summary.style.color = "white";

      theme.innerHTML = '<i class="fa-solid fa-sun"></i>';
      aboutme.style.color = "white";
      body.style.transition = "all 2s";
      img.src = "portfolio3.jpg";
    }
    newTheme = !newTheme;
  });
}
function margin() {
  let marginElement = document.getElementById("margin");
  marginElement.addEventListener("mouseover", () => {
    marginElement.style.marginRight = "20px";
  });
  marginElement.addEventListener("mouseout", () => {
    marginElement.style.marginRight = "0px";
  });
}
margin();

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
