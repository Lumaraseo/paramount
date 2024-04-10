/* Header Nav */

const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
  nav.classList.add("visible");
});

close.addEventListener("click", () => {
  nav.classList.remove("visible");
});


/* Arrows that appear and disappear on service page cards */

document.addEventListener('DOMContentLoaded', () => {
  let cards = document.querySelectorAll('.card');

  const hideArrow = (arrowIcon) => arrowIcon.classList.add('hide-arrow');
  const showArrow = (arrowIcon) => arrowIcon.classList.remove('hide-arrow');

  cards.forEach(card => {
      let arrowIcon = card.querySelector('.arrow-icon');

      card.addEventListener('click', e => {
          e.stopPropagation();
          hideArrow(arrowIcon);
      });

      card.addEventListener('mouseover', () => hideArrow(arrowIcon));
      card.addEventListener('mouseout', () => showArrow(arrowIcon));
  });

  document.addEventListener('click', () => {
      cards.forEach(card => {
          let arrowIcon = card.querySelector('.arrow-icon');
          showArrow(arrowIcon);
      });
  });
});

/* Validacion de formulario con Boostrap */

// JavaScript para activar la validación de Bootstrap 5
(function () {
  'use strict'

  // Obtén todos los formularios a los que queremos aplicar estilos de validación personalizados de Bootstrap
  var forms = document.querySelectorAll('.needs-validation')

  // Itera sobre ellos y evita el envío
  Array.prototype.slice.call(forms)
      .forEach(function (form) {
          form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
              }

              form.classList.add('was-validated')
          }, false)
      })
})();

/* Inicialización de EmailJS con tu publicKey */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) { // Verifica si el formulario existe en la página actual
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();

        if (form.checkValidity()) {
          emailjs.sendForm("service_2omznn6", "template_zm2imnf", this).then(
            function () {
              console.log("SUCCESS!");
              // Usar SweetAlert2 para el mensaje de éxito
              Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Your message has been sent successfully.",
              });
              form.reset();
              form.classList.remove("was-validated");
            },
            function (error) {
              console.log("FAILED...", error);
              // Usar SweetAlert2 para el mensaje de error
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "The message could not be sent, please try again.",
              });
            }
          );
        } else {
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  }

  // Solo inicializa EmailJS si el formulario existe
  
  if (form) {
    (function () {
      emailjs.init("qi8xMaBDh6B9UBbJ1");
    })();
  }
});
