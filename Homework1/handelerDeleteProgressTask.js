document.addEventListener("DOMContentLoaded", function () {
  // Adaug ascultători de evenimente pentru toate butoanele coș pentru a 
  // gestiona ștergerea task-urilor
  const trashButtons = document.querySelectorAll(".trash");
  trashButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const taskId = parseInt(button.dataset.taskId); // Obțin taskId din atributul "data-task-id”
      deleteTask(taskId);
      // Opțional
      const taskElement = button.closest(".column");
      taskElement.remove();
    });
  });
});

function deleteTask(taskId) {
  // Preiau task-urile din localStorage
  const tasks = JSON.parse(localStorage.getItem("taskData")) || [];

  // Găsesc indexul task-ului cu ID-ul dat
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  console.log("taskId:", taskId);
  console.log("tasks:", tasks);

  // Dacă task-ul a fost găsit, eliminați-l din matricea tasks
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    // Actualizez task-urile în localStorage
    localStorage.setItem("taskData", JSON.stringify(tasks));
  }
}


