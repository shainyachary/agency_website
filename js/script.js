let header = document.querySelector('header');

window.addEventListener('scroll',() => {
    header.classList.toggle('active',window.scrollY>0);
})

//navbar
let menu = document.querySelector(".menu_btn");
let navbar = document.querySelector(".navigation");
let nav_items = document.querySelector('.navigation_item a')

menu.addEventListener('click',function() {
    navbar.classList.toggle('active');

    nav_items.addEventListener('click',()=>{
        navbar.classList.remove('active')
    })
});
//slider
let btns = document.querySelectorAll('.nav_btn');
let slides = document.querySelectorAll('.img_slide');
let contents = document.querySelectorAll('.contentBx');

let slideNav = function(manual){
    
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    contents.forEach((content) => {
        content.classList.remove('active');
    });

    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
    contents[manual].classList.add('active');
}

btns.forEach((btn,i) => {
    btn.addEventListener('click', () => {
        slideNav(i)
    })
})



//for accordion

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item,index) =>{
    
    let text = item.querySelector('.accordion_name');
    text.addEventListener('click',() =>{

        item.classList.toggle('open')

        let content = item.querySelector('.content');
        if(item.classList.contains('open')){
            content.style.height = `${content.scrollHeight}px`;
            item.querySelector('i').classList.replace("fa-plus","fa-minus");
        }
        else{
            content.style.height = "0px";
            item.querySelector('i').classList.replace("fa-minus","fa-plus");
        }
        removeOpen(index);
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2,index2) => {
        if(index1 != index2){
            item2.classList.remove("open");
            let cont = item2.querySelector('.content');
            cont.style.height = '0px';
            item2.querySelector('i').classList.replace("fa-minus","fa-plus");
        }
    })
}


