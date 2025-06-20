function showMessage(event) {
  event.preventDefault();
  document.getElementById('msg').textContent = "✅ Message sent successfully!";
  setTimeout(() => {
    document.getElementById('msg').textContent = "";
  }, 4000);
}
