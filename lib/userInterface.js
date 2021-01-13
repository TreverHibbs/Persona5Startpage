import { placeImage, makeCoordinateObj } from './placeImage.js';
import { placeCursor, removeCursor } from './placeCursor.js';
import { animateCity } from './animateCity.js';





//==Place the image elements for the user interface==\\
//--------------------------------------------------------------------------------
// coordinate configuration
const cityCoordinateArray = [];

cityCoordinateArray[0] = makeCoordinateObj(
  [613.85, 423.45], 
  [681,476], 
  [680,457], 
  [601.934, 342.390],
  [119, 57],
  -3, -3,
  /* kanji */ '青山一丁目');
cityCoordinateArray[1] = makeCoordinateObj(
  [207.5263214111328,225.26315307617188], 
  [248,267], 
  [247,253],
  [202.4649200439453,169.95614624023438],
  [71,41],
  -3, -3,
  /* kanji */ '荻窪');
cityCoordinateArray[2] = makeCoordinateObj(
  /* label coordinates */ [406,265], 
  /* english coordinates */ [451,311], 
  /* kanji coordinates */ [453,297],
  /* city image coordinates */ [388,179],
  /* label Dimensions */ [94,45],
  /* kanji rotate */ 0,
  /* english rotate */ 0,
  /* kanji */ '新宿区');
cityCoordinateArray[3] = makeCoordinateObj(
  /* label coordinates */ [543,185], 
  /* english coordinates */ [582,230], 
  /* kanji coordinates */ [581,214],
  /* city image coordinates */ [548,132],
  /* label Dimensions */ [71,43],
  /* kanji rotate */ 3,
  /* english rotate */ 3,
  /* kanji */ '池袋');
cityCoordinateArray[4] = makeCoordinateObj(
  /* label coordinates */ [578,266], 
  /* english coordinates */ [622,311], 
  /* kanji coordinates */ [621,293],
  /* city image coordinates */ [576,215],
  /* label Dimensions */ [82,46],
  /* kanji rotate */ -4,
  /* english rotate */ -3,
  /* kanji */ '市ヶ谷');
cityCoordinateArray[5] = makeCoordinateObj(
  /* label coordinates */ [853,257], 
  /* english coordinates */ [901,299], 
  /* kanji coordinates */ [897,283],
  /* city image coordinates */ [843,198],
  /* label Dimensions */ [81,42],
  /* kanji rotate */ -6,
  /* english rotate */ -7,
  /* kanji */ '水道橋');
cityCoordinateArray[6] = makeCoordinateObj(
  /* label coordinates */ [907,180], 
  /* english coordinates */ [948,225], 
  /* kanji coordinates */ [946,209],
  /* city image coordinates */ [906,127],
  /* label Dimensions */ [70,47],
  /* kanji rotate */ -5,
  /* english rotate */ -5,
  /* kanji */ '上野');
cityCoordinateArray[7] = makeCoordinateObj(
  /* label coordinates */ [1018,259], 
  /* english coordinates */ [1071,315], 
  /* kanji coordinates */ [1071,295],
  /* city image coordinates */ [1004,192],
  /* label Dimensions */ [101,55],
  /* kanji rotate */ -7,
  /* english rotate */ -4,
  /* kanji */ '秋葉原');
cityCoordinateArray[8] = makeCoordinateObj(
  /* label coordinates */ [1098,161], 
  /* english coordinates */ [1146,208], 
  /* kanji coordinates */ [1146,191],
  /* city image coordinates */ [1080,33],
  /* label Dimensions */ [83,46],
  /* kanji rotate */ -2,
  /* english rotate */ -4,
  /* kanji */ '浅草');
cityCoordinateArray[9] = makeCoordinateObj(
  /* label coordinates */ [100,385], 
  /* english coordinates */ [155,432], 
  /* kanji coordinates */ [155,414],
  /* city image coordinates */ [103,335],
  /* label Dimensions */ [100,45],
  /* kanji rotate */ -4,
  /* english rotate */ -3,
  /* kanji */ '井の頭公園');
cityCoordinateArray[10] = makeCoordinateObj(
  /* label coordinates */ [253,343], 
  /* english coordinates */ [305,391], 
  /* kanji coordinates */ [306,373],
  /* city image coordinates */ [255,288],
  /* label Dimensions */ [92,49],
  /* kanji rotate */ -2,
  /* english rotate */ -3,
  /* kanji */ '明治神宮');
