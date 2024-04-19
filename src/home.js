function setHome (newDiv){

    const homeH1 = document.createElement('h1')
    const homeContent = document.createElement('p');

    homeH1.innerHTML = "Welcome to Home";
    newDiv.appendChild(homeH1);
    
    homeContent.innerHTML = "This is the restaurant's homepage! Welcome!";
    newDiv.appendChild(homeContent);

}
export {setHome};