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

let button5 = document.querySelector("input[name=customRadio5]");
let setCheck5;

    button5.onclick = function(){
        if(setCheck5 != this){
             setCheck5 = this;
             let itemcost = `${choices[2].mayo}`
             console.log("This is the prices " + itemcost )
             sendToAdd(itemcost);
        }else{
            this.checked = false;
            setCheck5 = null;
            let itemcost = `${choices[2].mayo}`
            sendToRem(itemcost);
            console.log("This is total price " + itemcost)
    };
}

let button6 = document.querySelector("input[name=customRadio6]");
let setCheck6;

    button6.onclick = function(){
        if(setCheck6 != this){
             setCheck6 = this;
             let itemcost = `${choices[2].mustard}`
             console.log("This is the prices " + itemcost )
             sendToAdd(itemcost);
        }else{
            this.checked = false;
            setCheck6 = null;
            let itemcost = `${choices[2].mustard}`
            sendToRem(itemcost);
            console.log("This is total price " + itemcost)
    };
}