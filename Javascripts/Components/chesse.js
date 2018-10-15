import {choices, totalCost} from '../Components/sandComponents.js'

let changeCost =(cost) => {
};

const sendToAdd = (amount) => {
    totalCost.push(amount);
    console.log(totalCost);
};

const sendToRem = (amount) => {
    for(var i = totalCost.length - 1; i >= 0; i--) {
        if(totalCost[i] === amount) {
           delete totalCost[i];
        }
        }
    };

let button3 = document.querySelector("input[name=customRadio3]");
let setCheck3;

    button3.onclick = function(){
        if(setCheck3 != this){
             setCheck3 = this;
             let itemcost = `${choices[1].cheddar}`
             sendToAdd(itemcost);
        }else{
            this.checked = false;
            setCheck3 = null;
            let itemcost = `${choices[1].cheddar}`
            sendToRem(itemcost);
    };
}

let button4 = document.querySelector("input[name=customRadio4]");
let setCheck4;

    button4.onclick = function(){
        if(setCheck4 != this){
             setCheck4 = this;
             let itemcost = `${choices[1].bleu}`
             sendToAdd(itemcost);
        }else{
            this.checked = false;
            setCheck4 = null;
            let itemcost = `${choices[1].bleu}`
            sendToRem(itemcost);
    };
}
