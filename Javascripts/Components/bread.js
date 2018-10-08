import {add} from '../Helpers/util.js';
import {choices, totalCost} from '../Components/sandComponents.js'

let changeCost =(cost) => {
    console.log(totalCost);
};

const sendToAdd = (amount) => {
    totalCost.push(amount);
    console.log(totalCost);
};

const sendToRem = (amount) => {
    for(var i = totalCost.length - 1; i >= 0; i--) {
        if(totalCost[i] === amount) {
           delete totalCost[i];
           console.log(totalCost);
        }
        }
    };

let button1 = document.querySelector("input[name=customRadio1]");
let setCheck1;

    button1.onclick = function(){
        if(setCheck1 != this){
             setCheck1 = this;
             let itemcost = `${choices[0].white}`
             console.log("This is the prices " + itemcost )
             sendToAdd(itemcost);
        }else{
            this.checked = false;
            setCheck1 = null;
            let itemcost = `${choices[0].white}`
            sendToRem(itemcost);
            console.log("This is total price " + itemcost)
    };
}

let button2 = document.querySelector("input[name=customRadio2]");
let setCheck2;

    button2.onclick = function(){
        if(setCheck2 != this){
             setCheck2 = this;
             let itemcost = `${choices[0].wheat}`
             console.log("This is the prices " + itemcost )
             sendToAdd(itemcost);
        }else{
            this.checked = false;
            setCheck2 = null;
            let itemcost = `${choices[0].wheat}`
            sendToRem(itemcost);
            console.log("This is total price " + itemcost)
    };
}