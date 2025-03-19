document.addEventListener('DOMContentLoaded', () => {
  let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false },
  ];
  let todoUl = document.getElementById('myUL');
  let addBtn = document.querySelector('.addBtn');
  let input = document.getElementById('myInput');
  function renderTodoList() {
    todoUl.innerHTML = '';
    todoList.forEach((todo) => {
      let li = document.createElement('li');
      li.textContent = todo.task;
      if (todo.completed) {
        li.classList.add('checked');
      }
      let span = document.createElement('span');
      span.className = 'close';
      span.textContent = '\u00D7';
      li.appendChild(span);
      todoUl.appendChild(li);
    });
  }
  renderTodoList();
  addBtn.addEventListener('click', () => {
    let task = input.value.trim();
    if (task !== '') {
      todoList.push({
        id: todoList.length + 1,
        task: task,
        completed: false,
      });
      input.value = '';
      renderTodoList();
    }
  });
  todoUl.addEventListener('click', (event) => {
    let target = event.target;
    if (target.tagName === 'LI') {
      let taskText = target.textContent;
      todoList = todoList.map((todo) => {
        if (todo.task === taskText.trim()) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      renderTodoList();
    } else if (target.classList.contains('close')) {
      let taskText = target.parentElement.textContent.trim();
      todoList = todoList.filter((todo) => todo.task !== taskText);
      renderTodoList();
    }
  });
});