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
});
