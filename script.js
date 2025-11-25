
function highlight() {
  const strongs = document.querySelectorAll('strong');
  strongs.forEach(el => {
    el.style.color = 'rgb(0, 128, 0)'; // green
  });
}


function return_normal() {
  const strongs = document.querySelectorAll('strong');
  strongs.forEach(el => {
    el.style.color = 'rgb(0, 0, 0)'; // black
  });
}