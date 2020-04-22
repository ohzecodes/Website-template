let img = [
  {
    src:
      "https://cdn.pixabay.com/photo/2013/08/11/19/46/coffee-171653_1280.jpg",
    alt: "beans",
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/07/13/17/23/cup-2501196_1280.jpg",
    alt: "cup and camera",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2020/04/13/10/48/coffee-5037804_1280.jpg",
    alt: "cup on table",
  },
];

let which = 0;
console.log("totalimgs", img.length);
function createSliderBtns(n) {
  var radio = document.createElement("input");
  radio.type="radio";
  radio.name="slibtn"
  radio.classList.add("slibutton");
  // <span class="checkmark"></span>
  
  radio.onclick=function(){changeslide(n)}
  document.getElementById("sliderbtns").appendChild(radio);
 
}
// document.
img.forEach((p,n)=>{
createSliderBtns(n)
})


let elem_im = document.getElementById("myimg");
elem_im.width = 900;
elem_im.height = 600;
con=document.getElementById("slidhere");
con.style.width=`${elem_im.width}px`;
con.style.height=`${elem_im.height}px`;

// var all = document.getElementsByClassName('move');
// for (var i = 0; i < all.length; i++) {
//   all[i].style.height = elem_im.height;
  
// }

function changeslide(n){
which=n
init(which)
}
function init(which) {
  // console.log();
  elem_im.src = img[which].src;
  elem_im.alt = img[which].alt;
}


function run_right(b) {
  init(which);
  console.log(which, which < img.length);

  if (which < 2) {
    which++;
  } else {
    which = 0;
  }
if(b){
  requestAnimationFrame(function () {
    setTimeout(function(){run_right(true)}, 3000); //edit this 3000 to make it faster or slower
  });}
}
run_right(true);

function run_left() {
  if (which == 0) {
    which = 2;
  } else which -= 1;
}

document.getElementById("btnlt").onclick=run_left;

document.getElementById("btngt").onclick=function(){run_right(false)}