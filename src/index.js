document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks'); // Assuming there's an element with id 'tasks' to display the list

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get the task description
      const taskDescription = document.getElementById('new-task-description').value;

      // Create a new task item
      const taskItem = document.createElement('li');
      taskItem.innerText = taskDescription;

      // Optional: Add a delete button
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', function(e) {
          taskItem.remove();
      });

      taskItem.appendChild(deleteButton);

      // Append the new task to the task list
      taskList.appendChild(taskItem);

      // Clear the input field
      form.reset();
  });
});


