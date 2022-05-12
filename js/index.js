const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    if (this.id === 'offcanvas-form')
      console.log(`success: ${[...formData.values()]}`);

    if (this.id !== 'offcanvas-form') {
      for (const input of formData.entries()) {
        console.log(`${input[0]}: ${input[1]}`);
      }
    }
  });
});

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