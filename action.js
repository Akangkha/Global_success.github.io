const productContainers=Array(document.querySelector('.classwrapper'));

const nextBtn=document.querySelector('.arrow2');
const preBtn=document.querySelector('.arrow1');

productContainers.forEach((item,i)=>
{   
   console.log(item); 
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;
   
    
    nextBtn.addEventListener('click',() =>
    {
        item.scrollLeft+=(containerWidth-500);
       
        
    });
    
    console.log(i);
    
    preBtn.addEventListener('click',() =>
    {
        item.scrollLeft-=(containerWidth-500);
        console.log(i);
    });
  i+=1;


});









console.log("Website loaded");

let c=document.querySelector(".click");
let d=document.querySelector(".search1");
let x=document.querySelector(".cross");


c.addEventListener("click",function()
{
document.querySelector(".popup").style.display="flex";
});


d.addEventListener("click",function()
{
document.querySelector(".popup2").style.display="flex";
});



x.addEventListener("click",function()
{
document.querySelector(".popup2").style.display="none";
document.querySelector(".popup").style.display="none";
});

//navigation
var nav=document.querySelector(".nav1");
var navd=document.querySelector(".popup4 div");
console.log(navd)
nav.addEventListener("click",function()
{
document.querySelector(".popup4 img").style.display="flex";
navd.style.display="flex";
nav.style.color="transparent";
  navd.addEventListener("click",function()
    { document.querySelector(".popup4 img").style.display="none";
      navd.style.display="none";
      nav.style.color="#454A6D";
      
    });

});


//carousel 2 updater
console.log("loaded");


var cd=document.querySelector(".update").children;
console.log(cd);

let i=1;
let j=1;
var element = cd[i];
element.style.backgroundColor = "#005df2";


setInterval(() => {
    changeStyle();
    setTimeout(() => {
        changeStyle1();
    }, 12000);
}, 12000);



function changeStyle(){

    
    var element = cd[i];
    element.style.backgroundColor = "#005df2";
    i+=1;
    if(i==10)
        {
            i=0;
        }
}


function changeStyle1(){
var element = cd[j];
    element.style.backgroundColor = "#4e4a4a";
     j+=1;
     if(j==10)
        {
            j=0;
        }
}