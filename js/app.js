let main = document.querySelector('main');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let h1 = document.createElement('h1');
h1.textContent = 'Landing Page';

//navigation
let navItem;
let aItem;
let nav = document.createElement('ul');
for (let i = 1; i<=4; i++){
    navItem = document.createElement('li');
    navItem.classList.add(`navsec${i}`);
    navItem.id = `navsec${i}`;
    navItem.textContent = `Section ${i}`;
    nav.appendChild(navItem);
}
header.appendChild(h1);
header.appendChild(nav);

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
    } else if (position.top < 3000 && position.top >= 2000) {
        document.getElementById('navsec1').style.cssText = "";
        document.getElementById('navsec2').style.cssText = "background-color:black;color:white;";
        document.getElementById('navsec3').style.cssText = "";
        document.getElementById('navsec4').style.cssText = "";
    } else if (position.top < 2000 && position.top >= 1000) {
        document.getElementById('navsec1').style.cssText = "";
        document.getElementById('navsec2').style.cssText = "";
        document.getElementById('navsec3').style.cssText = "background-color:black;color:white;";
        document.getElementById('navsec4').style.cssText = "";
    } else if (position.top < 1000) {
        document.getElementById('navsec1').style.cssText = "";
        document.getElementById('navsec2').style.cssText = "";
        document.getElementById('navsec3').style.cssText = "";
        document.getElementById('navsec4').style.cssText = "background-color:black;color:white;";
    } 
})

//scroll up arrow
document.querySelector('body').insertAdjacentHTML('beforebegin','<img src="/img/goUp.png" alt="scroll up arrow" id="arrow">');
let arrow = document.querySelector('#arrow');
arrow.addEventListener('click',()=>{
    document.querySelector('.section1').scrollIntoView({
        behavior: "smooth", block: "start", inline: "nearest"
    });
}) //click to be back to top

//hide the arrow if at the top of the page
document.addEventListener('scroll', ()=>{
    let position = document.querySelector('.section4').getBoundingClientRect();
    if (position.top <= 3000 && position.top>=2700) {
        arrow.style.cssText = 'display:none;';
    } else {
        arrow.style.cssText = '';
    }
})
