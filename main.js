// Find your root SVG element
const mainSvg = document.getElementById("main-svg");

// Create an SVGPoint for future math
const pt = mainSvg.createSVGPoint();

// Get point in global SVG space
function cursorPoint(evt){
  pt.x = evt.clientX; pt.y = evt.clientY;
  return pt.matrixTransform(mainSvg.getScreenCTM().inverse());
}

mainSvg.addEventListener('click',function(evt){
  const loc = cursorPoint(evt);
  console.debug("mouse x coord: ", loc.x);
  console.debug("mouse y coord: ", loc.y);
},false);

//animate tsukishima
//const imageTsukishima = document.getElementById("tsukishima");
//
//imageTsukishima.addEventListener('mouseover', (evt) => {
//  anime({
//    targets: imageTsukishima,
//    keyframes: [
//      {scale: 0.95},
//      {scale: 1}
//    ],
//    easing: 'easeOutElastic(1, .8)',
//  });
//  return;
//});

const placeCursor = (x, y, width=130, height=160) => {
  const cursorBlue = document.getElementById("cursor-blue");
  const cursorRed = document.getElementById("cursor-red");
  
  if(cursorBlue && cursorRed){
    cursorBlue.remove();
    cursorRed.remove();
  }

  //==CURSOR CONFIG==//
  const cornerArea = [34,15];
  const corner4Area = cornerArea;
  //subtract width of area by half the width of the cursor area
  //every diamond corner area will have dimension 34px,15px
  //874 454 topleft coordinate of corner four area
  /*blue polygon corner labels
   *  1*------*2
   *   |      |
   *   |      |
   *   |      |      
   *  4*------*3
  */

  /*red polygon corner labels
   *      *2
   *     / \
   *    /   \
   *   *1    *3
   *    \   /
   *     \ /
   *      *4
  */

  const redCorner4 = [x, y+(height/4)];
  const redCorner3 = [x+(width/2), y-20];
  const redCorner2 = [x, y-(height/4)];
  const redCorner1 = [x-(width/2)-30, y-10];

  const blueCorner4 = [x-(width/2)-15, y+(height/4)-20];
  const blueCorner3 = [x+(width/2)-5, y+(height/4)-20];
  const blueCorner2 = [x+(width/2)-15, y-(height/4)+10];
  const blueCorner1 = [x-(width/2), y-(height/4)];

  const CalculateCornerAreaArrays = (corner) => {
    //calculate array for possible x coordinates of corner
    const cornerAreaXaxisArray = [corner[0]];
    for(let i = 0; i < cornerArea[0]; i++){
      cornerAreaXaxisArray.push(corner[0]+i+1);
    }
    //calculate array for possible y coordinates of corner
    const cornerAreaYaxisArray = [corner[1]];
    for(let i = 0; i < cornerArea[1]; i++){
      cornerAreaYaxisArray.push(corner[1]+i+1);
    }
    return(
      {
        XaxisArray: cornerAreaXaxisArray,
        YaxisArray: cornerAreaYaxisArray,
      }
    )
  }

  const redCornerArea4 = CalculateCornerAreaArrays(redCorner4);
  const redCornerArea3 = CalculateCornerAreaArrays(redCorner3);
  const redCornerArea2 = CalculateCornerAreaArrays(redCorner2);
  const redCornerArea1 = CalculateCornerAreaArrays(redCorner1);

  const blueCornerArea4 = CalculateCornerAreaArrays(blueCorner4);
  const blueCornerArea3 = CalculateCornerAreaArrays(blueCorner3);
  const blueCornerArea2 = CalculateCornerAreaArrays(blueCorner2);
  const blueCornerArea1 = CalculateCornerAreaArrays(blueCorner1);


  const pickRandomPoints = (cornerArea4, cornerArea3, cornerArea2, cornerArea1) => {
    const cornerPointValues = [];
    for(let i = 0; i < 10; i++){
      //calulate one of the coordinates
      const point4 = [];
      const point3 = [];
      const point2 = [];
      const point1 = [];
      point4[0] = cornerArea4.XaxisArray[Math.floor(Math.random() * cornerArea4.XaxisArray.length)];
      point4[1] = cornerArea4.YaxisArray[Math.floor(Math.random() * cornerArea4.YaxisArray.length)];
      point3[0] = cornerArea3.XaxisArray[Math.floor(Math.random() * cornerArea3.XaxisArray.length)];
      point3[1] = cornerArea3.YaxisArray[Math.floor(Math.random() * cornerArea3.YaxisArray.length)];
      point2[0] = cornerArea2.XaxisArray[Math.floor(Math.random() * cornerArea2.XaxisArray.length)];
      point2[1] = cornerArea2.YaxisArray[Math.floor(Math.random() * cornerArea2.YaxisArray.length)];
      point1[0] = cornerArea1.XaxisArray[Math.floor(Math.random() * cornerArea1.XaxisArray.length)];
      point1[1] = cornerArea1.YaxisArray[Math.floor(Math.random() * cornerArea1.YaxisArray.length)];

      if(i == 1){
        // Add a array of two strings as the first value in the array
        // this ensures that the loop is smooth
        // the loop will start with the first array etnry and then all
        // subsequent loops will ues the second.
        const newValue = {
          value: [ cornerPointValues[0].value, 
            point1[0] + ',' + point1[1] + ' ' + 
            point2[0] + ',' + point2[1]  + ' ' + 
            point3[0] + ',' + point3[1] + ' ' + 
            point4[0] + ',' + point4[1]
          ] 
        }
        cornerPointValues[0] = newValue;
      }else{
        const newValue = { 
          value: point1[0] + ',' + point1[1] + ' ' + 
            point2[0] + ',' + point2[1]  + ' ' + 
            point3[0] + ',' + point3[1] + ' ' + 
            point4[0] + ',' + point4[1] 
        }
        cornerPointValues.push(newValue);
      }
 
    }
    //push first to last for smooth looping see docs on polygon morphing for
    //anime.js.
    cornerPointValues.push(cornerPointValues[0].value[0]);
    return(cornerPointValues);
  }

  const redCornerPointValues = pickRandomPoints(redCornerArea4, redCornerArea3, redCornerArea2, redCornerArea1);
  const blueCornerPointValues = pickRandomPoints(blueCornerArea4, blueCornerArea3, blueCornerArea2, blueCornerArea1);

  //create corsor polygone elements with initial point.
  //craete two setts for the both blue pare and the red blue pair.
  const blueCursor = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  const redCursor = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  //these cursors will have the same animation as the above but they will
  //both be blue and be hidden from view.

  blueCursor.setAttribute('id', 'cursor-blue');
  redCursor.setAttribute('id', 'cursor-red');

  blueCursor.setAttribute('class', 'cursor cursor-blue');
  redCursor.setAttribute('class', 'cursor cursor-red');

  blueCursor.setAttribute('points', blueCornerPointValues[0].value);
  redCursor.setAttribute('points', redCornerPointValues[0].value);
  
  blueCursor.setAttribute('fill', '#09fffb');
  redCursor.setAttribute('fill', '#de0716');

  redCursor.setAttribute('mask', 'url(#myMask)');
//  blueCursor.setAttribute('visibility', 'hidden');

  const labelContainer = document.getElementById('aoyamaitchome-label');
  const cursorContainer = document.getElementById('cursor-container');
  const myClipPath = document.getElementById('myClipPath');

//  myMask.insertAdjacentElement('afterend', blueCursor);
//  myMask.insertAdjacentElement('afterend', redCursor);
  cursorContainer.prepend(blueCursor);
  cursorContainer.prepend(redCursor);
  redCursorClipPath = redCursor.cloneNode();
  myClipPath.prepend(redCursorClipPath);
//  visibleCursorContainer.prepend(blueCursor);
//  visibleCursorContainer.prepend(redCursor);

  //==ANIMATE==\\
  console.debug('redCornerPointValues', redCornerPointValues);
  anime({
    targets: '.cursor-red',
    points: redCornerPointValues,
    easing: 'easeOutQuad',
    duration: 2000,
    loop: true
  })

  console.debug('blueCornerPointValues', blueCornerPointValues);
  anime({
    targets: '.cursor-blue',
    points: blueCornerPointValues,
    easing: 'easeOutQuad',
    duration: 2000,
    loop: true
  })
}

placeCursor(658,432);

