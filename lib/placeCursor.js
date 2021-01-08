/**
 *  @desc place the cursor which is the animated polygons its mask and its
 *  path clip. The origin of the cursor is at its top left corner.
 *  @param number $x - The x position of the cursor
 *         number $y - the y position of the cursor
 *         number $width - the max width of the cursor
 *         number $height - the max height of the cursor
 *         [number, number $cornerArea - the dimensions of the area for each corener
 *                                       to select its random points of animation
 *                                       dimenstion are width and heighth respectively
 *  @return null - nothing needs returned
 */
export const placeCursor = (x, y, width=127, height=56, cornerArea=[34,15]) => {
  const cursorBlue = document.getElementById("cursor-blue");
  const cursorRed = document.getElementById("cursor-red");

  if(cursorBlue && cursorRed){
    cursorBlue.remove();
    cursorRed.remove();
  }

  //corner area gives the width and height respetively
  //of the areas in which the random
  //points for the animation are selected.

  /*blue polygon corner labels
   *  4*------*3
   *   |      |
   *   |      |
   *   |      |
   *  1*------*2
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

  // config for random animation generation
  // calculate corner area offset so that corner position config
  // is position relative to center of corner area.
  const cornerCenterX = x-cornerArea[0]/2
  const cornerCenterY = y-cornerArea[1]/2

  //configure the position of the cursor points relative to width and heigth
  //of box
  const redCorners = [];
  redCorners[0] = [cornerCenterX, cornerCenterY+(height/2)];
  redCorners[1]  = [cornerCenterX+(width/2), cornerCenterY];
  redCorners[2]  = [cornerCenterX+(width*1.2), cornerCenterY+(height/2)];
  redCorners[3]  = [cornerCenterX+(width/1.05), cornerCenterY+(height*1.4)];

  const blueCorners = [];
  blueCorners[0] = [cornerCenterX+25, cornerCenterY+(height)+3];
  blueCorners[1] = [cornerCenterX+(width)+20, cornerCenterY+(height)];
  blueCorners[2] = [cornerCenterX+(width)+25, cornerCenterY+10];
  blueCorners[3] = [cornerCenterX+25, cornerCenterY];

  /**
   *  @desc Pick random points for a single corner for animation. These random
   *  points come from the center of the corner area given by the coordinate
   *  $corner and the cornerArea.
   *  @param Array $corner - The x and y axis of center of a corners given area
   *  @return null - A string with the value for the points polygon attribute
   */
  const pickRandomPoint = (corner) => {
    const cornerPointValues = [];

    const cornerXaxisMax = corner[0] + cornerArea[0]/2;
    const cornerYaxisMax = corner[1] + cornerArea[1]/2;

    const cornerXaxisMin = corner[0] - cornerArea[0]/2;
    const cornerYaxisMin = corner[1] - cornerArea[1]/2;

    const point = [];
    point[0] = Math.random() * (cornerXaxisMax - cornerXaxisMin) + cornerXaxisMin;
    point[1] = Math.random() * (cornerYaxisMax - cornerYaxisMin) + cornerYaxisMin;

    //console.debug("return string of pick random points", point[0] + ',' + point[1]);

    return(point[0] + ',' + point[1]);
    //push first to last for smooth looping see docs on polygon morphing for
    //anime.js.
  }

  /**
   *  @desc - Pick random points for all four corners of a polygon
   *  @param Array $corners - An array of coordinates that represent the center
   *  of a corners area of possible animation.
   *  @return string - A string of all the points selected in format given below
   *  "200,300 300,400, 200,3000 34,324" The first and last points are connected.
   */
  const pickRandomPoints = (corners) => {
    const cornerPoints = [];
    corners.forEach((corner, index) => {
      cornerPoints[index] = pickRandomPoint(corner);
    });
    return(cornerPoints.join(' '));
  }

  /**
   *  @desc - generate an array of strings that represent the points to animate
   *  for a polygon
   *  @param Array $corners - An array of coordinates that represent the center
   *  of a corners area of possible animation.
   *         numbers $length - the number of animation points to generate
   *  @return Array - The array will be in the format required by animejs
   *  it will contain objects of the form { value: [] }
   *  except for the first object which will cotnain an object
   *  { value: [ value: [points], value: [points] ] }
   *  this is so that the looping is smooth
   *  the first object will contain the first points and then another generated points
   *  the first and last points will be the same to ensure smooth looping.
   */
  const generatePointsArray = (corners, length=10) => {
    if(length < 3){
      console.error("length must be greater than or equal to 3");
      return;
    }

    const pointsArray = [];
    for(let i = 0; i < length; i++){
      // if we are at the second loop then add the special form to the first
      // element in the array for smooth looping
      if(i == 1){
        pointsArray[0] = { value: [pointsArray[0].value,pickRandomPoints(corners)] };
      }
      if(i == length-1){
        pointsArray[i] = { value: pointsArray[0].value[0] };
      } else {
        pointsArray[i] = { value: pickRandomPoints(corners) };
      }
    }
    return(pointsArray);
  }

  const redPoints = generatePointsArray(redCorners);
  const bluePoints = generatePointsArray(blueCorners);

  console.debug("blueCorners", blueCorners);

  console.debug("redCornerPoints", redPoints);
  console.debug("blueCornerPoints", bluePoints);

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

  blueCursor.setAttribute('points', bluePoints[0].value);
  redCursor.setAttribute('points', redPoints[0].value);

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
  const redCursorClipPath = redCursor.cloneNode();
  myClipPath.prepend(redCursorClipPath);
  //  visibleCursorContainer.prepend(blueCursor);
  //  visibleCursorContainer.prepend(redCursor);

  //==ANIMATE==\\
  anime({
    targets: '.cursor-red',
    points: redPoints,
    easing: 'easeOutQuad',
    duration: 2000,
    loop: true
  })

  anime({
    targets: '.cursor-blue',
    points: bluePoints,
    easing: 'easeOutQuad',
    duration: 2500,
    loop: true,
  })
}

export const removeCursor = () => {
  const cursorBlue = document.getElementById('cursor-blue');
  const cursorRed = document.getElementsByClassName('cursor-red');
  
  console.debug("remove cursor cursor red" ,cursorRed);
  cursorBlue.remove();
  for (const [key, value] of Object.entries(cursorRed)) {
    value.remove();
  }

  return;
}
