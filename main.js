'use strict';
const labels = document.querySelectorAll('.right__label');

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, i) => `<span style ="transition-delay: ${i * 20}ms"
    >${letter}</span>`
    )
    .join('');
});
