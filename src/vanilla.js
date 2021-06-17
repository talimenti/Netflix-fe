// como ocutlar y mostar elementos usando js vanilla

window.addEventListener('load', () => {
  console.log('The page was loaded');
  let isMuted = true;
  const muteUnmuteTrailerButton = document.findElementById("#mute-unmute-trailer");
  const iconMuteMainTrailer = document.findElementById(
    "#icon-mute-main-trailer"
  );
  const iconUnmuteMainTrailer = document.findElementById(
    "#icon-unmute-main-trailer"
  );
  muteUnmuteTrailerButton.addEventListener('click', () => {
    if (isMuted) {
      iconMuteMainTrailer.addClass('hidden');
      iconUnmuteMainTrailer.removeClass('hidden');
      isMuted = false; // TODO: enable audio
      return;
    }
    iconMuteMainTrailer.removeClass('hidden');
    iconUnmuteMainTrailer.addClass('hidden');
    isMuted = true; // TODO: disable audio
  });
});