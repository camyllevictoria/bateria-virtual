function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;                          //faz a função parar
    audio.currentTime = 0;                      //faz com que o som sempre recomece assim que for clicado
    audio.play();
    key.classList.add('playing');    
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;    //se o transforma não funcionar, ele pula
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playsound);