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