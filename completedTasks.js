document.addEventListener("DOMContentLoaded", function () {
  // Apelez funcția pentru a afișa task-urile finalizate
  displayCompletedTasks();
});

function displayCompletedTasks() {
  const completedTasksContainer = document.getElementById("completedTasksContainer");
  completedTasksContainer.innerHTML = "";

  // Preiau task-uri din localStorage pentru "Task Finalizat”
  const completedTasksData = localStorage.getItem("completedTasksData");

  // Dacă există task-uri salvate, le preliau și le afișez
  if (completedTasksData) {
    const tasks = JSON.parse(completedTasksData);
    console.log("completed tasks:", tasks);

    // Afișez cardurile pentru fiecare task din container
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      const cardHtml = `
        <div class="column">
          <div class="cardProgressTasks">
            <div class="second">
              <p class="titleTask">${task.title}</p>
               <div class="buttonTask">
                <button type="button" class="trash" data-task-id="${task.id}" onclick="deleteCompletedTask(this)"> <img alt="trash" class="trash" src="images/trash.png"></button>
              </div>
            </div>
            <div class="contentCardProgressTasks">
              <p><span class="titleContentTask">Description: </span><br>
              ${task.description}</p>
              <p><span class="titleContentTask">E-mail: </span><br>
              ${task.email}</p>
            </div>
          </div>
        </div>
      `;
      completedTasksContainer.insertAdjacentHTML("beforeend", cardHtml);
    }
  }
}
