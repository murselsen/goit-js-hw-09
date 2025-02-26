const form = document.querySelector('.feedback-form');
form.addEventListener('input', event => {
  event.preventDefault();
  console.log('Input event fired', event);
  let email = form.elements.email.value;
  let message = form.elements.message.value.toString().trim();
  console.log('email:', email);
  console.log('message:', message);

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email, message })
  );
});

let data = localStorage.getItem('feedback-form-state') || null;
data = JSON.parse(data);
if (data.email) {
  form.elements.email.value = email;
}
if (data.message) {
  form.elements.message.value = message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  let email = form.elements.email.value;
  let message = form.elements.message.value.toString().trim();
  console.log({
    email,
    message,
  });
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
});
