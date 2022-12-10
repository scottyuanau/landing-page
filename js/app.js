let main = document.querySelector('main');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let h1 = document.createElement('h1');
let sectionLength = document.querySelectorAll('section');

h1.textContent = 'Landing Page';

//navigation
let navItem;
let aItem;
let nav = document.createElement('ul');
nav.classList.add('mainnav');
for (let i = 1; i<=sectionLength.length; i++){
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
    document.querySelector('.mainnav').classList.add('show');
    document.querySelector('.mainnav').classList.remove('hide');
    hiddenStatus = true;
    } else {
    document.querySelector('.mainnav').classList.add('hide');
    document.querySelector('.mainnav').classList.remove('show');
    hiddenStatus = false;
    } 
})
//click empty area to collapse nav
document.querySelector('main').addEventListener('click',()=>{
    if (hiddenStatus == true) {
    document.querySelector('.mainnav').classList.add('hide');
    document.querySelector('.mainnav').classList.remove('show');
    hiddenStatus = false;
    } 
})



//scroll into view
//event delegation

let navbar = document.querySelector('.mainnav');
navbar.addEventListener('click', (event)=>{
    for (let i = 1;i<=sectionLength.length; i++) {
        if (event.target.className == `navsec${i}`) {
            document.querySelector(`.section${i}`).scrollIntoView({
                behavior: "smooth", block: "start", inline: "nearest"
            })
        }
    }
})



//detect activated section

document.addEventListener('scroll',()=>{
    let position = document.querySelector('.section4').getBoundingClientRect();
    if (position.top <= 3000 && position.top >= 2500) {
        document.getElementById('navsec1').classList.add('navhighlight');
        document.getElementById('navsec2').classList.remove('navhighlight');
        document.getElementById('navsec3').classList.remove('navhighlight');
        document.getElementById('navsec4').classList.remove('navhighlight');
    } else if (position.top < 2500 && position.top >= 1500) {
        document.getElementById('navsec1').classList.remove('navhighlight');
        document.getElementById('navsec2').classList.add('navhighlight');
        document.getElementById('navsec3').classList.remove('navhighlight');
        document.getElementById('navsec4').classList.remove('navhighlight');
    } else if (position.top < 1500 && position.top >= 500) {
        document.getElementById('navsec1').classList.remove('navhighlight');
        document.getElementById('navsec2').classList.remove('navhighlight');
        document.getElementById('navsec3').classList.add('navhighlight');
        document.getElementById('navsec4').classList.remove('navhighlight');
    } else if (position.top < 500) {
        document.getElementById('navsec1').classList.remove('navhighlight');
        document.getElementById('navsec2').classList.remove('navhighlight');
        document.getElementById('navsec3').classList.remove('navhighlight');
        document.getElementById('navsec4').classList.add('navhighlight');
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
        arrow.classList.add('hidearrow');
        arrow.classList.remove('showarrow');
    } else {
        arrow.classList.add('showarrow');
        arrow.classList.remove('hidearrow');
    }
})


//timeout for nav bar hidden
let timeout = undefined;

function resetTimer() {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(function() {
    document.querySelector('header').classList.add('hidenav');
    document.querySelector('header').classList.remove('shownav');
  }, 2000); 
}

window.onload = function() {
  //show nav bar when scrolling/clicking
  document.addEventListener('scroll',()=>{
  document.querySelector('header').classList.add('shownav');
  document.querySelector('header').classList.add('hidenav');
  resetTimer();
})
  document.addEventListener('mousemove',()=>{
    document.querySelector('header').classList.add('shownav');
  document.querySelector('header').classList.add('hidenav');
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

