import { printToDom } from "../Helpers/util.js";

let totalCost = [];

let choices = [];

const setCharacters = (newArray) => {
  console.log('setCharacters');  
  choices = newArray;
  console.log(choices);
  console.log(newArray);
  };
      

  export{setCharacters,choices, totalCost}

// const detailsBuilder = (extrasArray) => {
//   let domString = '';
//   let i = 0;

//   extrasArray.forEach((choicez) => { //this turns pets/getpetz into a new array character
//      i++
//      domString +=   `<div class="wrapping d-flex justify-content-between ml-5 mr-5">`
//      domString +=   `<div class="card" style="width: 18rem;">`
//      domString +=       `<div class="card-body">`
//      domString +=   `<h5 class="card-title">BREAD</h5>`
//      domString +=     `<p class="card-text">Choose One</p></div>`
//      domString +=   `<div class="custom-control custom-radio">`
//      domString +=       `<input type="checkbox" id="customRadio1" value="" name="customRadio1" class="custom-control-input">`
//      domString +=       `<label class="custom-control-label" for="customRadio1">White $.09</label>`
//      domString +=   `</div>`
//      domString +=   `<div class="custom-control custom-radio">`
//      domString +=       `<input type="checkbox" id="customRadio2" name="customRadio2" class="custom-control-input">`
//      domString +=   `<label class="custom-control-label" for="customRadio2">Wheat ${choicez[i].wheat}</label>`
//      domString +=   `</div></div>` 
//   });
//   printToDom(domString,"printMenu");
// };


