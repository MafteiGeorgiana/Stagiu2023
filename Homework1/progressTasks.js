document.addEventListener('DOMContentLoaded', function () {
  function displayProgressTasks() {
    const progressTasksContainer = document.getElementById('progressTasksContainer');
    progressTasksContainer.innerHTML = '';

    // Obțin datele salvate din localStorage
    const progressTasksData = localStorage.getItem('taskData');

    // Dacă există date salvate, le voi prelua din localStorage
    if (progressTasksData) {
      const tasks = JSON.parse(progressTasksData);
      console.log('tasks:', tasks);

      // Afișez cardurile pentru fiecare task în container
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const cardHtml = `
          <div class="column">
            <div class="cardProgressTasks">
              <div class="second">
                <p class="titleTask"> ${task.title}</p>
                <div class="buttonTask">
                  <button type="button" class="edit" data-task-id="${task.id}"><img alt="edit" class="edit" src="images/edit.png"></button>
                  <button type="button" class="plus" data-task-id="${task.id}" ><img alt="plus" class="plus" src="images/plus.png"></button>
                  <button type="button" class="trash" data-task-id="${task.id}" ><img alt="trash" class="trash" src="images/trash.png"></button>
                </div>
              </div>
              <div class="contentCardProgressTasks">
                <p><span class="titleContentTask">Description: </span> <br>
                ${task.description}</p>
                <p><span class="titleContentTask">E-mail: </span> <br>
                ${task.email}</p>
              </div>
            </div>
          </div>
        `;
        progressTasksContainer.insertAdjacentHTML('beforeend', cardHtml);
      }
    }
  }

  // Apelez funcția de afișare pentru a afișa cardurile
  displayProgressTasks();

  // Adaug un ascultător de eveniment pentru fiecare buton de editare
  const editButtons = document.querySelectorAll('.edit');
  editButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const taskId = parseInt(button.dataset.taskId);
      openEditDialog(taskId);
    });
  });

  // Funcția pentru deschiderea ferestrei de editare
  function openEditDialog(taskId) {
    const tasks = JSON.parse(localStorage.getItem('taskData')) || [];
    const task = tasks.find((task) => task.id === taskId);

    if (!task) return;

    document.getElementById('edit-title').value = task.title;
    document.getElementById('edit-description').value = task.description;
    document.getElementById('edit-email').value = task.email;

    // Deschid fereastra 
    editDialog.showModal();

    // Adaug un ascultător pentru butonul de salvare din fereastră
    editConfirmButton.addEventListener('click', function () {
      const updatedTitle = document.getElementById('edit-title').value;
      const updatedDescription = document.getElementById('edit-description').value;
      const updatedEmail = document.getElementById('edit-email').value;

      // Actualizez datele task-ului în array
      task.title = updatedTitle;
      task.description = updatedDescription;
      task.email = updatedEmail;

      // Actualizez datele în localStorage
      localStorage.setItem('taskData', JSON.stringify(tasks));

      // Închid fereastra modală
      editDialog.close();

      // Reafișez task-urile actualizate
      displayProgressTasks();
    });

    // Adaugă un ascultător pentru butonul de anulare din fereastră
    editCancelButton.addEventListener('click', function () {
      // Închide fereastra modală
      editDialog.close();
    });
  }

});


