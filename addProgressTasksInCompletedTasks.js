document.addEventListener("DOMContentLoaded", function () {
  const plusButtons = document.querySelectorAll(".plus");
  plusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const taskId = button.getAttribute("data-task-id");
      moveTaskToCompleted(taskId);
    });
  });
});

function moveTaskToCompleted(taskId) {
  // Preiau task-urile din localStorage
  const progressTasksData = localStorage.getItem("taskData");
  const completedTasksData = localStorage.getItem("completedTasksData");

  // Dacă nu există task-uri în localStorage, revin
  if (!progressTasksData) return;

  // Analizez datele task-urilor din localStorage
  let progressTasks = JSON.parse(progressTasksData);
  let completedTasks = JSON.parse(completedTasksData) || [];

  // Găsesc task-ul cu ID-ul dat în task-urile de progres
  const taskIndex = progressTasks.findIndex((task) => task.id === parseInt(taskId));

  // Dacă task-ul a fost găsit, mutați-l în matricea de task-uri finalizate
  if (taskIndex !== -1) {
    const completedTask = progressTasks.splice(taskIndex, 1)[0];
    completedTasks.push(completedTask);

    // Actualizez task-urile în localStorage
    localStorage.setItem("taskData", JSON.stringify(progressTasks));
    localStorage.setItem("completedTasksData", JSON.stringify(completedTasks));

    // Reîncărc pagina pentru a actualiza listele de task-uri
    location.reload();
  }
}
