import { getCoordinates } from "./lib/getCoordinate.js";
import { userInterface } from "./lib/userInterface.js";
import { animateSearch } from "./lib/animateSearch.js";

// get coordinates tool for development
getCoordinates();

// only display the ui when the page is fully loaded
window.onload = (_) => {
  //start search animation
  animateSearch();

  const gridContainer = document.querySelector(".grid-container");
  gridContainer.classList.remove("hidden");
  const mapImage = document.querySelector(".map-image");
  mapImage.classList.remove("hidden");
};

//initialize interface
userInterface();
