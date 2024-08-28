$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("load scroll", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(window).scrollTop() > 35) {
      $(".header").css({
        background: "#002e5f",
        "box-shadow": "0 .2rem .5rem rgba(0,0,0,.4)",
      });
    } else {
      $(".header").css({ background: "none", "box-shadow": "none" });
    }
  });

  const counters = document.querySelectorAll(".counter");
  const speed = 120;
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  (function ($) {
    "use strict";

    $(".clients-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } },
    });

    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
      },
    });
  })(jQuery);

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  $(".accordion-header").click(function () {
    $(".accordion .accordion-body").slideUp(500);
    $(this).next(".accordion-body").slideDown(500);
    $(".accordion .accordion-header span").text("+");
    $(this).children("span").text("-");
  });
});

// document.getElementById('submit')?.addEventListener('click', function(){

document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault();
  const career = document.getElementById("career");
  career?.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const role = document.getElementById("role").value;
    const experince = document.getElementById("experience").value;
    const otherDetail = document.getElementById("other-detail").value;
    // const file = document.getElementById("file").files[0];
    // // Convert the PDF file to a base64 string;
    // const MAX_SIZE = 50 * 1024; //50KB
    // document.getElementById("file").onchange = function (event) {
    //   // const file = event.target.files[0];
    //   if (file.size > MAX_SIZE) {
    //     alert("File is too large. Maximum File size is 50 KB");
    //     return;
    //   }
    // };
    // const reader = new FileReader();
    // reader.readAsDataURL(file);

    // reader.onloadend = function () {
    //   const basePDF = reader.result.split(",")[1];
    //   console.log(basePDF, "atrender");
    const objectData = {
      name,
      email,
      phone,
      otherDetail,
      experince,
      role,
      // basePDF
    };
    const templateParams = {
      from_name: name,
      from_email: email,
      message: JSON.stringify(objectData),
      // file_name: file.name, // The name of the file
      // file_content: basePDF, // Base64 encoded content of the file
      // file_type: file.type,
      to_email: "chandanchaudhary3949@gmail.com",
    };
    // console.log(templateParams, "template");

    // VITE_EMAIL_SERVICE_ID = service_fj6btw7;
    // VITE_EMAIL_TEMPLATE_ID = template_dqg4cof;
    // VITE_EMAIL_PUBLIC_KEY = jV9SsDvNN9x76wkI2;
    emailjs.send("service_fj6btw7", "template_dqg4cof", templateParams).then(
      function (response) {
        // console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
        window.location.reload();
      },
      function (error) {
        // console.log("FAILED...", error);
        alert("Failed to send email. Please try again later.");
        window.location.reload();
      }
    );
  });

  // const formData = new FormData(this);
  // const fileData = new FormData(this);
  // fileData.append('file',file);

  // const formObject = Object.fromEntries(fileData.entries());
  // Generate the email parameters
});
// });
// document.getElementById('submit')?.addEventListener('click', function(){

// CONTACT US
document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault();
  const contact = document.getElementById("contactEmail");
  contact?.addEventListener("submit", function (event) {
    // console.log(contact);
    event.preventDefault();
    const contactName = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const contactData = {
      contactName,
      phone,
      email,
      message,
    };
    // nibsbridge.t@gmail.com
    const templateParams = {
      from_name: contactName,
      from_email: email,
      from_phone: phone,
      message: JSON.stringify(contactData),
      to_email: "chandanchaudhary3949@gmail.com",
    };
    // console.log(templateParams, "template");

    // VITE_EMAIL_SERVICE_ID=service_fj6btw7
    // VITE_EMAIL_TEMPLATE_ID=template_dqg4cof
    // VITE_EMAIL_PUBLIC_KEY=jV9SsDvNN9x76wkI2
    emailjs.send("service_fj6btw7", "template_dqg4cof", templateParams).then(
      function (response) {
        // console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
        window.location.reload();
      },
      function (error) {
        // console.log("FAILED...", error);
        alert("Failed to send email. Please try again later.");
        window.location.reload();
      }
    );
    // console.log(contactData, "form contact");
  });
});
