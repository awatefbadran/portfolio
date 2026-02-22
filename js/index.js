// scroll
const navLinks =document.querySelectorAll(".nav-links a")
const section=document.querySelectorAll("section")

window.addEventListener("scroll",function(){
    let curruntSection;
    for(var i=0;i<section.length;i++){
        if(this.scrollY>=section[i].offsetTop-90){
            curruntSection=section[i].getAttribute("id")
        }
    }
    for(var i=0;i<navLinks.length;i++){
        if(navLinks[i].getAttribute("href")==`#${curruntSection}`){
            navLinks[i].classList.add('active')

        }else{
             navLinks[i].classList.remove('active')
        }
    }
})
// dark & light
const togggleBtn =document.getElementById("theme-toggle-button")
const html =document.documentElement
if(localStorage.getItem("theme")){
if (localStorage.getItem("theme")== "dark"){
    html.classList.add("dark")
}else{
    html.classList.remove("dark")
}}
togggleBtn.addEventListener("click",function(){
html.classList.toggle("dark")
if(html.classList.contains("dark")){
localStorage.setItem("theme","dark")
}else{
localStorage.setItem("theme","light")   
}
})


// translate x
const toggleBtn=document.getElementById("settings-toggle")
const sideBar=document.getElementById("settings-sidebar")
const close=document.getElementById("close-settings")
close.addEventListener("click",function(){
    sideBar.classList.add("translate-x-full")
 toggleBtn.classList.toggle("right")
})
toggleBtn.addEventListener("click",function(){
    sideBar.classList.toggle("translate-x-full")
    toggleBtn.classList.toggle("right")
})

// font-option 
const fontOption = document.querySelectorAll(".font-option");

for (let i = 0; i < fontOption.length; i++) {
    fontOption[i].addEventListener("click", function (e) {

        for (let j = 0; j < fontOption.length; j++) {
            fontOption[j].classList.remove("active");
        }

        document.body.classList.remove(
            "font-alexandria",
            "font-tajawal",
            "font-cairo"
        );

        const selectedFont = e.currentTarget.dataset.font;

        document.body.classList.add(`font-${selectedFont}`);
        e.currentTarget.classList.add("active");
        localStorage.setItem("font", selectedFont);
    });
}
const savedfont = localStorage.getItem("font");

if (savedfont) {
    document.body.classList.remove(
        "font-alexandria",
        "font-tajawal",
        "font-cairo"
    );
    document.body.classList.add(`font-${savedfont}`);
    for (let i = 0; i < fontOption.length; i++) {
    if (fontOption[i].dataset.font === savedfont) {
        fontOption[i].classList.add("active");
    }
}

}

const scrollToTop=document.getElementById("scroll-to-top")
scrollToTop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
})
})
function showbtn(){

    if(this.window.scrollY>200){
       scrollToTop.classList.remove("hidden")
        scrollToTop.classList.add("block")
    }
    else{
      scrollToTop.classList.remove("block")
        scrollToTop.classList.add("hidden")

    }
}
showbtn()
window.addEventListener("scroll",function(){
    showbtn()
})
const pItem = document.querySelectorAll(".portfolio-item");
const pFilter = document.querySelectorAll(".portfolio-filter");

for (var i = 0; i < pFilter.length; i++) {
    pFilter[i].addEventListener("click", function (e) {
        const filter = e.currentTarget.dataset.filter;
 for (let r = 0; r < pFilter.length; r++) {
            pFilter[r].classList.remove("active");
        }

        e.currentTarget.classList.add("active");

        for (var j = 0; j < pItem.length; j++) {
            if (filter === "all" || pItem[j].dataset.category === filter) {
                pItem[j].style.display = "block";
            } else {
                pItem[j].style.display = "none";

            }
        }
       
    });
}

const cards=document.querySelectorAll(".testimonial-card")
const prevTestimonial=document.querySelector("#prev-testimonial")
const nextTestimonial=document.querySelector("#next-testimonial")
let curruntIndex=0;
function getVcard(){
    if(window.innerWidth >=1024) return 3
    if(window.innerWidth >=640) return 2
    return 1
}
let visibleCard=getVcard();
let maxIndex=cards.length-visibleCard;
function slideBar(){
    cards[curruntIndex].scrollIntoView({behavior:"smooth",inline:"start"})
    updateIndicators()
}
nextTestimonial.addEventListener("click",function(){
    if(curruntIndex<maxIndex){
    curruntIndex++
    
    }else{
curruntIndex=0;
    }
    slideBar()

})
prevTestimonial.addEventListener("click",function(){
    if(curruntIndex>0){
    curruntIndex--
    }else{
        curruntIndex=maxIndex
    }
    slideBar()
})

const indecator = document.querySelectorAll(".carousel-indicator");

for (var i = 0; i < indecator.length; i++) {
    indecator[i].addEventListener("click", function (btn) {
        curruntIndex = Number(btn.currentTarget.dataset.index);
        slideBar();
    });
}

function updateIndicators() {
    for (let i = 0; i < indecator.length; i++) {
        indecator[i].classList.remove("active");
    }
    indecator[curruntIndex].classList.add("active");
}
