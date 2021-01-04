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
const imageTsukishima = document.getElementById("tsukishima");

imageTsukishima.addEventListener('mouseover', (evt) => {
  anime({
    targets: imageTsukishima,
    keyframes: [
      {scale: 0.95},
      {scale: 1}
    ],
    easing: 'easeOutElastic(1, .8)',
  });
  return;
});

const placeCursor = (x, y, width=130, height=160) => {
  const cursorContainer = document.getElementById("cursor-container");
  const cursorBlue = document.getElementById("cursor-blue");
  const cursorRed = document.getElementById("cursor-red");

  //==CURSOR CONFIG==//
  const corner4Area = [34, 15];
  //subtract width of area by half the width of the cursor area
  //every diamond corner area will have dimension 34px,15px
  //874 454 topleft coordinate of corner four area
  const corner4LeftCorner = [x, y+40];

  //calculate array for possible x coordinates of corner 4
  const corner4AreaXaxisArray = [corner4LeftCorner[0]];
  for(let i = 0; i < corner4Area[0]; i++){
    corner4AreaXaxisArray.push(corner4LeftCorner[0]+i+1);
  }
  //calculate array for possible y coordinates of corner 4
  const corner4AreaYaxisArray = [corner4LeftCorner[1]];
  for(let i = 0; i < corner4Area[1]; i++){
    corner4AreaYaxisArray.push(corner4LeftCorner[1]+i+1);
  }

  const corner4Points = [];
  const corner4PointValues = [];
  for(let i = 0; i < 10; i++){
    //calulate one of the coordinates
    const point = [];
    point[0] = corner4AreaXaxisArray[Math.floor(Math.random() * corner4AreaXaxisArray.length)];
    point[1] = corner4AreaYaxisArray[Math.floor(Math.random() * corner4AreaYaxisArray.length)];
    corner4Points.push(point);    

    const newValue = { 
      value: '563,434 654,392 726,438 ' + 
        point[0] + ',' + point[1]
    }
    corner4PointValues.push(newValue);
 
  }

  cursorBlue.setAttribute('points', '558,403 710,414 718,460 598,464');
  cursorBlue.setAttribute('visibility', 'visible');
  cursorRed.setAttribute('points',
    '563,434 654,392 726,438 ' +
    corner4Points[0][0] + ',' + corner4Points[0][1]
  );
  cursorRed.setAttribute('visibility','visible');

  //==ANIMATE==\\
  console.debug('corner4PointValues', corner4PointValues);
  anime({
    targets: '#cursor-red',
    points: corner4PointValues,
    easing: 'easeOutQuad',
    duration: 8000,
    loop: true
  })


}

placeCursor(658,432);

