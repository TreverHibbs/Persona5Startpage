//import { getCoordinates } from './lib/getCoordinate.js';
import { userInterface } from './lib/userInterface.js';





// get coordinates tool for development
//getCoordinates();

//svg namespace
const svgNs = 'http://www.w3.org/2000/svg' 

// only display the ui when the page is fully loaded
window.onload = (e) => {
  console.debug("onload");
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.classList.remove('hidden');
  const mapImage = document.querySelector('.map-image');
  mapImage.classList.remove('hidden');
}

//initialize interface
userInterface();
