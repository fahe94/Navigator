function checkPassword() {
  const password = document.getElementById('password').value;
  const correctPassword = "geheim123"; // Hier dein Passwort festlegen

  if (password === correctPassword) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('protected-content').style.display = 'block';
  } else {
    document.getElementById('error').textContent = 'Falsches Passwort. Bitte versuche es erneut.';
  }
}
