let company = {
  name: "RikkeiSoft",
  location: "Ha Noi",
  employees: [
    { name: "Nguyen Van Luan", position: "Developer" },
    { name: "Nguyen Van Hoang", position: "Tester" },
    { name: "Hoang Nam cao", position: "Manager" }
  ]
};
console.log("Ten cong ty: " + company.name);
for (let i = 0; i < company.employees.length; i++) {
  console.log("Ten nhan vien: " + company.employees[i].name);
}