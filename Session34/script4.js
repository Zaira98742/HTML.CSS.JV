document.addEventListener('DOMContentLoaded', () => {
  let taskInput = document.getElementById('taskInput');
  let addBtn = document.getElementById('addBtn');
  let taskList = document.getElementById('taskList');
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      let li = document.createElement('li');
      li.textContent = task;
      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Xóa';
      deleteBtn.className = 'deleteBtn';
      deleteBtn.addEventListener('click', () => {
        tasks.splice(index, 1);
        renderTasks();
      });
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  addBtn.addEventListener('click', () => {
    let task = taskInput.value.trim();
    if (task !== '') {
      tasks.push(task);
      taskInput.value = '';
      renderTasks();
    }
  });
  renderTasks();
});