'use strict';
const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// for (let i = 0; i < btnOpenModal.length; i++) {
//   btnOpenModal[i].addEventListener('click', function () {
//     console.log('button clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   })
// }
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for(let i=0;i<btnOpenModal.length;i++)
{
    btnOpenModal[i].addEventListener('click',openModal);
}

// overlay.addEventListener('click',function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })

// closeModal.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
} 
closeBtn.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
    console.log('clicked',e);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
      closeModal();
    }
})