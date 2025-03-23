let dish = [
  { name: 'Rau sạch', category: 'Đồ ăn' },
  { name: 'Thịt lợn', category: 'Đồ ăn' },
  { name: 'Pepsi không calo', category: 'Nước' },
  { name: 'Cocacola', category: 'Nước' },
  { name: 'Cờ lê', category: 'Dụng cụ' },
  { name: 'Tuy vít', category: 'Dụng cụ' },
];
let categorySelect = document.getElementById('categorySelect');
let filterButton = document.getElementById('filterButton');
let productList = document.getElementById('productList');
filterButton.addEventListener('click', function() {
  let selectedCategory = categorySelect.value;
  productList.innerHTML = '';
  if (selectedCategory === '') {
  }
  let filteredProducts = dish.filter(function(product) {
    return product.category === selectedCategory;
  });
  filteredProducts.forEach(function(product) {
    let listItem = document.createElement('li');
    listItem.textContent = `Tên đồ ăn: ${product.name} - Danh mục: ${product.category}`;
    productList.appendChild(listItem);
  });
});