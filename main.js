import { getCoordinates } from './lib/getCoordinate.js';
//import { setLink, userInterface } from './lib/userInterface.js';





// get coordinates tool for development
//getCoordinates();

//svg namespace
const svgNs = 'http://www.w3.org/2000/svg' 

//initialize place images
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
  const useLabelClip = document.createElementNS(svgNs, 'image');
  useLabelClip.setAttributeNS(null, 'class', 'label' + labelId);
  useLabelClip.setAttributeNS(null, 'href', 'images/svg/' + labelId + '_label_mask_blue.svg');
  useLabelClip.setAttributeNS(null, 'clip-path', 'url(#myClipPath)');
  useLabelClip.setAttributeNS(null, 'x', coordinates.labelCoordinates[0]);
  useLabelClip.setAttributeNS(null, 'y', coordinates.labelCoordinates[1]);

  //const cloneLabelImage = cloneLabel.querySelector('.label-image-bg');
  //cloneLabelImage.setAttribute('id', labelId + '-bg');
  //cloneLabelImage.setAttribute('href', 'images/svg/' + labelId + '_label.svg');
  //cloneLabelImage.setAttribute('x', coordinates.labelCoordinates[0]);
  //cloneLabelImage.setAttribute('y', coordinates.labelCoordinates[1]);

  //const cloneLabelKanji = cloneLabel.querySelector('.label-kanji');
  //cloneLabelKanji.setAttribute('id', 'label' + labelId + '-kanji');
  //cloneLabelKanji.setAttribute('x', coordinates.kanjiCoordinates[0]);
  //cloneLabelKanji.setAttribute('y', coordinates.kanjiCoordinates[1]);

  //const cloneLabelEnglish = cloneLabel.querySelector('.label-english');
  //cloneLabelEnglish.setAttribute('id', 'label' + labelId + '-english');
  //cloneLabelEnglish.setAttribute('x', coordinates.englishCoordinates[0]);
  //cloneLabelEnglish.setAttribute('y', coordinates.englishCoordinates[1]);

  const cursorContainer = document.getElementById('cursor-container'); 
  cursorContainer.appendChild(useLabelClip);
}

placeLabel(0, coordinates0);


//initialize interface
//setLink(0); 
//userInterface();
