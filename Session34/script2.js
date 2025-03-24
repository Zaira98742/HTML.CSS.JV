document.addEventListener('DOMContentLoaded', () => {
  let taskForm = document.getElementById('taskForm');
  let taskList = document.getElementById('taskList').getElementsByTagName('tbody')[0];
  let courses = JSON.parse(localStorage.getItem('courses')) || [
    { id: 1, content: 'Learn Javascript Session 01', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Anh Bách' },
    { id: 2, content: 'Learn Javascript Session 2', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Lâm' },
    { id: 3, content: 'Learn CSS Session 1', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Hiếu Ci ớt ớt' }
  ];
  let editingId = null;
  function renderTasks() {
    taskList.innerHTML = '';
    courses.forEach(task => {
      let row = taskList.insertRow();
      row.insertCell().textContent = task.id;
      row.insertCell().textContent = task.content;
      row.insertCell().textContent = task.dueDate;
      row.insertCell().textContent = task.status;
      row.insertCell().textContent = task.assignedTo;
      let actions = row.insertCell();
      let editBtn = document.createElement('button');
      editBtn.textContent = 'Sửa';
      editBtn.className = 'editBtn';
      editBtn.addEventListener('click', () => editTask(task.id));
      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Xóa';
      deleteBtn.className = 'deleteBtn';
      deleteBtn.addEventListener('click', () => deleteTask(task.id));
      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);
    });
    localStorage.setItem('courses', JSON.stringify(courses));
  }
  function addTask(event) {
    event.preventDefault();
    let content = document.getElementById('content').value;
    let dueDate = document.getElementById('dueDate').value;
    let status = document.getElementById('status').value;
    let assignedTo = document.getElementById('assignedTo').value;
    if (editingId) {
      let index = courses.findIndex(task => task.id === editingId);
      courses[index] = { id: editingId, content, dueDate, status, assignedTo };
      editingId = null;
    } else {
      let id = courses.length ? courses[courses.length - 1].id + 1 : 1;
      courses.push({ id, content, dueDate, status, assignedTo });
    }
    taskForm.reset();
    renderTasks();
  }
  function editTask(id) {
    let task = courses.find(task => task.id === id);
    document.getElementById('content').value = task.content;
    document.getElementById('dueDate').value = task.dueDate;
    document.getElementById('status').value = task.status;
    document.getElementById('assignedTo').value = task.assignedTo;
    editingId = id;
  }
  function deleteTask(id) {
    courses = courses.filter(task => task.id !== id);
    renderTasks();
  }
  taskForm.addEventListener('submit', addTask);
  renderTasks();
});