document.addEventListener('DOMContentLoaded', () => {
  let taskInput = document.getElementById('taskInput');
  let addBtn = document.getElementById('addBtn');
  let taskList = document.getElementById('taskList');
  let tasks = [];
  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      let li = document.createElement('li');
      li.textContent = task;
      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'X';
      deleteBtn.className = 'deleteBtn';
      deleteBtn.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn xóa nhiệm vụ này?')) {
          tasks.splice(index, 1);
          renderTasks();
        }
      });
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }
  addBtn.addEventListener('click', () => {
    let task = taskInput.value.trim();
    if (task !== '') {
      tasks.push(task);
      taskInput.value = '';
      renderTasks();
    }
  });
});