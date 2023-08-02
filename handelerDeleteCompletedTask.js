// handelerDeleteCompletedTask.js
function deleteCompletedTask(button) {
  const taskId = button.getAttribute("data-task-id");
  const completedTasksData = localStorage.getItem("completedTasksData");

  if (!completedTasksData) return;

  let completedTasks = JSON.parse(completedTasksData);

  // Găsesc task-ul cu ID-ul dat în task-urile finalizate
  const taskIndex = completedTasks.findIndex((task) => task.id === parseInt(taskId));

  if (taskIndex !== -1) {
    completedTasks.splice(taskIndex, 1);

    // Actualizez task-urile finalizate în localStorage
    localStorage.setItem("completedTasksData", JSON.stringify(completedTasks));

    // Reîncarc pagina pentru a actualiza lista de task-uri
    location.reload();
  }
}
