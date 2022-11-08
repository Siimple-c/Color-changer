const colors = ['Lightslategray','Maroon','MidnightBlue', 'OliveDrab', 'SaddleBrown', 'Tomato'];

const btn = document.querySelector('.btn');
const hexCode = document.querySelector('#hex-code');

btn.addEventListener('click', () => {
  let color = randomNumber();
  document.body.style.backgroundColor = colors[color];
  hexCode.textContent = colors[color];
})

function randomNumber(){
  return Math.floor(Math.random() * colors.length);
}