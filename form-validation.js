(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      var form = document.getElementById("registrationForm");
      var body = document.getElementById("body");
      var styleNormalButton = document.getElementById("styleNormal");
      var styleHighContrastButton =
        document.getElementById("styleHighContrast");
      form.addEventListener(
        "submit",
        function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
      styleNormalButton.addEventListener("click", function () {
        body.classList.remove("bg-dark", "text-light");
        body.classList.add("bg-light", "text-dark");
      });
      styleHighContrastButton.addEventListener("click", function () {
        body.classList.remove("bg-light", "text-dark");
        body.classList.add("bg-dark", "text-light");
      });
    },
    false
  );
})();
