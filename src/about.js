function setAbout (newDiv){
    const homeH1 = document.createElement('h1')
    const homeContent = document.createElement('p');

    homeH1.innerHTML = "Welcome to About";
    newDiv.appendChild(homeH1);
    
    homeContent.innerHTML = "This is the restaurant's about page! Welcome!";
    newDiv.appendChild(homeContent);

}

export {setAbout};