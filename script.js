const cursorCircle = document.querySelector('#circle');
const btn = document.querySelector('#btn')
const svgelem = document.querySelector('svg')
let tl = gsap.timeline();

window.addEventListener('mousemove', (e) => {
  let xValue = e.clientX;
  let yValue = e.clientY;

  setTimeout(() => {
    cursorCircle.style.top = `${yValue}px`;
    cursorCircle.style.left = `${xValue}px`;
  }, 100);

});

btn.addEventListener('click', () => {
  tl.reverse();
  setTimeout(function() {
    svgelem.classList.add('animate')
  }, 3500)
})

tl
.from('#wrapper', {
  duration: 4,
  scale: .7,
  ease: 'Expo.easeInOut',
  opacity: 0,
})
.from('#whitestrip', {
  duration: 2,
  width: 0,
  opacity: 0,
  ease: 'Expo.easeInOut'
}, '-=2.5')
.from('#blackcard', {
  duration: 1.5,
  x: 50,
  opacity: 0,
  ease: 'Expo.easeInOut'
}, '-=1.5')
.from('#linelem', {
  duration: 1.5,
  x: 50,
  opacity: 0,
  ease: 'Expo.easeInOut'
}, '-=1.5')
.from('#linelem .line', {
  duration: 2,
  width: 0,
  opacity: 0,
  ease: 'Expo.easeInOut'
}, '-=1.5')
.from('#blackcard p', {
  duration: 2.5,
  y: 30,
  opacity: 0,
  ease: 'Expo.easeInOut'
}, '-=2')
.from('#sideelem', {
  duration: 2,
  x: 30,
  opacity: 0,
  ease: 'Expo.easeInOut'
}, '-=2')
