const ratingNumber = document.querySelectorAll('.rating-number');
const defaultActive = document.querySelectorAll('.default-active');
const questionCard = document.querySelector('.rating-component');
const resultCard = document.querySelector('template');
const submitBtn = document.querySelector('.button-submit');
const resultCardText = document.querySelectorAll('.rating-result__subtitle');
const showTemplate = resultCard.content.cloneNode(true);

ratingNumber.forEach((button) => {
  button.addEventListener('click', function() {
    ratingNumber.forEach((selected) => {
      selected.classList.remove('rating-selected');
    });
    button.classList.add('rating-selected');
    defaultActive.classList.remove('default-active');
  });
});

submitBtn.addEventListener('click', function() {
  const ratingSelected = document.querySelector('.rating-selected');

  if (ratingSelected === null) {
    window.alert('Please leave a rating');
  } else {
    questionCard.style.display = 'none'; 
    document.body.appendChild(showTemplate); 
    resultCardText.textContent = `You selected ${ratingSelected.value} out of 5`;
  }
});