cityCoordinateArray[11] = makeCoordinateObj(
  /* label coordinates */ [380,353], 
  /* english coordinates */ [421,397], 
  /* kanji coordinates */ [421,381],
  /* city image coordinates */ [454,320],
  /* label Dimensions */ [74,38],
  /* kanji rotate */ -7,
  /* english rotate */ -6,
  /* kanji */ '原宿');
cityCoordinateArray[12] = makeCoordinateObj(
  /* label coordinates */ [456,457], 
  /* english coordinates */ [519,518], 
  /* kanji coordinates */ [519,498],
  /* city image coordinates */ [442,364],
  /* label Dimensions */ [113,56],
  /* kanji rotate */ -8,
  /* english rotate */ -6,
  /* kanji */ '原宿');
cityCoordinateArray[13] = makeCoordinateObj(
  /* label coordinates */ [754,361], 
  /* english coordinates */ [799,405], 
  /* kanji coordinates */ [798,390],
  /* city image coordinates */ [747,309],
  /* label Dimensions */ [92,52],
  /* kanji rotate */ -2,
  /* english rotate */ -1,
  /* kanji */ '永田町');
cityCoordinateArray[14] = makeCoordinateObj(
  /* label coordinates */ [819,430], 
  /* english coordinates */ [873,479], 
  /* kanji coordinates */ [871,458],
  /* city image coordinates */ [853,361],
  /* label Dimensions */ [96,58],
  /* kanji rotate */ -4,
  /* english rotate */ -5,
  /* kanji */ '赤坂見附駅');
cityCoordinateArray[15] = makeCoordinateObj(
  /* label coordinates */ [925,367], 
  /* english coordinates */ [974,411], 
  /* kanji coordinates */ [972,393],
  /* city image coordinates */ [931,305],
  /* label Dimensions */ [85,44],
  /* kanji rotate */ -2,
  /* english rotate */ -4,
  /* kanji */ '神保町');
cityCoordinateArray[16] = makeCoordinateObj(
  /* label coordinates */ [1072,342], 
  /* english coordinates */ [1115,387], 
  /* kanji coordinates */ [1115,370],
  /* city image coordinates */ [1149,303],
  /* label Dimensions */ [75,45],
  /* kanji rotate */ -5,
  /* english rotate */ -5,
  /* kanji */ '神田');
cityCoordinateArray[17] = makeCoordinateObj(
  /* label coordinates */ [1346,412], 
  /* english coordinates */ [1400,459], 
  /* kanji coordinates */ [1399,441],
  /* city image coordinates */ [1343,313],
  /* label Dimensions */ [92,47],
  /* kanji rotate */ -2,
  /* english rotate */ -4,
  /* kanji */ '舞浜');
cityCoordinateArray[18] = makeCoordinateObj(
  /* label coordinates */ [189,521], 
  /* english coordinates */ [271,579], 
  /* kanji coordinates */ [268,559],
  /* city image coordinates */ [185,434],
  /* label Dimensions */ [137,60],
  /* kanji rotate */ -7,
  /* english rotate */ -9,
  /* kanji */ '四軒茶屋');
cityCoordinateArray[19] = makeCoordinateObj(
  /* label coordinates */ [766,513], 
  /* english coordinates */ [825,565], 
  /* kanji coordinates */ [823,544],
  /* city image coordinates */ [763,429],
  /* label Dimensions */ [101,52],
  /* kanji rotate */ -2,
  /* english rotate */ -4,
  /* kanji */ '六本木');
cityCoordinateArray[20] = makeCoordinateObj(
  /* label coordinates */ [1080,491], 
  /* english coordinates */ [1123,542], 
  /* kanji coordinates */ [1126,527],
  /* city image coordinates */ [1078,434],
  /* label Dimensions */ [83,51],
  /* kanji rotate */ -2,
  /* english rotate */ -1,
  /* kanji */ '銀座');
cityCoordinateArray[21] = makeCoordinateObj(
  /* label coordinates */ [1240,571], 
  /* english coordinates */ [1286,619], 
  /* kanji coordinates */ [1285,600],
  /* city image coordinates */ [1234,503],
  /* label Dimensions */ [82,46],
  /* kanji rotate */ -2,
  /* english rotate */ -1,
  /* kanji */ '月島');
