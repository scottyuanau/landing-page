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
    aItem = document.createElement('a');
    aItem.textContent = `Section ${i}`;
    aItem.setAttribute('href',`#section${i}`);
    navItem.appendChild(aItem);
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

