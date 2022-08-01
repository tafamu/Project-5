const body=document.querySelector("body");
const end=document.querySelector(".end");
const color=document.querySelector(".color");

end.addEventListener("click",degistir);


function degistir(){
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    body.style.backgroundColor=`rgb(${r},${g},${b})`;
    color.innerHTML=`rgb(${r},${g},${b})`;
}