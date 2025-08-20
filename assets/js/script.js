function playSound(type) {
  let audio = new Audio();
  if (type === 'portfolio') {
    audio.src = 'assets/sounds/portfolio.mp3';
  } else if (type === 'voice') {
    audio.src = 'assets/sounds/voice.mp3';
  }
  audio.play();
}