cityCoordinateArray[22] = makeCoordinateObj(
  /* label coordinates */ [53,704], 
  /* english coordinates */ [131,770], 
  /* kanji coordinates */ [135,743],
  /* city image coordinates */ [46,612],
  /* label Dimensions */ [152,65],
  /* kanji rotate */ -1,
  /* english rotate */ 3,
  /* kanji */ '横浜中華街');
cityCoordinateArray[23] = makeCoordinateObj(
  /* label coordinates */ [560,793], 
  /* english coordinates */ [633,852], 
  /* kanji coordinates */ [633,829],
  /* city image coordinates */ [423,834],
  /* label Dimensions */ [125,59],
  /* kanji rotate */ -1,
  /* english rotate */ 0,
  /* kanji */ '三浦海岸');
cityCoordinateArray[24] = makeCoordinateObj(
  /* label coordinates */ [1023,725], 
  /* english coordinates */ [1125,787], 
  /* kanji coordinates */ [1119,763],
  /* city image coordinates */ [1098,764],
  /* label Dimensions */ [171,69],
  /* kanji rotate */ -9,
  /* english rotate */ -8,
  /* kanji */ '国営ひたち海浜公園');


//console.debug('cityCoordinateArray', cityCoordinateArray[0]);
//utility function for url handling

//cityCoordinateArray.forEach((value, index) => {
//  placeImage(index, value);
//});
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
  const labelTextKanji = document.getElementById('label' + selectedCityId + '-kanji');
  if(!links[selectedCityId]){
    links[selectedCityId] = window.localStorage.getItem('link' + selectedCityId) || 'https://pbs.twimg.com/media/ErPLuifVcAA4pY5?format=jpg&name=4096x4096'; 
    linkNames[selectedCityId] = psl.get(extractHostname(links[selectedCityId]));
  }  
  //cut a websites domain short if it is two long.
  if(cityCoordinateArray[selectedCityId].labelDimensions[0] < 83){
    linkNames[selectedCityId] = linkNames[selectedCityId].slice(0,8) + '...';
  }
  labelTextKanji.innerHTML = cityCoordinateArray[selectedCityId].kanji;
  labelTextEnglish.innerHTML = linkNames[selectedCityId];
}
//length of coordinate array is the number of links
//for(let i = 0; i < cityCoordinateArray.length; i++){
//  setLink(i);
//}
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
    const labelAlt = document.getElementById('label' + cityId + '-image-bg-alt');
    //console.debug('labelDimensions in mouse over listener make func', labelDimensions);

    const listener = () => {
      //console.debug('labelDimensions in mouse over listener func', labelDimensions);
      if(hoveredState == 1){
        return;
      }
      label.classList.add('hidden');
      labelAlt.classList.remove('hidden');
  
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
    const labelAlt = document.getElementById('label' + cityId + '-image-bg-alt');
    const listener = () => {
      labelAlt.classList.add('hidden');
      label.classList.remove('hidden');
  
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
      window.location.href = links[cityId];
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
  //TODO make function that sets transform origin of city iamges with this selector
  const setCityImageTransformOrigin = (cityId) => {
    const cityImage = document.getElementById('city' + cityId + '-image');
    console.debug("cityImage width", cityImage.width);
    //const transformOriginX = cityImage.width/2;
    //cityImage.style.transformOrigin = '';
  }

  //console.debug('cityCoordinateArray', JSON.parse(JSON.stringify(cityCoordinateArray)));
  cityCoordinateArray.forEach((cityCoordinateOjb, cityId) => {
    const label = document.getElementById('label' + cityId + '-image-bg');
    const labelAlt = document.getElementById('label' + cityId + '-image-bg-alt');
    label.addEventListener('mouseover', makeMouseOverListener(cityId, cityCoordinateOjb.labelCoordinates, cityCoordinateOjb.labelDimensions));
    labelAlt.addEventListener('mouseout', makeMouseOutListener(cityId));
    labelAlt.addEventListener('contextmenu', makeContextmenuListener(cityId));
    labelAlt.addEventListener('click', makeClickListener(cityId));

    setLink(cityId);
  });
}
