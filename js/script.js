
// Left-Navbar
let next = document.querySelector('.arrow-right');
let prev = document.querySelector('.arrow-left');
next.addEventListener('click', function () {
    let active = document.querySelector('.active');
    active.classList.remove('active');
    console.log("kkk");


    if (active.nextElementSibling == null) {
        active.parentNode.children[0].classList.add('active')
    } else {
        active.nextElementSibling.classList.add('active');
    }
});
prev.addEventListener('click', function () {
    let active = document.querySelector('.active');
    active.classList.remove('active');

    if (active.previousElementSibling == null) {
        active.parentNode.children[active.parentNode.children.length - 1].classList.add('active')
    } else {
        active.previousElementSibling.classList.add('active');
    }
});
// -----------------------------------------------!






// Hamburger Close Preloader
$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".hamburger i").toggleClass("fa-bars").toggleClass("fa-times");
    })
    $('.preloader').delay(4000).fadeOut(1000);
});
// ------------------------------------------------!



// ------------------------------Left-Navbar
let arrowLeftIcon = document.querySelector('.left');
let arrowRightIcon = document.querySelector('.right ');
let menuText = document.querySelectorAll('.menu-text');
let sosialMedia = document.querySelector('.sosial-media');
let menu = document.querySelector('.menu');
let leftNavbar = document.querySelector('.left-navbar');
let sliderTextArrow = document.querySelector('.slider-text-arrow');
let rLogo = document.querySelector('.r-logo');
let arrowIconDiv=document.querySelector('.arrow-icon-left');

arrowLeftIcon.addEventListener('click', function () {
    leftNavbar.style.width = "150px";
    // 
    menu.style.position = "absolute";
    //    
    menu.style.top = "154px";
    //    

    menu.style.width = "70px";
    //
    menu.style.right="34px" ;
    // 

    [...menuText].forEach(sp => {
        sp.style.display = "none";
    });
    // 
    arrowIconDiv.style.position="absolute";
    arrowIconDiv.style.left="50px";
    //    
    sosialMedia.style.opacity = "0";
    //    
    sliderTextArrow.className=('slider-text-arrow-res');
    //    
    rLogo.style.marginTop="60px";
    // 
    arrowLeftIcon.style.right="53px";
    arrowLeftIcon.style.display="none";
    arrowRightIcon.style.display="block";
});

arrowRightIcon.addEventListener('click', function () {
    leftNavbar.style.width = "220px";
    rLogo.style.marginTop="20px";
    sliderTextArrow.className=('slider-text-arrow');
    menu.style.width = "110px";
    sosialMedia.style.opacity = "1";
    [...menuText].forEach(sp => {
        sp.style.display = "block";
    });
    arrowLeftIcon.style.display="block";
    arrowRightIcon.style.display="none";
    arrowIconDiv.style.position="absolute";
    arrowIconDiv.style.left="180px";
    menu.style.position = "static";
});
// ------------------------------------!


// Selected Home li
let liTag = document.querySelectorAll('.menu ul li');
for (let k = 0; k < liTag.length; k++) {

    liTag[k].addEventListener('click',function () {
        console.log("A");
        
        for (let i = 0; i < liTag.length; i++) {

            liTag[i].classList.remove('homeSelected');

        }

        this.classList.toggle('homeSelected');
    
    })      
}
// -----------------------------------------!


// About Page Js
let acc1=document.querySelector('#acc-1')
let acc2=document.querySelector('#acc-2')
let acc3=document.querySelector('#acc-3');


let accBody1=document.querySelector('#acc1')
let accBody2=document.querySelector('#acc2')
let accBody3=document.querySelector('#acc3')


acc1.onclick=function () {
    accBody2.classList.remove('activeAcc2')
    accBody3.classList.remove('activeAcc2')
    accBody1.classList.add('activeAcc2')
    acc1.classList.add('activeAcc')
    acc3.classList.remove('activeAcc')
    acc2.classList.remove('activeAcc')
    acc1.classList.add('activeAcc')
    
}
acc2.onclick=function () {
    accBody1.classList.remove('activeAcc2')
    accBody3.classList.remove('activeAcc2')
    accBody2.classList.add('activeAcc2')
    acc2.classList.add('activeAcc')
    acc1.classList.remove('activeAcc')
    acc3.classList.remove('activeAcc')
    acc2.classList.add('activeAcc')
}
acc3.onclick=function () {
    accBody1.classList.remove('activeAcc2')
    accBody2.classList.remove('activeAcc2')
    accBody3.classList.add('activeAcc2')
    acc1.classList.remove('activeAcc')
    acc2.classList.remove('activeAcc')
    acc3.classList.add('activeAcc')
}

// ------------------------------------!

let home=document.querySelector('.home');
let about=document.querySelector('.about');
let services=document.querySelector('.services')
let portofilio=document.querySelector('.portofilio');


let aboutSection=document.querySelector('.about-section');
let homeSection=document.querySelector('.home-section');
let servicesSection=document.querySelector('.services-section');
let portofilioSection=document.querySelector('.portofilio-section');

home.addEventListener('click',function () {
   aboutSection.style.display="none";
    homeSection.style.display="block";
    servicesSection.style.display="none";
    portofilioSection.style.display="none";
});
about.addEventListener('click',function () {
    homeSection.style.display="none";
    aboutSection.style.display="block";
    servicesSection.style.display="none";
    portofilioSection.style.display="none";
 });
 services.addEventListener('click',function () {
    homeSection.style.display="none";
    aboutSection.style.display="none";
    portofilioSection.style.display="none";
    servicesSection.style.display="block";
 });

 portofilio.addEventListener('click',function () {
    homeSection.style.display="none";
    aboutSection.style.display="none";
    portofilioSection.style.display="block";
    servicesSection.style.display="none";
 });












 let all=document.querySelector('.all');
