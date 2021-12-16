let images = document.querySelectorAll(".container .gallery a");
let popup = document.querySelector(".popup");
let biggestImg = document.querySelector(".popup .inner img");
let closeIcon = document.querySelector(".close-icon");
let prevBtn = document.querySelector(".arrows .prev");
let nextBtn = document.querySelector(".arrows .next");
let entanceBtn= document.querySelector(".btn");
let inputName= document.querySelector("input");
let welcome= document.querySelector("h2");
let smallImages=document.querySelector(".ofGallery")
let entrance=document.querySelector(".entance")

console.log(welcome);

entanceBtn.addEventListener("click", function () {

    if(inputName.value===null || inputName.value===undefined || inputName.value==="" || inputName.value==="Please enter a Name")
   {
    inputName.value="Please enter a Name"
}
   else
   {
     smallImages.style.visibility="visible"
   welcome.innerText=" "
   welcome.innerText="Welcome, "+ inputName.value + "!"
   entrance.style.visibility="hidden"
  }
    
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    if(inputName.value===null || inputName.value===undefined || inputName.value==="" || inputName.value==="Please enter a Name")
    {
     inputName.value="Please enter a Name"
 }
    else
    {
      smallImages.style.visibility="visible"
    welcome.innerText=" "
    welcome.innerText="Welcome, "+ inputName.value + "!"
    entrance.style.visibility="hidden"
   }
  }
});

images.forEach((image) => {
  image.addEventListener("click", function (e) {
    e.preventDefault();
    doOpen();
    changableImage(image);
    image.classList.add("showSlide");
  });
});

nextBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  nextElemSib(showSlide);
});

prevBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  prevElemSib(showSlide);
});

function doOpen() {
  popup.style.display = "flex";
}

function doClose() {
  popup.style.display = "none";
}

closeIcon.addEventListener("click", function () {
  doClose();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && popup.style.display === "flex") {
    doClose();
  }
});



document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft" && popup.style.display === "flex") {
  let showSlide = document.querySelector(".showSlide");
  prevElemSib(showSlide);
  }
});


document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight" && popup.style.display === "flex") {
    let showSlide = document.querySelector(".showSlide");
    nextElemSib(showSlide);
  }
});

function changableImage(item) {
  let imgSrc = item.getAttribute("href");
  biggestImg.setAttribute("src", imgSrc);
}

function nextElemSib(item) {
  if (item.nextElementSibling !== null) {
    item.nextElementSibling.classList.add("showSlide");
    changableImage(item.nextElementSibling);
  } else {
    item.parentElement.children[0].classList.add("showSlide");
    changableImage(item.parentElement.children[0]);
  }

  item.classList.remove("showSlide");
}

function prevElemSib(item) {
  let length = item.parentElement.children.length;

  console.log(length);
  if (item.previousElementSibling !== null) {
    item.previousElementSibling.classList.add("showSlide");
    changableImage(item.previousElementSibling);
  } else {
    item.parentElement.children[length - 1].classList.add("showSlide");
    changableImage(item.parentElement.children[length - 1]);
  }
  item.classList.remove("showSlide");
}

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    doClose();
  }
});
