let date = new Date();
customizeDate = 
" سال : "+date.getFullYear()+" ماه : "+ date.getMonth()+" روز :‌ "+date.getDate()
+" "+" ساعت : "+date.getHours()+" دقیقه : "+date.getMinutes();
document.getElementById('customizeDate').innerHTML = customizeDate;