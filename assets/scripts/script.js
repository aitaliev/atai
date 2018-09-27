const boxs = Array.prototype.slice.call(document.querySelectorAll('.box'));

boxs.forEach((box) => {
 const checkbox = box.querySelector('input[type=checkbox]');
 const buy = box.querySelector('.box__buy');
 const card = box.querySelector('.box__card');
 const heading = box.querySelector('.box__heading');

 const handlerSatusbox = () => {
  if (!checkbox.hasAttribute('checked')) {
   checkbox.setAttribute('checked', true);
   box.classList.add('selected');
   buy.classList.add('hidden');
   heading.classList.remove('hidden');
  } else {
   checkbox.removeAttribute('checked');
   box.classList.remove('selected');
   buy.classList.remove('hidden');
   heading.classList.add('hidden');
   box.classList.remove('selected-hover');
  }
 };

 if (checkbox.hasAttribute('disabled')) {
  box.classList.add('disabled');
  buy.innerHTML = box.dataset.disabled;
 }

 checkbox.addEventListener('change', handlerSatusbox);
 card.addEventListener('click', handlerSatusbox);
 card.addEventListener('mouseleave', () => {
  if (checkbox.hasAttribute('checked')) {
   box.classList.add('selected-hover');
  } else {
   box.classList.remove('selected-hover');
  }
 });
});
