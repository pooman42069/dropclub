document.body.addEventListener('click', function(event) {
    var song = document.getElementById('song')
    song.volume = 0.1;
    song.play();

    var hitsnd = document.getElementById('neverlosehit')
    hitsnd.volume = 0.5;
    hitsnd.play();
  
    const missed = document.createElement('div');
    const numberElement = document.createElement('div');
    const randomNumber = Math.floor(Math.random() * 31) + 70;
    missed.textContent = 'Tapped for ' + randomNumber;
    missed.style.right = `0.5%`
    missed.style.top = `0.5%`
    missed.className = 'missedu';
    numberElement.textContent = '-' + randomNumber;
    numberElement.className = 'number';
    numberElement.style.left = `${event.clientX}px`;
    numberElement.style.top = `${event.clientY}px`;
    document.body.appendChild(numberElement);
    document.body.appendChild(missed);
    setTimeout(() => {
        numberElement.style.transform = 'translateY(-60px) translateX(100%)';
        numberElement.style.opacity = '0';
    }, 10);
    setTimeout(() => {
        missed.style.transform = 'translateY(-60px)'
        missed.style.opacity = '0'
    }, 2500);
    setTimeout(() => {
        missed.remove
    }, 3000);
    setTimeout(() => {
        numberElement.remove();
    }, 1010);
});

document.addEventListener('mousemove', function(e) {
const tracer = document.createElement('div');
tracer.className = 'tracer';
document.body.appendChild(tracer);
tracer.style.left = e.pageX + 'px';
tracer.style.top = e.pageY + 'px';

setTimeout(() => {
    tracer.style.opacity = '0';
}, 0);

setTimeout(() => {
    tracer.remove();
}, 500);
});