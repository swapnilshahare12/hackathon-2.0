let drumbox = document.querySelectorAll('.drum');

drumbox.forEach(e => {
  e.addEventListener('click', () =>{
    let innerHtml = e.innerHTML;
    makeSound(innerHtml);
    buttonAnimation(innerHtml);
  });
});

document.addEventListener('keypress',e=> {
  makeSound(e.key);
  buttonAnimation(e.key);
});

const makeSound = key =>{
  switch (key) {
    case 'w':
      var audio1 = document.getElementById('audio1');
      audio1.currentTime = 0;
      audio1.play();
      break;
    case 'a':
      var audio2 = document.getElementById('audio2');
      audio2.currentTime = 0;
      audio2.play();
      break;
    case 's':
      var audio3 = document.getElementById('audio3');
      audio3.currentTime = 0;
      audio3.play();
      break;
    case 'd':
      var audio4 = document.getElementById('audio4');
      audio4.currentTime = 0;
      audio4.play();
      break;
    case 'j':
      var audio5 = document.getElementById('audio5');
      audio5.currentTime = 0;
      audio5.play();
      break;
    case 'k':
      var audio6 = document.getElementById('audio6');
      audio6.currentTime = 0;
      audio6.play();
      break;
    case 'l':
      var audio7 = document.getElementById('audio7');
      audio7.currentTime = 0;
      audio7.play();
      break;
    default:
      console.log('sound not available for this key');
      break;
  }
}

const buttonAnimation = key => {
  var activeButton = document.querySelector('.' + key);
  activeButton.classList.add('pressed');
  setTimeout(()=> activeButton.classList.remove('pressed'),1);
}