let webDesign=document.querySelector('.webdesing');
let grapicDesign=document.querySelector('.grapicdesing');
let marketingDiv=document.querySelector('.marketingdesing');
// Picture Web
let webPicture1=document.querySelector('.web_picture1');
let webPicture2=document.querySelector('.web_picture2');
let webPicture3=document.querySelector('.web_picture3');

// Picture MArketing
let marketingPicture1=document.querySelector('.marketing_picture1');
let marketingPicture2=document.querySelector('.marketing_picture2');
let marketingPicture3=document.querySelector('.marketing_picture3');

// Picture Grapic
let graphicPicture1=document.querySelector('.graphic_picture1');
let graphicPicture2=document.querySelector('.graphic_picture2');
let graphicPicture3=document.querySelector('.graphic_picture3');

webDesign.addEventListener('click',function () {
    webPicture1.classList.remove('activeOpa')
    webPicture2.classList.remove('activeOpa')
    webPicture3.classList.remove('activeOpa')

    marketingPicture1.classList.add('activeOpa');
    marketingPicture2.classList.add('activeOpa');
    marketingPicture3.classList.add('activeOpa');

    graphicPicture1.classList.add('activeOpa')
    graphicPicture2.classList.add('activeOpa')
    graphicPicture3.classList.add('activeOpa')
});



grapicDesign.addEventListener('click',function () {
   
    marketingPicture1.classList.add('activeOpa');
    marketingPicture2.classList.add('activeOpa');
    marketingPicture3.classList.add('activeOpa');

    webPicture1.classList.add('activeOpa')
    webPicture2.classList.add('activeOpa')
    webPicture3.classList.add('activeOpa')
    
    graphicPicture1.classList.remove('activeOpa')
    graphicPicture2.classList.remove('activeOpa')
    graphicPicture3.classList.remove('activeOpa')
});


marketingDiv.addEventListener('click',function () {
   
    marketingPicture1.classList.remove('activeOpa');
    marketingPicture2.classList.remove('activeOpa');
    marketingPicture3.classList.remove('activeOpa');

    webPicture1.classList.add('activeOpa')
    webPicture2.classList.add('activeOpa')
    webPicture3.classList.add('activeOpa')
    
    graphicPicture1.classList.add('activeOpa')
    graphicPicture2.classList.add('activeOpa')
    graphicPicture3.classList.add   ('activeOpa')
});
all.addEventListener('click',function () {
   
    marketingPicture1.classList.remove('activeOpa');
    marketingPicture2.classList.remove('activeOpa');
    marketingPicture3.classList.remove('activeOpa');

    webPicture1.classList.remove('activeOpa')
    webPicture2.classList.remove('activeOpa')
    webPicture3.classList.remove('activeOpa')
    
    graphicPicture1.classList.remove('activeOpa')
    graphicPicture2.classList.remove('activeOpa')
    graphicPicture3.classList.remove('activeOpa')
});



let arrowPicture1=document.querySelector('.arrow-picture1');
let windowImage=document.querySelector('.modal');

arrowPicture1.addEventListener('click',function (e) {
    e.preventDefault();
    windowImage.style.display="block";
 
   
})


let arrowPicture2=document.querySelector('.arrow-picture2');
let windowImage2=document.querySelector('.modal2');

arrowPicture2.addEventListener('click',function (e) {
    e.preventDefault();
    windowImage2.style.display="block";
 
   
});

let arrowPicture3=document.querySelector('.arrow-picture3');
let windowImage3=document.querySelector('.modal3');

arrowPicture3.addEventListener('click',function (e) {
    e.preventDefault();
    windowImage3.style.display="block";
 
   
});
let arrowPicture4=document.querySelector('.arrow-picture4');
let windowImage4=document.querySelector('.modal4');

arrowPicture4.addEventListener('click',function (e) {
    e.preventDefault();
    windowImage4.style.display="block";
 
   
});
let arrowPicture5=document.querySelector('.arrow-picture5');
let windowImage5=document.querySelector('.modal5');

arrowPicture5.addEventListener('click',function (e) {
    e.preventDefault();
    windowImage5.style.display="block";
 
   
});
let arrowPicture6=document.querySelector('.arrow-picture6');
let windowImage6=document.querySelector('.modal6');

arrowPicture6.addEventListener('click',function (e) {
    e.preventDefault();
    windowImage6.style.display="block";
 
   
});
let arrowPicture7=document.querySelector('.arrow-picture7');
let windowImage7=document.querySelector('.modal7');

arrowPicture7.addEventListener('click',function (e) {
    e.preventDefault();
    windowImage7.style.display="block";
 
   
});

let arrowPicture8=document.querySelector('.arrow-picture8');
let windowImage8=document.querySelector('.modal8');

arrowPicture8.addEventListener('click',function (e) {
    e.preventDefault();
    windowImage8.style.display="block";
 
   
});

let arrowPicture9=document.querySelector('.arrow-picture9');
let windowImage9=document.querySelector('.modal9');

arrowPicture9.addEventListener('click',function (e) {
    e.preventDefault();
    windowImage9.style.display="block";
 
   
});

[...document.querySelectorAll('.close')].map(li=>{
    li.onclick=function () {
        this.parentElement.parentElement.style.display="none";
    }
    
});
   
   


let pTag = document.querySelectorAll('.portfolio-categories p');
for (let k = 0; k < pTag.length; k++) {

    pTag[k].onclick = function () {

        for (let i = 0; i < pTag.length; i++) {

            pTag[i].classList.remove('portofilioSelected');

        }

        this.classList.add('portofilioSelected');
    }
}