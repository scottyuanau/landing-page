let main = document.querySelector('main');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let h1 = document.createElement('h1');
h1.textContent = 'Landing Page';

//navigation
let navItem;
let aItem;
let nav = document.createElement('ul');
nav.classList.add('mainnav');
for (let i = 1; i<=4; i++){
    navItem = document.createElement('li');
    navItem.classList.add(`navsec${i}`);
    navItem.id = `navsec${i}`;
    navItem.textContent = `Section ${i}`;
    nav.appendChild(navItem);
}
header.appendChild(h1);
header.appendChild(nav);

//mobile nav
let mobileNav = document.createElement('div');
let hiddenStatus = false;
mobileNav.classList.add('mobileNav');
mobileNav.id = 'mobileNav';
mobileNav.insertAdjacentHTML('afterbegin','<i class="fa-solid fa-bars"></i>');
document.querySelector('header').appendChild(mobileNav);
document.querySelector('#mobileNav').addEventListener('click',()=>{
    if (hiddenStatus == false) {
    document.querySelector('.mainnav').style.cssText = "visibility:visible;opacity:1;top:0%;transition: visibility 0.3s, opacity 0.3s, top 0.3s linear;"
    hiddenStatus = true;
    } else {
    document.querySelector('.mainnav').style.cssText = "visibility:none;opacity:0;top:-100%;transition: visibility 0.3s, opacity 0.3s, top 0.3s linear;"
    hiddenStatus = false;
    } 
})
//click empty area to collapse nav
document.querySelector('main').addEventListener('click',()=>{
    if (hiddenStatus == true) {
    document.querySelector('.mainnav').style.cssText = "visibility:none;opacity:0;top:-100%;transition: visibility 0.3s, opacity 0.3s, top 0.3s linear;"
    hiddenStatus = false;
    } 
})


//sections
let sectionItem;
let sectionHeader;
let sectionContent;
for(let i = 1; i<=4; i++) {
    sectionItem =  document.createElement('section');
    sectionHeader = document.createElement('h2');
    sectionContent = document.createElement('p');
    sectionHeader.textContent = `Section ${i} Title`;
    sectionContent.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus, repudiandae enim reprehenderit natus, ipsum corporis alias accusantium voluptatibus nobis provident aspernatur ratione illo incidunt tempora asperiores quidem! Blanditiis, at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus, repudiandae enim reprehenderit natus, ipsum corporis alias accusantium voluptatibus nobis provident aspernatur ratione illo incidunt tempora asperiores quidem! Blanditiis, at?';
    sectionItem.classList.add(`section${i}`);
    sectionItem.id = `section${i}`;
    sectionItem.appendChild(sectionHeader);
    sectionItem.appendChild(sectionContent);
    main.appendChild(sectionItem);
}

//scroll into view
for (let i = 1; i<=4; i++) {
    let secView = document.querySelector(`.navsec${i}`);
    secView.addEventListener('click',()=>{document.querySelector(`.section${i}`).scrollIntoView({
        behavior: "smooth", block: "start", inline: "nearest"
    })}); 
}

//detect activated section

document.addEventListener('scroll',()=>{
    let position = document.querySelector('.section4').getBoundingClientRect();
    if (position.top == 3000) {
        document.getElementById('navsec1').style.cssText = "background-color:black;color:white;";
        document.getElementById('navsec2').style.cssText = "";
        document.getElementById('navsec3').style.cssText = "";
        document.getElementById('navsec4').style.cssText = "";
    } else if (position.top == 2000) {
        document.getElementById('navsec1').style.cssText = "";
        document.getElementById('navsec2').style.cssText = "background-color:black;color:white;";
        document.getElementById('navsec3').style.cssText = "";
        document.getElementById('navsec4').style.cssText = "";
    } else if (position.top == 1000) {
        document.getElementById('navsec1').style.cssText = "";
        document.getElementById('navsec2').style.cssText = "";
        document.getElementById('navsec3').style.cssText = "background-color:black;color:white;";
        document.getElementById('navsec4').style.cssText = "";
    } else if (position.top == 0) {
        document.getElementById('navsec1').style.cssText = "";
        document.getElementById('navsec2').style.cssText = "";
        document.getElementById('navsec3').style.cssText = "";
        document.getElementById('navsec4').style.cssText = "background-color:black;color:white;";
    } 
})

//scroll up arrow
document.querySelector('body').insertAdjacentHTML('beforebegin','<div id="arrow"><i class="fa-solid fa-arrow-up"></i></div>');
let arrow = document.querySelector('#arrow');
arrow.addEventListener('click',()=>{
    document.querySelector('.section1').scrollIntoView({
        behavior: "smooth", block: "start", inline: "nearest"
    });
}) //click to be back to top

//hide the arrow if at the top of the page
document.addEventListener('scroll', ()=>{
    let position = document.querySelector('.section4').getBoundingClientRect();
    if (position.top <= 3000 && position.top>=2900) {
        arrow.style.cssText = 'visibility:none;top:100%;opacity:0%;transition: visibility 0.2s, opacity 0.2s, top 0.2s linear;';
    } else {
        arrow.style.cssText = 'visibility:visible;top:88%;opacity:50%;transition: visibility 0.2s, opacity 0.2s, top 0.2s linear;';
    }
})


//timeout for nav bar hidden
let timeout = undefined;

function resetTimer() {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(function() {
    document.querySelector('header').style.cssText = 'visibility: hidden; opacity: 0; transition: visibility 0.3s, opacity 0.3s linear;'
  }, 2000); 
}

window.onload = function() {
  //show nav bar when scrolling/clicking
  document.addEventListener('scroll',()=>{
  document.querySelector('header').style.cssText = 'visibility:visible;opacity:1;transition: visibility 0.3s, opacity 0.3s linear;';
  resetTimer();
})
  document.addEventListener('mousemove',()=>{
  document.querySelector('header').style.cssText = 'visibility:visible;opacity:1;transition: visibility 0.3s, opacity 0.3s linear;';
  resetTimer();
}) 
  // start the timer on window load
  resetTimer(); 
};




//backgroun moving circle

for (let i = 1; i <= 4; i++) {
    let circle = document.createElement('div');
    circle.classList.add('circle');
    circle.id = `circle${i}`;
    document.querySelector(`.section${i}`).insertAdjacentElement('afterend',circle);
}

