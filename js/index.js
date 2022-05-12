<<<<<<< HEAD
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  form.addEventListener('submit', function (e) {
=======
const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", function (e) {
>>>>>>> develop
    e.preventDefault();

    const formData = new FormData(this);

<<<<<<< HEAD
    if (this.id === 'offcanvas-form')
      console.log(`success: ${[...formData.values()]}`);

    if (this.id !== 'offcanvas-form') {
=======
    if (this.id === "offcanvas-form")
      console.log(`success: ${[...formData.values()]}`);

    if (this.id !== "offcanvas-form") {
>>>>>>> develop
      for (const input of formData.entries()) {
        console.log(`${input[0]}: ${input[1]}`);
      }
    }
  });
});

<<<<<<< HEAD
const cookies = document.querySelector('#cookies');
cookies.style.position = 'fixed';
cookies.style.display = 'flex';
cookies.style.flexDirection = 'column';
cookies.style.alignItems = 'center';

cookies.addEventListener('click', function (e) {
  if (e.target.type === 'button') {
    this.style.display = 'none';
    console.log(e.target.value);
  }
});
=======
const cookies = document.querySelector("#cookies");
cookies.style.position = "fixed";
cookies.style.display = "flex";
cookies.style.flexDirection = "column";
cookies.style.alignItems = "center";

cookies.addEventListener("click", function (e) {
  if (e.target.type === "button") {
    this.style.display = "none";
    console.log(e.target.value);
  }
});
>>>>>>> develop
