// temporary dev tool
// Find your root SVG element
export const getCoordinates = () => {
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
    navigator.clipboard.writeText(Math.round(loc.x) + ',' + Math.round(loc.y)).then(function() {
      console.debug("clicboard set");
    }, function() {
      console.debug("clicboard not set");
    });
  },false);
}

