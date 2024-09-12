document.addEventListener("DOMContentLoaded", () => {
  const modalButtons = document.querySelectorAll('.product button');
  // const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close');

  modalButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          const modalId = event.target.closest('.product').dataset.modal;
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

    // フォームバリデーション
    const form = document.getElementById('contactForm');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
      // フォームフィールドを取得
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // フィールドが未入力の場合
      if (name === '' || email === '' || message === '') {
        event.preventDefault();  // フォーム送信をキャンセル
        errorMessage.style.display = 'block';  // エラーメッセージ表示
      } else {
        errorMessage.style.display = 'none';  // エラーメッセージ非表示
      }
    });
