import { placeImage, makeCoordinateObj } from './placeImage.js';
import { placeCursor, removeCursor } from './placeCursor.js';
import { animateCity } from './animateCity.js';





//==Place the image elements for the user interface==\\
//--------------------------------------------------------------------------------
// coordinate configuration
const cityCoordinateArray = [];
const coordinates0 = makeCoordinateObj(
  [593, 408], 
  [607, 456], 
  [630, 439], 
  [580, 330],
  [127, 56]);
cityCoordinateArray[0] = coordinates0;
//console.debug('cityCoordinateArray', cityCoordinateArray[0]);
//utility function for url handling

cityCoordinateArray.forEach((value, index) => {
  placeImage(index, value);
});
//--------------------------------------------------------------------------------
//==Utility function for creating link names==\\
function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}
//--------------------------------------------------------------------------------
//==LINK CONFIG==\\
const links = [];
const linkNames = [];
const setLink = (selectedCityId) => {
  const labelTextEnglish = document.getElementById('label' + selectedCityId + '-english');
  if(!links[selectedCityId]){
    links[selectedCityId] = window.localStorage.getItem('link' + selectedCityId) || 'https://www.youtube.com/'; 
    linkNames[selectedCityId] = psl.get(extractHostname(links[selectedCityId]));
  }  
  labelTextEnglish.innerHTML = linkNames[selectedCityId];
}
//length of coordinate array is the number of links
for(let i = 0; i < cityCoordinateArray.length; i++){
  setLink(i);
}
//--------------------------------------------------------------------------------
//==INTERFACE==\\
//make listeners for hover over event
export const userInterface = () => {
  
  // variables
  // This state is 1 if any city is hovered
  let hoveredState = 0;
  
  
  /**
   *  @desc when the image or the label of one of the option is hovered over set
   *  all the nesisary values in html and javascript to give it the selection effect.
   *  @param string $cityId - The name of the selected city as originally 
   *  labled in the game.
   *  @return function - The listener function
   */
  const makeMouseOverListener = (cityId, labelCoordinates, labelDimensions) => {
    const label = document.getElementById('label' + cityId + '-image-bg');
    //console.debug('labelDimensions in mouse over listener make func', labelDimensions);

    const listener = () => {
      //console.debug('labelDimensions in mouse over listener func', labelDimensions);
      if(hoveredState == 1){
        return;
      }
      label.setAttribute('href', './images/svg/' + cityId + '_label_alt.svg');
      label.classList.remove('label-content-unselected');
      label.classList.add('label-content-selected');
  
      const kanji = document.getElementById('label' + cityId + '-kanji');
      const english = document.getElementById('label' + cityId + '-english');
  
      kanji.setAttribute('fill', '#09fffbff');
      kanji.classList.remove('label-content-unselected');
      kanji.classList.add('label-content-selected');
      english.setAttribute('fill', '#09fffbff');
      english.classList.remove('label-content-unselected');
      english.classList.add('label-content-selected');
  
      animateCity(cityId);
      placeCursor(labelCoordinates[0],
        labelCoordinates[1],
        labelDimensions[0],
        labelDimensions[1]);
  
      hoveredState = 1;
      return;
    }
  
    return(listener);
  }
  
  const makeMouseOutListener = (cityId) => {
    const label = document.getElementById('label' + cityId + '-image-bg');
    const listener = () => {
      label.setAttribute('href', './images/svg/' + cityId + '_label.svg');
      label.classList.remove('label-content-selected');
      label.classList.add('label-content-unselected');
  
      const kanji = document.getElementById('label' + cityId + '-kanji');
      const english = document.getElementById('label' + cityId + '-english');
  
      kanji.setAttribute('fill', 'white');
      kanji.classList.remove('label-content-selected');
      kanji.classList.add('label-content-unselected');
      english.setAttribute('fill', 'black');
      english.classList.remove('label-content-selected');
      english.classList.add('label-content-unselected');
  
      removeCursor();
  
      hoveredState = 0;
      return;
    }
  
    return(listener);
  }
  
  const makeClickListener = (cityId) => {
    const listener = () => {
      // links is a global variable at the top of this module
      window.location.href = links[0];
      return;
    }
    return(listener);
  }

  /**
   *  @desc create an object that contains the url and name of a ling
   *        and set the local storage to contained newly entered url
   *  @param string $inputUrl - The url inputed by the user
   *  @return Object - An object containg two strings. the url for linking
   *  and the name of the url for display.
   *  { url: http://treverhibbs.com, urlName: treverhibbs.com }
   */
  const makeLinkObj = (inputUrl, cityId) => {
    const localSorage = window.localStorage; 
    localSorage.setItem('link' + cityId, inputUrl);
    let urlName = psl.get(extractHostname(inputUrl)) 
    if(urlName.length > 15){
      urlName = urlName.slice(0,12) + '...';
    }
    return( { url: inputUrl, urlName: urlName } );
  }
  const makeContextmenuListener = (cityId) => {
    const listener = (e) => {
      e.preventDefault();
      let result = window.prompt('enter vawid wink UwU');
      if(result){
        if(!result.startsWith('http://') || !result.startsWith('https://')){
          result = 'http://' + result;
        }
        const LinkObj = makeLinkObj(result, cityId); 
        //console.debug("url to set", LinkObj.url);
        links[cityId] = LinkObj.url; 
        linkNames[cityId] = LinkObj.urlName;
        setLink(cityId);
      }
      return;
    }
    return(listener);
  }
  
  //console.debug('cityCoordinateArray', JSON.parse(JSON.stringify(cityCoordinateArray)));
  cityCoordinateArray.forEach((cityCoordinateOjb, cityId) => {
    const label = document.getElementById('label' + cityId + '-image-bg');
    label.addEventListener('mouseover', makeMouseOverListener(cityId, cityCoordinateOjb.labelCoordinates, cityCoordinateOjb.labelDimensions));
    label.addEventListener('mouseout', makeMouseOutListener(cityId));
    label.addEventListener('contextmenu', makeContextmenuListener(cityId));
    label.addEventListener('click', makeClickListener(cityId));
  });
}
