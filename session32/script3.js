document.addEventListener('DOMContentLoaded', () => {
  let subjectNameInput = document.getElementById('subjectName');
  let addSubjectBtn = document.getElementById('addSubjectBtn');
  let subjectList = document.getElementById('subjectList');
  let subjects = [];
  function renderSubjects() {
    subjectList.innerHTML = '';
    subjects.forEach(subject => {
      let li = document.createElement('li');
      li.textContent = subject;
      subjectList.appendChild(li);
    });
  }
  addSubjectBtn.addEventListener('click', () => {
    let subjectName = subjectNameInput.value.trim();
    if (subjectName === '') {
      alert('Tên môn học không được để trống');
      return;
    }
    subjects.push(subjectName);
    subjectNameInput.value = '';
    renderSubjects();
  });
});