import {setHome} from './home.js';
import {setMenu} from './menu.js';
import {setAbout} from './about.js';

const homeButton = document.getElementById("btn-home");
const menuButton = document.getElementById("btn-menu");
const aboutButton = document.getElementById("btn-about");

const content = document.getElementById("content");
const newDiv = document.createElement("div");

homeButton.addEventListener('click', function() {setContent('home')}, false);
menuButton.addEventListener('click', function() {setContent('menu')}, false);
aboutButton.addEventListener('click', function() {setContent('about')}, false);

function setContent (newContent){
    removeChildren();
    if (newContent == 'home'){
        setHome(newDiv);
    }
    else if (newContent == 'menu'){
        setMenu(newDiv);
    }
    else if (newContent == 'about'){
        setAbout(newDiv);
    }else{
        console.log('???')
    }
    content.appendChild(newDiv);

}

function removeChildren (){
    while (newDiv.firstChild){
        newDiv.removeChild(newDiv.lastChild);
    }

}


