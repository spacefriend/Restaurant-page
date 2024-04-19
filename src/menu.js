function setMenu (newDiv){
    const homeH1 = document.createElement('h1')
    const homeContent = document.createElement('p');

    homeH1.innerHTML = "Welcome to Menu";
    newDiv.appendChild(homeH1);
    
    homeContent.innerHTML = "This is the restaurant's Menu! Welcome!";
    newDiv.appendChild(homeContent);
}
export {setMenu};