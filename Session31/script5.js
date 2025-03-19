document.addEventListener('DOMContentLoaded', () => {
  let employees = [
    { id: 1, name: 'John', age: 18, address: 'New York' },
    { id: 2, name: 'Mike', age: 22, address: 'Canada' },
    { id: 3, name: 'Linda', age: 19, address: 'California' },
    { id: 4, name: 'Peter', age: 25, address: 'London' },
    { id: 5, name: 'Tony', age: 17, address: 'New York' },
  ];
  let employeeList = document.getElementById('employeeList');
  employees.forEach(employee => {
    let row = document.createElement('tr');
    let idCell = document.createElement('td');
    idCell.textContent = employee.id;
    row.appendChild(idCell);
    let nameCell = document.createElement('td');
    nameCell.textContent = employee.name;
    row.appendChild(nameCell);
    let ageCell = document.createElement('td');
    ageCell.textContent = employee.age;
    row.appendChild(ageCell);
    let addressCell = document.createElement('td');
    addressCell.textContent = employee.address;
    row.appendChild(addressCell);
    employeeList.appendChild(row);
  });
});