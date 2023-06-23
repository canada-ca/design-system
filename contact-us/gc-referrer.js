(function () {
  function handleFormSubmit() {
    document.getElementById("referrer").value = document.referrer;

    document.addEventListener("DOMContentLoaded", function () {
      var form = document.querySelector("form");

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var formData = new FormData(form);
        var contactDto = {};

        formData.forEach(function (value, key) {
          contactDto[key] = value;
        });

        sessionStorage.setItem( "contact-dto", JSON.stringify( contactDto ) );
        location.href = "thank-you.html";
      });
    });
  }

  function setBackToReferrer() {
    document.addEventListener("DOMContentLoaded", function () {
      var referrerLink = document.getElementById("backToReferrer");
      var contactDto = JSON.parse(sessionStorage.getItem("contact-dto"));

      if (contactDto && contactDto.referer) {
        referrerLink.href = contactDto.referer;
      }
    });
  }

  // Run the appropriate function based on the current page
  var currentPage = document.location.pathname;

  if (currentPage.endsWith("/contact-us/index.html") || currentPage.endsWith("/contact-us/")) {
    handleFormSubmit();
  } else if (currentPage.endsWith("/contact-us/thank-you.html")) {
    setBackToReferrer();
  }
})();
