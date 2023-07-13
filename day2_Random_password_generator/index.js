const arr =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","@","#","$","&","_","-"];

let pass1=document.getElementById("pass1")
let pass2=document.getElementById("pass2")
function pass(){
    let randNum="";
    let randNum2="";
    let b="",c="";

let passleng=document.querySelector("#passLen").value;
    for(let a=1;a<=passleng;a++){
        randNum=Math.floor(Math.random()*(arr.length-1))+1
// {  Math.random 0 se 0.9999 tak random num generate krta hai, or yha arr.length ka mult kr de rhe hai jisse supose length 4 hai to value 4.9999 tak
// hogi. math.floor Point(.) ke bad decimal numbers ko hatane ka kam krti hai.   }

        randNum2= Math.floor(Math.random()*arr.length-1)+1
        b+= arr[randNum]
        c+= arr[randNum2]
    }
    pass1.value=b;
    pass2.value=c;
    
}



function CopyMe(which_1) {
    let pass1El=document.getElementById("pass1")
let pass1E2=document.getElementById("pass2")

which_1.select()
which_1.setSelectionRange(0,9999)
    document.execCommand("copy")
    // console.log(pass1.textContent)
    // alert("Copied the text: " + pass1E1.value);
  }