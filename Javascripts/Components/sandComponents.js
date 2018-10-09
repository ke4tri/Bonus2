import { printToDom } from "../Helpers/util.js";

let totalCost = [];
let choices = [];

const setCharacters = (newArray) => {
  console.log('setCharacters');  
  choices = newArray;
  console.log(choices);
  console.log(newArray);
  };

  function addArrayOfNumbers(arrayOfNums){
    var sum = 0;
    for (var i = arrayOfNums.length; !!i--;){
    sum += arrayOfNums[i];
    console.log(sum);
    }
    printToDom(sum, "printSandAndPrice")
  };

  document.getElementById("priceButton").addEventListener("click", function(){
  let priceArray = [];
  for(let i=0;i<totalCost.length;i++){
    priceArray.push(Number(totalCost[i]))
  }
  console.log(priceArray);
  addArrayOfNumbers(priceArray)
});

  export{setCharacters, totalCost, choices}


