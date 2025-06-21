

let form = document.querySelector('#paymentForm');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let card = e.target.card;
      let cvc = e.target.cvc;
      let amount = e.target.amount;
      let firstname = e.target.firstname;
      let lastname = e.target.lastname;
      let city = e.target.city;
      let state = e.target.state;
      let postal = e.target.postal;
      let message = e.target.message;

      let valid = true;
      let fields = [card, cvc, amount, firstname, lastname, city, state, postal, message];

      fields.forEach(field => field.classList.remove('invalid'));

      fields.forEach(field => {
        if (!field.value || field.value.trim() === '' || field.value === 'Pick a state') {
          field.classList.add('invalid');
          valid = false;
        }
      });

      let radios = form.querySelectorAll('input[name="payment"]');
      let paymentSelected = [...radios].some(r => r.checked);

      if (!paymentSelected) {
        valid = false;
      }

      let alerta = document.getElementById('alertaErrores');
      if (!valid) {
        alerta.classList.remove('d-none');
      } else {
        alerta.classList.add('d-none');
        alert("Formulario enviado correctamente.");
        form.reset();
      }
    });