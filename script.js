const cursorCircle = document.querySelector('#circle');

window.addEventListener('mousemove', (e) => {
  let xValue = e.clientX;
  let yValue = e.clientY;

  setTimeout(() => {
    cursorCircle.style.top = `${yValue}px`;
    cursorCircle.style.left = `${xValue}px`;
  }, 100);

});