import {setCharacters} from '../Components/sandComponents.js'

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText); 
    setCharacters(data.choices);
    // detailsBuilder(getpetz());
}

function executeThisCodeIfXhrFails () {
    console.log("Shit don't do Good");
}

const getChoices = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error',executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/choices.json'); 
    myRequest.send();
};

export {getChoices};