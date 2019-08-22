
const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu')
const links =  document.querySelectorAll('.menu__list__item')

btn.addEventListener('click', () =>{
  btn.classList.toggle('btn-open');
  menu.classList.toggle('menu-open');
})

for (let i = 0; i < links.length; i ++ ) {
  links[i].addEventListener('click', ()=>{
    btn.classList.toggle('btn-open');
    menu.classList.toggle('menu-open');
  })
}
