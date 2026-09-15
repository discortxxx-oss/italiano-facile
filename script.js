document.addEventListener('DOMContentLoaded', function () {

  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });

  var form = document.getElementById('trial-form');
  var success = document.getElementById('form-success');
  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var data = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
      };

      var formspreeUrl = 'https://formspree.io/f/xxxxxxxx';

      fetch(formspreeUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res.ok) {
          form.style.display = 'none';
          success.style.display = 'block';
        } else {
          alert('Ошибка при отправке. Попробуйте позже или напишите мне напрямую.');
        }
      })
      .catch(function () {
        alert('Ошибка соединения. Попробуйте позже или напишите мне напрямую.');
      });
    });
  }
});