const hour=document.getElementById("hour")
const minute= document.getElementById("minute")
const second= document.getElementById("second")
const ampm=document.getElementById("ampm")


//to add "0" before the number if number is single digit

function makeTwoDigit(time){
  return time.toString().padStart(2, "0");
}

// to decide time is in AM or in PM
function isAmPm(hours){
  return hours >=12? "PM" : "AM";
}

// function 

// main clock operational function

function clock(){
  const date=new Date()

  let h = date.getHours()
  let m= date.getMinutes()
  let s= date.getSeconds()

  hour.textContent=makeTwoDigit(h)
  minute.textContent=makeTwoDigit(m)
  second.textContent=makeTwoDigit(s)


  ampm.textContent=isAmPm(h)
  console.log(s);
  
}
setInterval(clock, 1000);
