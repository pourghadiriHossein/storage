// Public Part
let date = new Date();
customizeDate = 
" سال : "+date.getFullYear()+" ماه : "+ date.getMonth()+" روز :‌ "+date.getDate()
+" "+" ساعت : "+date.getHours()+" دقیقه : "+date.getMinutes();
document.getElementById('customizeDate').innerHTML = customizeDate;


// FAQ Part
var coll = document.getElementsByClassName("headTab");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("openedHeadTab");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// single product
function selectFirstImage () {
  let image = document.getElementById('first').getAttribute('src');
  show(image); 
}
function selectSecondImage () {
  let image = document.getElementById('second').getAttribute('src');
  show(image); 
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function show(image) {
  for (var i=0; i<=100; i++){
    document.getElementById("show").style.opacity = 1-(i/100);
    await sleep(5);
  }
  document.getElementById('show').src = image;
  for (var i=0; i<=100; i++){
    document.getElementById("show").style.opacity = i/100;
    await sleep(5);
  }
}

function increment () {
  document.getElementById('productQuantity').stepUp();
}
function decrement () {
  if (parseInt(document.getElementById('productQuantity').value) > 1)
    document.getElementById('productQuantity').stepDown();
}

function descriptionTab () {
  document.getElementById('comment').style.display = "none";
  document.getElementById('description').style.display = "block";
}

function commentTab () {
  document.getElementById('description').style.display = "none";
  document.getElementById('comment').style.display = "block";
}