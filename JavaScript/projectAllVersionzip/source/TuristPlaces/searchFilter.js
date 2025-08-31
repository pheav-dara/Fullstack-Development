import {touristPlaces} from "./data.js"
import { displayPlace } from "./display.js";
export default function (){
  const input = document.querySelector("input");
  input.addEventListener("keyup", ()=> {
    const inputValue = input.value.toLowerCase();
    const filterArray = touristPlaces.filter(item => {
      return item.title.toLowerCase().includes(inputValue);
    })
    displayPlace(filterArray)
  })
}