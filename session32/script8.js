document.addEventListener('DOMContentLoaded', () => {
  let taskInput = document.getElementById('taskInput');
  let addBtn = document.getElementById('addBtn');
  let taskList = document.getElementById('taskList');
  let tasks = [];
  let editingIndex = -1;
  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      let li = document.createElement('li');
      li.textContent = task;
      let editBtn = document.createElement('button');
      editBtn.textContent = 'Sửa';
      editBtn.className = 'editBtn';
      editBtn.addEventListener('click', () => {
        editingIndex = index;
        taskInput.value = task;
        addBtn.textContent = 'Cập nhật';
      });
      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Xóa';
      deleteBtn.className = 'deleteBtn';
      deleteBtn.addEventListener('click', () => {
        tasks.splice(index, 1);
        renderTasks();
      });
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }
  addBtn.addEventListener('click', () => {
    let task = taskInput.value.trim();
    if (task !== '') {
      if (editingIndex === -1) {
        tasks.push(task);
      } else {
        tasks[editingIndex] = task;
        editingIndex = -1;
        addBtn.textContent = 'Thêm';
      }
      taskInput.value = '';
      renderTasks();
    }
  });
});