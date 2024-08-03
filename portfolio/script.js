// script.js
document.addEventListener("DOMContentLoaded", () => {
  const modalButtons = document.querySelectorAll('.product button');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close');

  modalButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          const modalId = event.target.closest('.products').dataset.modal;
          document.getElementById(modalId).style.display = "block";
      });
  });

  closeButtons.forEach(button => {
      button.addEventListener('click', () => {
          button.closest('.modal').style.display = "none";
      });
  });

  window.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal')) {
          event.target.style.display = "none";
      }
  });
});
