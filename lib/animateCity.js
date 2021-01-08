/**
 *  @desc run animation for hover over event of the city svg image
 *  @param string $cityName - The name of the city to aniamte
 *  @return undefined - There is no need for a return
 */
export const animateCity = (cityName) => {
  anime({
    targets: '#aoyamaitchome-image',
    scale: .9,
    easing: 'easeInOutExpo'
  });
}
