function playSound(id) {
  var audio = document.getElementById(id);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

document.getElementById('logo').addEventListener('mouseenter', () => playSound('sfx-logo'));
document.getElementById('studioBtn').addEventListener('mouseenter', () => playSound('sfx-studio'));
document.getElementById('voiceBtn').addEventListener('mouseenter', () => playSound('sfx-voice'));
document.getElementById('name').addEventListener('mouseenter', () => playSound('sfx-name'));
document.getElementById('role').addEventListener('mouseenter', () => playSound('sfx-role'));
