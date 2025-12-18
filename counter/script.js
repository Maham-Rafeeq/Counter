let h1 =document.getElementById("h1");
let num = 0;
function plusme(){
    num++;
    h1.innerText = num;
}
function subractme(){
    if(num == 0){
        alert("your number is less than 1")
    }
    else{
        num--;
        h1.innerText = num;
    }
}