document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const taskDescription = document.getElementById(
      "new-task-description"
    ).value; // Get task description
    const priority = document.getElementById("priority").value; // Get task priority

    if (taskDescription) {
      // Create a new list item
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      // Assign a class based on priority
      taskItem.classList.add(`${priority}-priority`);

      // Create delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        taskList.removeChild(taskItem); // Remove task from list
      });

      // Append the delete button to the task item
      taskItem.appendChild(deleteButton);

      // Append the task item to the task list
      taskList.appendChild(taskItem);

      // Clear the input fields after task submission
      document.getElementById("new-task-description").value = "";
      document.getElementById("priority").value = "high";
    }
  });
});
