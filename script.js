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

      var data = new FormData(form);
      data.append('_subject', 'Новая заявка с Italiano Facile');

      fetch('https://formsubmit.co/ajax/PolPolDav@yandex.ru', {
        method: 'POST',
        body: data
      })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res.success) {
          form.style.display = 'none';
          success.style.display = 'block';
        } else {
          alert('Ошибка. Напишите мне напрямую: PolPolDav@yandex.ru');
        }
      })
      .catch(function () {
        alert('Ошибка соединения. Напишите мне напрямую: PolPolDav@yandex.ru');
      });
    });
  }
});