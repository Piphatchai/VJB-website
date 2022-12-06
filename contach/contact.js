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
// EMD TOPHEADDER



// Message
function message(){
  let Name = document.getElementById('name');
  let email = document.getElementById('email');
  let msg = document.getElementById('msg');
  let number = document.getElementById('number')
  const success = document.getElementById('success');
  const danger = document.getElementById('danger');

  if(Name.value === '' || email.value === '' || msg.value === ''|| number.value ===''){
      danger.style.display = 'block';
  }
  else{
      setTimeout(() => {
          Name.value = '';
          email.value = '';
          msg.value = '';
          number.value = '';
      }, 2000);

      success.style.display = 'block';
  }
  setTimeout(() => {
      danger.style.display = 'none';
      success.style.display = 'none';
  }, 4000);

}

// end massage


// FAQ
const elements = document.querySelectorAll('.element');
elements.forEach(element =>{
    let btn = element.querySelector('.question button');
    let icon = element.querySelector('.question button i');
    let answer = element.lastElementChild;
    let answers = document.querySelectorAll('.element .answer');
    btn.addEventListener('click', ()=>{
        answers.forEach(ans =>{
            let ansIcon = ans.parentElement.querySelector('button i');
            if(answer !== ans){
                ans.classList.add('hideText');
                ansIcon.className = 'fas fa-plus-circle';
            }
        });
        answer.classList.toggle('hideText');
        icon.className === 'fas fa-plus-circle' ? icon.className = 'fas fa-minus-circle' 
        : icon.className ='fas fa-plus-circle';
    });
});
// EMD FAQ
