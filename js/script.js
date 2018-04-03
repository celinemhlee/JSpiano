/* toggle menu */

const accordion = document.getElementsByClassName("accordion-menu");
let i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let messagePanel = this.nextElementSibling;
        if (messagePanel.style.display === "block") {
            messagePanel.style.display = "none";
        } else {
            messagePanel.style.display = "block";
        }
    });
}

/* piano */
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('pianoPlaying');
}

function sound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('pianoPlaying');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.piano-key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', sound);
