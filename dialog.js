document.addEventListener('DOMContentLoaded', function () {
  const dialog = document.getElementById('favDialog');
  const addButton = document.getElementById('add-task');
  const cancelButton = document.getElementById('cancelBtn');
  const confirmButton = document.getElementById('confirmBtn');
  const form = document.querySelector('form');

  // Deschid dialogul când apăs butonul "Add Task"
  addButton.addEventListener('click', function () {
    dialog.showModal();
  });

  // Închid dialogul și resetez formularul la apăsarea butonului "Cancel"
  cancelButton.addEventListener('click', function () {
    dialog.close();
    resetForm();
  });

  // Salvez valorile din formular și închid dialogul la apăsarea butonului "Confirm"
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evit trimiterea formularului

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const email = document.getElementById('email').value;

    // Verific dacă formularul este valid înainte de a salva datele
    if (isValidForm(title, description, email)) {
      // Afișez în consolă ceea ce se salvează
      console.log("Task:");
      console.log("Title: " + title);
      console.log("Description: " + description);
      console.log("E-mail: " + email);

      // Salvez datele local în localStorage
      saveDataLocally(title, description, email);

      dialog.close();
      resetForm();
    }
  });

  // Funcție pentru a reseta formularul
  function resetForm() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('email').value = '';
  }

  // Funcție pentru validarea formularului
  function isValidForm(title, description, email) {
    // Verific dacă câmpurile obligatorii sunt completate
    if (!title || !description || !email) {
      alert('All fields are required.');
      return false;
    }
    return true;
  }

  function saveDataLocally(title, description, email) {
  const taskData = {
    id: generateUniqueId(), // ID unic pentru fiecare task
    title: title,
    description: description,
    email: email
  };

  let tasks = JSON.parse(localStorage.getItem('taskData'));

  if (!Array.isArray(tasks)) {
    tasks = []; // Creez un array gol dacă nu există date salvate
  }

  tasks.push(taskData); // Adaug noul task la array

  // Salvez array-ul actualizat în localStorage
  localStorage.setItem('taskData', JSON.stringify(tasks));
}

// Funcție pentru generarea unui ID unic 
  function generateUniqueId() {
    // Pentru exemplul de mai jos, vom folosi un ID incremental bazat pe lungimea array-ului de task-uri
    let tasks = JSON.parse(localStorage.getItem('taskData')) || [];
    return tasks.length + 1; // Incrementez ID-ul cu 1 față de ultimul ID existent
  }

  console.log(localStorage.getItem('taskData'));
});
