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

let button7 = document.querySelector("input[name=customRadio7]");
let setCheck7;

    button7.onclick = function(){
        if(setCheck7 != this){
             setCheck7 = this;
             let itemcost = `${choices[3].tomato}`
             console.log("This is the prices " + itemcost )
             sendToAdd(itemcost);
        }else{
            this.checked = false;
            setCheck7 = null;
            let itemcost = `${choices[3].tomato}`
            sendToRem(itemcost);
            console.log("This is total price " + itemcost)
    };
}

let button8 = document.querySelector("input[name=customRadio8]");
let setCheck8;

    button8.onclick = function(){
        if(setCheck8 != this){
             setCheck8 = this;
             let itemcost = `${choices[3].lettus}`
             console.log("This is the prices " + itemcost )
             sendToAdd(itemcost);
        }else{
            this.checked = false;
            setCheck8 = null;
            let itemcost = `${choices[3].lettus}`
            sendToRem(itemcost);
            console.log("This is total price " + itemcost)
    };
}