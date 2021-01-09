/**
 *  @desc run animation for hover over event of the city svg image
 *  @param string $cityName - The name of the city to aniamte
 *  @return undefined - There is no need for a return
 */
let cityAnimatingState = 0;

export const animateCity = (cityName) => {
  if(cityAnimatingState){
    return;
  }
  cityAnimatingState = 0;
  anime({
    targets: '#image' + cityName,
    scale: .9,
    direction: 'alternate',
    easing: 'easeInOutExpo',
    duration: 250,
    begin: (anim) => {
      console.log("animation began");
      cityAnimatingState = 1;
    },
    complete: (anim) => {
      console.log("animation end");
      cityAnimatingState = 0;
    }
  });
}
