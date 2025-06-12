/**
 * @description this function use of samo
 */

// function scrollSmooth (){
//   document.querySelectorAll(".nav-link").forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();
//       document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
//       this.classList.add("active");
//       const targetId = this.getAttribute("href");
//       document.querySelector(targetId).scrollIntoView({ behavior: "smooth" }, setInterval(2000));
//     });
//   });
// } 
// scrollSmooth ()


/**
 * @description this function use of Name hide and seek 
 * @
*/

function hideSeek() {
  const name = ["I'm", "Baljeet", "Singh"];
  const hide = document.querySelector("#hideSeek");

  function typeName() {
    hide.innerHTML = "";

    name.forEach((word, index) => {
      const span = document.createElement("span");
      span.className = "letter";
      span.textContent = word;
      span.style.animationDelay = `${index * 0.5}s`;
      span.style.color = "#000"
      hide.appendChild(span);
    });
  }

  window.onload = typeName;
  setInterval(typeName, name.length * 1000);
}
hideSeek()


/**
 * @description this Function use in Project
*/

function myProject(){

  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-icon button");
    const contents = document.querySelectorAll(".web-shot");

    buttons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();

        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.textContent.trim().toLowerCase();

        contents.forEach((content) => {
          const label =
            content.querySelector("h5, h3")?.textContent.toLowerCase() || "";

          if (filter === "all") {
            content.style.display = "block";
          } else if (filter === "website") {
            const isWebsite =
              label.includes("responsive") ||
              label.includes("css") ||
              label.includes("javascript");
            content.style.display = isWebsite ? "block" : "none";
          } else if (filter === "landing page") {
            content.style.display =
              label === "responsive design" ? "block" : "none";
          } else if (label.includes(filter)) {
            content.style.display = "block";
          } else {
            content.style.display = "none";
          }
        });
      });
    });

    buttons[0].click();
  });
}
myProject()


// function submitForm() {
  // document.getElementById("form").addEventListener("submit", function (e) {
  //   e.preventDefault();

  //   const formData = new FormData(this);
  //   const name = formData.get("name");
  //   const email = formData.get("email");
  //   const subject = formData.get("subject");
  //   const message = formData.get("message");

  //   const DataSaved = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${
  //     message || "No message provided"
  //   }`;
  //   const alertMessage = `Form Submitted!\nThank You Join Us`;

  //   console.log(DataSaved);
  //   alert(alertMessage);

  //   this.reset();
  // });
// }

// submitForm();

const form = document.getElementById('form');

  form.onsubmit = e => {
    e.preventDefault();
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
      time: Date.now()
    };
    localStorage.setItem('formData', JSON.stringify(data));
    alert("Saved for 24 hours!");
    form.reset();
  };

  // Auto-delete after 24h
  const saved = JSON.parse(localStorage.getItem('formData'));
  if (saved && Date.now() - saved.time > 86400000) {
    localStorage.removeItem('formData');
  }