import {add} from '../Helpers/util.js';
import {choices, totalCost} from '../Components/sandComponents.js'


const sendToAdd = (amount) => {
    totalCost.push(amount);
    console.log("check totalCost array");
};

const button1 = document.querySelector("input[name=customRadio1]");
button1.addEventListener("click", function() {
        let itemcost = `${choices[0].white}`
        console.log("This is the prices " + itemcost )
        sendToAdd(itemcost);
  
});


