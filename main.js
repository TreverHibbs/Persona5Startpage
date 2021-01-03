// Find your root SVG element
const mainSvg = document.getElementById("main-svg");

// Create an SVGPoint for future math
const pt = mainSvg.createSVGPoint();

// Get point in global SVG space
function cursorPoint(evt){
  pt.x = evt.clientX; pt.y = evt.clientY;
  return pt.matrixTransform(mainSvg.getScreenCTM().inverse());
}

//mainSvg.addEventListener('mousemove',function(evt){
//  const loc = cursorPoint(evt);
//  console.debug("mouse x coord: ", loc.x);
//  console.debug("mouse y coord: ", loc.y);
//},false);

//animate tsukishima
const imageTsukishima = document.getElementById("tsukishima");

imageTsukishima.addEventListener('mouseover', (evt) => {
  targets: imageTsukishima,
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

