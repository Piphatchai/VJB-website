let bar = document.querySelector('.bar');
bar.onclick = () =>{
    let menu = document.querySelector('.nav-vjb');
    menu.classList.toggle('show')
}

// top headder 
let topHeader = document.querySelector('.top-header');
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    topHeader.classList.add('hide');
  }
  else {
    topHeader.classList.remove('hide');
  }
  lastScrollY = window.scrollY;
});
