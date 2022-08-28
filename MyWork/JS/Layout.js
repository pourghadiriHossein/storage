// Public Part
let date = new Date();
customizeDate = 
" سال : "+date.getFullYear()+" ماه : "+ date.getMonth()+" روز :‌ "+date.getDate()
+" "+" ساعت : "+date.getHours()+" دقیقه : "+date.getMinutes();
document.getElementById('customizeDate').innerHTML = customizeDate;

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
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
//all product
function selectMode() {
  var select = document.getElementById('sort');
  var value = select.options[select.selectedIndex].value;
  switch(value) {
    case '1': 
      oldest();
      break;
    case '2': 
      newest();
      break;
    case '3':
      cheapest();
      break;
    case '4':
      expensivest();
      break;      
  }
}
function oldest() {
  var main = document.getElementById( 'productBox' );
  [].map.call( main.children, Object ).sort( function ( a, b ) {
      return +a.id.match( /\d+/ ) - +b.id.match( /\d+/ );
  }).forEach( function ( elem ) {
      main.appendChild( elem );
  });
  document.getElementById('counter').innerHTML = main.children.length;
}
function newest() {
  var main = document.getElementById( 'productBox' );
  [].map.call( main.children, Object ).sort( function ( a, b ) {
      return +b.id.match( /\d+/ ) - +a.id.match( /\d+/ );
  }).forEach( function ( elem ) {
      main.appendChild( elem );
  });
  document.getElementById('counter').innerHTML = main.children.length;
}
function cheapest() {
  var main = document.getElementById( 'productBox' );
  [].map.call( main.children, Object ).sort( function ( a, b ) {
      return +a.dataset.price.match( /\d+/ ) - +b.dataset.price.match( /\d+/ );
  }).forEach( function ( elem ) {
      main.appendChild( elem );
  });
  document.getElementById('counter').innerHTML = main.children.length;
}
function expensivest() {
  var main = document.getElementById( 'productBox' );
  [].map.call( main.children, Object ).sort( function ( a, b ) {
      return +b.dataset.price.match( /\d+/ ) - +a.dataset.price.match( /\d+/ );
  }).forEach( function ( elem ) {
      main.appendChild( elem );
  });
  document.getElementById('counter').innerHTML = main.children.length;
}
function searchProduct() {
  let products = document.getElementsByClassName('imageBox');
  let search = document.getElementById('searchBox').value;
  let counter = 0;
  for(let i = 0; i < products.length; i++) {
    if(products[i].dataset.name.match(search)){
      products[i].style.display = "inline-block";
      counter ++;
    }
    else 
      products[i].style.display = "none";  
  }
  document.getElementById('counter').innerHTML = counter;
}
