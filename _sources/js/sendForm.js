export default class sendForm {
  constructor(id, dates, idMail){
    //document.getElementById(id).addEventListener('submit', () => {
    $(`#${id}`).submit( () => {
      let data = {
      	name: document.querySelector(dates.name).value,
      	telephone: document.querySelector(dates.telephone).value
      }

      $.ajax({
        type: "POST",
        url: "/mail.php",
        data: data
      }).done(function (value) {
        let mail = document.getElementById(idMail);

        mail.innerHTML = value;
        mail.classList.remove('not_visible_mail');

        setTimeout(function () {
          $(`#${id}`).trigger("reset");
          mail.classList.add('not_visible_mail');
        }, 1000);

      });

      return false;

    });
  }
}
