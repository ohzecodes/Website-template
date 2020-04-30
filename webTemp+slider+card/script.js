
let elem_im = document.getElementById("myimg");
let con = document.getElementById("slidhere");
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
  setimg()
  window.requestAnimationFrame(f);
}
document.onload = f();

// image slider 

function setimg() {
  console.log('window.innerWidth : ', window.innerWidth);
  if (window.innerWidth>950 ) { 
    // "(min-width: 950px)"
    elem_im.width = 900;
    elem_im.height = (elem_im.width - 50) * 2 / 3;
    
  } 
  else if (window.innerWidth >550&&window.innerWidth <950) { 
    //(max-width: 600px) and (min-width: 400px)
   
    elem_im.width = 500;
    elem_im.height = (elem_im.width - 50) * 2 / 3;
    
  }
  else {
    elem_im.width = 300;
    elem_im.height = (elem_im.width - 50) * 2 / 3;
  }
  
}


let which = 0;
console.log("totalimgs", img.length);
function createSliderBtns(n) {
  var radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "slibtn";
  radio.classList.add("slibutton");
  // <span class="checkmark"></span>
  radio.onclick = function () {
    changeslide(n);
  };
  document.getElementById("sliderbtns").appendChild(radio);
}
img.forEach((p, n) => {
  createSliderBtns(n);
});


// var all = document.getElementsByClassName('move');
// for (var i = 0; i < all.length; i++) {
//   all[i].style.height = elem_im.height;
// }

function changeslide(n) {
  which = n;
  init(which);
}
function init(which) {
  // console.log();
 
  elem_im.src = img[which].src;
  elem_im.alt = img[which].alt;
  document.getElementsByClassName("slibutton")[which].checked = true;

}


function run_right(b) {
  init(which);

  if (which < img.length - 1) {
    which++;
  } else {
    which = 0;
  }
  if (b) {
    requestAnimationFrame(function () {
      
      setTimeout(function () {
        run_right(true);
      }, 3000); //edit this 3000 to make it faster or slower
    });
  }
}
run_right(true);

function run_left() {
  if (which == 0) {
    which = img.length - 1;
  } else which -= 1;

  init(which);
}

document.getElementById("btnlt").onclick = run_left;
document.getElementById("btngt").onclick = function () {
  run_right(false);
};


