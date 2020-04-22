// header js  

function toggle() {
  let nav = document.querySelector("nav");
  if (nav.style.display == "") {
    nav.style.display = "block";
  } else if (nav.style.display == "none") {
    nav.style.display = "block";
  } else if (window.innerWidth < 1150 && nav.style.display == "block") {
    nav.style.display = "none";
  }
}

function f() {
  if (window.innerWidth > 1150) {
    document.querySelector("nav").style = "";
  }

  window.requestAnimationFrame(f);
}
document.onload = f();
