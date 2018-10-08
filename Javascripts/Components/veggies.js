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

let button9 = document.querySelector("input[name=customRadio9]");
let setCheck9;

    button9.onclick = function(){
        if(setCheck9 != this){
             setCheck9 = this;
             let itemcost = `${choices[4].chicken}`
             console.log("This is the prices " + itemcost )
             sendToAdd(itemcost);
        }else{
            this.checked = false;
            setCheck9 = null;
            let itemcost = `${choices[4].chicken}`
            sendToRem(itemcost);
            console.log("This is total price " + itemcost)
    };
}

let button10 = document.querySelector("input[name=customRadio10]");
let setCheck10;

    button10.onclick = function(){
        if(setCheck10 != this){
             setCheck10 = this;
             let itemcost = `${choices[4].ham}`
             console.log("This is the prices " + itemcost )
             sendToAdd(itemcost);
        }else{
            this.checked = false;
            setCheck10 = null;
            let itemcost = `${choices[4].ham}`
            sendToRem(itemcost);
            console.log("This is total price " + itemcost)
    };
}