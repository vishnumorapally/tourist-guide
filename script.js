const allhide = document.querySelectorAll("nav a")

console.log(allhide)

const items = document.querySelector(".it")


const open = document.querySelector("#open");
const close = document.querySelector("#close")
console.log( open)
close.style.display = "none";
open.addEventListener("click",()=>{
    console.log("menu")
    close.style.display = "block";
    open.style.display = "none";
    items.classList.add("mo")
    
    allhide.forEach((val)=>{
        val.style.display = "block";
    })

})

close.addEventListener("click",()=>{
    console.log("close")
    open.style.display = "block";
    close.style.display = "none";
    items.classList.remove("mo")
    
    allhide.forEach((val)=>{
        val.style.display = "none";
    })
})