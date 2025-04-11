document.getElementById('collabForm')?.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const institution = document.getElementById('institution').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && institution && message) {
    document.getElementById('response').innerHTML = `
      <p>Thank you, <strong>${name}</strong>! Your interest has been submitted successfully.</p>
    `;
    this.reset();
  } else {
    alert('Please fill out all fields.');
  }
});
