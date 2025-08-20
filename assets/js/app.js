// Simple UI sound system
const sounds = {
  click: new Audio('assets/sounds/click.wav'),
  confirm: new Audio('assets/sounds/confirm.wav'),
  hover: new Audio('assets/sounds/hover.wav')
};
Object.values(sounds).forEach(a => { a.volume = 0.6; a.preload = 'auto'; });

let muted = false;
const muteBtn = document.getElementById('muteBtn');
muteBtn.addEventListener('click', () => {
  muted = !muted;
  muteBtn.classList.toggle('active', !muted);
  muteBtn.setAttribute('aria-pressed', (!muted).toString());
  muteBtn.textContent = muted ? '🔇 UI Sounds' : '🔊 UI Sounds';
});

function play(id){
  if (muted) return;
  const a = sounds[id];
  if (!a) return;
  try { a.currentTime = 0; a.play(); } catch (e) {}
}

document.querySelectorAll('[data-sfx]').forEach(el => {
  el.addEventListener('click', e => play(el.dataset.sfx));
  el.addEventListener('mouseenter', e => play('hover'));
  el.addEventListener('focus', e => play('hover'));
});
