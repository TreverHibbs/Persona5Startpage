import { getCoordinates } from './lib/getCoordinate.js';
//import { setLink, userInterface } from './lib/userInterface.js';





// get coordinates tool for development
//getCoordinates();

//svg namespace
const svgNs = 'http://www.w3.org/2000/svg' 

//initialize place images
//Coordinate object deffinition
const makeCoordinateObj = (labelCoordinates, englishCoordinates, kanjiCoordinates, cityImageCoordinates) => {
  return({ labelCoordinates: labelCoordinates,
           englishCoordinates: englishCoordinates,
           kanjiCoordinates: kanjiCoordinates,
           cityImageCoordinates: cityImageCoordinates });
}

const coordinates0 = makeCoordinateObj(
  [593, 408], 
  [607, 456], 
  [630, 439], 
  [580, 330]);


//TODO function to set all labels and city images to position
/**
 *  @desc - place label where it needs to go give its coordinate config
 *          also place city image where it needs to be given its similar config
 *  @param Object $coordinates - The coordinates of the label and its text
 *                                    { labelCoordinates: [x,y], 
 *                                      englishCoordinates: [x,y], 
 *                                      kanjiCoordinates: [x,y],
 *                                      cityImageCoordinates: [x,y]}
 *  @return undefined - nothing need be returned
 */
const placeLabel = (labelId, coordinates) => {
  const labelClip = document.createElementNS(svgNs, 'image');
  labelClip.setAttributeNS(null, 'class', 'label' + labelId);
  labelClip.setAttributeNS(null, 'href', 'images/svg/' + labelId + '_label_mask_blue.svg');
  labelClip.setAttributeNS(null, 'clip-path', 'url(#myClipPath)');
  labelClip.setAttributeNS(null, 'x', coordinates.labelCoordinates[0]);
  labelClip.setAttributeNS(null, 'y', coordinates.labelCoordinates[1]);

  const labelContainer = document.createElementNS(svgNs, 'g');
  labelContainer.setAttributeNS(null, 'class', 'label');

  const labelImageBg = document.createElementNS(svgNs, 'image');
  labelImageBg.setAttributeNS(null, 'class', 'label-content-unselected label-image-bg' + labelId);
  labelImageBg.setAttributeNS(null, 'id', 'label' + labelId + '-image-bg');
  labelImageBg.setAttributeNS(null, 'href', 'images/svg/' + labelId + '_label.svg');
  labelImageBg.setAttributeNS(null, 'x', coordinates.labelCoordinates[0]);
  labelImageBg.setAttributeNS(null, 'y', coordinates.labelCoordinates[1]);
  labelContainer.appendChild(labelImageBg);

  const labelKanji = document.createElementNS(svgNs, 'text');
  labelKanji.setAttributeNS(null, 'class', 'label-content-unselected label-text label-kanji');
  labelKanji.setAttributeNS(null, 'id', 'label' + labelId + '-kanji');
  labelKanji.setAttributeNS(null, 'x', coordinates.kanjiCoordinates[0]);
  labelKanji.setAttributeNS(null, 'y', coordinates.kanjiCoordinates[1]);
  labelKanji.setAttributeNS(null, 'fill', 'white');
  labelKanji.innerHTML = 'いい';
  labelContainer.appendChild(labelKanji);

  const labelEnglish = document.createElementNS(svgNs, 'text');
  labelEnglish.setAttributeNS(null, 'class', 'label-content-unselected label-text label-english');
  labelEnglish.setAttributeNS(null, 'id', 'label' + labelId + '-english');
  labelEnglish.setAttributeNS(null, 'x', coordinates.englishCoordinates[0]);
  labelEnglish.setAttributeNS(null, 'y', coordinates.englishCoordinates[1]);
  labelEnglish.setAttributeNS(null, 'fill', 'black');
  labelEnglish.innerHTML = 'hello';
  labelContainer.appendChild(labelEnglish);

  const cursorContainer = document.getElementById('cursor-container'); 
  cursorContainer.appendChild(labelClip);
  cursorContainer.appendChild(labelContainer);
}

placeLabel(0, coordinates0);


//initialize interface
//setLink(0); 
//userInterface();
