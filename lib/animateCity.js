/**
 *  @desc run animation for hover over event of the city svg image
 *  @param string $cityName - The name of the city to aniamte
 *  @return undefined - There is no need for a return
 */
const cityAnimatingStateArray = [];
cityAnimatingStateArray.fill(0, 0, 24);

export const animateCity = (cityName) => {
  if(cityAnimatingStateArray[cityName]){
    return;
  }
  anime({
    targets: '#city' + cityName + '-image',
    scale: .9,
    direction: 'alternate',
    easing: 'easeInOutExpo',
    duration: 250,
    begin: (anim) => {
      //console.log("animation began");
      cityAnimatingStateArray[cityName] = 1;
    },
    complete: (anim) => {
      //console.log("animation end");
      cityAnimatingStateArray[cityName] = 0;
    }
  });
}
