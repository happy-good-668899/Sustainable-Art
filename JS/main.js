let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



menuIcon.onclick = () => {
    // menuIcon.classList.toggle('fa-xmark');
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
    navbar.classList.toggle('active');
}

//CODE FOR CLOSING NAV MENU ON SCROLL --> DON'T LIKE IT SO NOT USING
// let sections=document.querySelectorAll('section');
// let navLinks=document.querySelectorAll('header nav a');
//
// window.onscroll = () => {
//     sections.forEach(sec =>{
//         let top=window.scrollY;
//         let offset=sec.offsetTop-150;
//         let height=sec.offsetHeight;
//         let id=sec.getAttribute('id');
//
//         if(top >= offset && top <offset+height){
//             navLinks.forEach.apply(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href"=' + id + ']').classList.add('active');
//             });
//         };
//     });
//
//     let header=document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);
//
//     menuIcon.classList.remove('fa-xmark');
//     menuIcon.classList.add('fa-bars');
//     navbar.classList.remove('active');
// };