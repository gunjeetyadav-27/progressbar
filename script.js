let inner=document.querySelector('#inner')
let h2=document.querySelector("h2")
let btn=document.querySelector("button")

btn.addEventListener(`click`,function(){
   btn.style.pointerEvents='none'
    btn.style.opacity=0.5
  let grow=0;
  let int=setInterval(()=>{
    grow++;
    inner.style.width=`${grow}%`
    
    h2.innerHTML=`${grow}%`;
    

  },100)

  setTimeout(()=>{
    clearInterval(int);
    btn.innerHTML='Downloaded'
   
  },10000)



})