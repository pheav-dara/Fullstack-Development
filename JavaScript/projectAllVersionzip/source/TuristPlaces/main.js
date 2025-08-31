import { touristPlaces } from "./data.js";
import { displayButton, displayPlace } from "./display.js";
import searchFilter from "./searchFilter.js";

document.addEventListener("DOMContentLoaded", () =>{
  displayPlace(touristPlaces);
  displayButton();
  searchFilter();
})
