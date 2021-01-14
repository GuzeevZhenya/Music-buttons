window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);

    if (!audio) return;




    let keys = document.querySelector(".keys");


    let active = document.querySelector(".playing");
    if (key.classList.contains('key')) {
        if (active) {
            key.classList.remove('playing');
        } 
            key.classList.add('playing');
        

    }  


    audio.play();
});