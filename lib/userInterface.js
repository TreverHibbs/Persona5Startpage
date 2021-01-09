import { placeCursor, removeCursor } from './placeCursor.js';
import { animateCity } from './animateCity.js';





//utility function for url handling
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


//==LINK CONFIG==\\
let link0;
let link0Name;
export const setLink = (selectedCity) => {
  const labelTextEnglish = document.getElementById('label' + selectedCity + '-english');
  // for setting link text now
  let linkName = 'title2';
  switch (selectedCity) {
    case(0):
      link0  = window.localStorage.getItem('link0') || 'https://www.youtube.com/';
      link0Name = psl.get(extractHostname(link0));
      linkName = link0Name;
      break;
  }
  labelTextEnglish.innerHTML = linkName;
}


//==INTERFACE==\\
//make listeners for hover over event
export const userInterface = () => {
  const Label0 = document.getElementById('0-bg');
  


  // variables
  // This state is 1 if any city is hovered
  let hoveredState = 0;
  
  
  /**
   *  @desc when the image or the label of one of the option is hovered over set
   *  all the nesisary values in html and javascript to give it the selection effect.
   *  @param string $selectionName - The name of the selected city as originally 
   *  labled in the game.
   *  @return function - The listener function
   */
  const makeMouseOverListener = (selectionName) => {
    const listener = () => {
      if(hoveredState == 1){
        return;
      }
      Label0.setAttribute('href', './images/svg/' + selectionName + '_label_alt.svg');
      Label0.classList.remove('label-content-unselected');
      Label0.classList.add('label-content-selected');
  
      const kanji0 = document.getElementById('label0-kanji');
      const english0 = document.getElementById('label0-english');
  
      kanji0.setAttribute('fill', '#09fffbff');
      kanji0.classList.remove('label-content-unselected');
      kanji0.classList.add('label-content-selected');
      english0.setAttribute('fill', '#09fffbff');
      english0.classList.remove('label-content-unselected');
      english0.classList.add('label-content-selected');
  
      animateCity('0');
      placeCursor(593, 408);
  
      hoveredState = 1;
      return;
    }
  
    return(listener);
  }
  
  const makeMouseOutListener = (selectionName) => {
    const listener = () => {
      Label0.setAttribute('href', './images/svg/' + selectionName + '_label.svg');
      Label0.classList.remove('label-content-selected');
      Label0.classList.add('label-content-unselected');
  
      const kanji0 = document.getElementById('label0-kanji');
      const english0 = document.getElementById('label0-english');
  
      kanji0.setAttribute('fill', 'white');
      kanji0.classList.remove('label-content-selected');
      kanji0.classList.add('label-content-unselected');
      english0.setAttribute('fill', 'black');
      english0.classList.remove('label-content-selected');
      english0.classList.add('label-content-unselected');
  
      removeCursor();
  
      hoveredState = 0;
      return;
    }
  
    return(listener);
  }
  
  const makeClickListener = (selectionName) => {
    const listener = () => {
      switch (selectionName){
        case '0' :
          window.location.href = link0;
          break;
      }
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
  const makeLinkObj = (inputUrl, cityName) => {
    const localSorage = window.localStorage; 
    localSorage.setItem(cityName + 'Link', inputUrl);
    let urlName = psl.get(extractHostname(inputUrl)) 
    if(urlName.length > 15){
      urlName = urlName.slice(0,12) + '...';
    }
    return( { url: inputUrl, urlName: urlName } );
  }
  const makeContextmenuListener = (selectionName) => {
    const listener = (e) => {
      e.preventDefault();
      let result = window.prompt('enter vawid wink UwU');
      if(result){
        if(!result.startsWith('http://') || !result.startsWith('https://')){
          result = 'http://' + result;
        }
        switch (selectionName){
          case '0' :
            const LinkObj = makeLinkObj(result, selectionName); 
            console.debug("url to set", LinkObj.url);
            link0 = LinkObj.url; 
            link0Name = LinkObj.urlName;
            setLinkText(selectionName, link0Name);
            break;
        }
      }
      return;
    }
    return(listener);
  }
  
  Label0.addEventListener('mouseover', makeMouseOverListener('0'));
  Label0.addEventListener('mouseout', makeMouseOutListener('0'));
  Label0.addEventListener('contextmenu', makeContextmenuListener('0'));
  Label0.addEventListener('click', makeClickListener('0'));
}
