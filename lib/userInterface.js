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
let aoyamaitchomeLink = window.localStorage.getItem('aoyamaitchomeLink') || 'https://www.youtube.com/';
let aoyamaitchomeLinkName = psl.get(extractHostname(aoyamaitchomeLink));


//==SET LINK TEXT==\\
const setLinkText = (selectedCity, cityLinkName) => {
  const cityEnglish = document.getElementById(selectedCity + '-label-english');
  cityEnglish.innerHTML = cityLinkName;
}
setLinkText('aoyamaitchome', aoyamaitchomeLinkName);


//==INTERFACE==\\
//make listeners for hover over event
export const userInterface = () => {
  const aoyamaitchomeLabel = document.getElementById('aoyamaitchome-label-bg');
  


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
      aoyamaitchomeLabel.setAttribute('href', './images/svg/' + selectionName + '_label_alt.svg');
      aoyamaitchomeLabel.setAttribute('class', 'label-content-selected');
  
      const aoyamaitchomeKanji = document.getElementById('aoyamaitchome-label-kanji');
      const aoyamaitchomeEnglish = document.getElementById('aoyamaitchome-label-english');
  
      aoyamaitchomeKanji.setAttribute('fill', '#09fffbff');
      aoyamaitchomeKanji.setAttribute('class', 'label-content-selected label-text');
      aoyamaitchomeEnglish.setAttribute('fill', '#09fffbff');
      aoyamaitchomeEnglish.setAttribute('class', 'label-content-selected label-text');
  
      animateCity('aoyamaitchome');
      placeCursor(593, 408);
  
      hoveredState = 1;
      return;
    }
  
    return(listener);
  }
  
  const makeMouseOutListener = (selectionName) => {
    const listener = () => {
      aoyamaitchomeLabel.setAttribute('href', './images/svg/' + selectionName + '_label.svg');
      aoyamaitchomeLabel.setAttribute('class', 'label-content-unselected');
  
      const aoyamaitchomeKanji = document.getElementById('aoyamaitchome-label-kanji');
      const aoyamaitchomeEnglish = document.getElementById('aoyamaitchome-label-english');
  
      aoyamaitchomeKanji.setAttribute('fill', 'white');
      aoyamaitchomeKanji.setAttribute('class', 'label-content-unselected label-text');
      aoyamaitchomeEnglish.setAttribute('fill', 'black');
      aoyamaitchomeEnglish.setAttribute('class', 'label-content-unselected label-text');
  
      removeCursor();
  
      hoveredState = 0;
      return;
    }
  
    return(listener);
  }
  
  const makeClickListener = (selectionName) => {
    const listener = () => {
      switch (selectionName){
        case 'aoyamaitchome' :
          window.location.href = aoyamaitchomeLink;
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
    if(urlName.length > 11){
      urlName = urlName.slice(0,8) + '...';
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
          case 'aoyamaitchome' :
            const LinkObj = makeLinkObj(result, selectionName); 
            console.debug("url to set", LinkObj.url);
            aoyamaitchomeLink = LinkObj.url; 
            aoyamaitchomeLinkName = LinkObj.urlName;
            setLinkText(selectionName, aoyamaitchomeLinkName);
            break;
        }
      }
      return;
    }
    return(listener);
  }
  
  aoyamaitchomeLabel.addEventListener('mouseover', makeMouseOverListener('aoyamaitchome'));
  aoyamaitchomeLabel.addEventListener('mouseout', makeMouseOutListener('aoyamaitchome'));
  aoyamaitchomeLabel.addEventListener('contextmenu', makeContextmenuListener('aoyamaitchome'));
  aoyamaitchomeLabel.addEventListener('click', makeClickListener('aoyamaitchome'));
  //aoyamaitchomeImage.addL
  //placeCursor(593,408);
}
