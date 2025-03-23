let products = [
  {
    id: 1,
    name: "Laptop Dell XPS 15",
    price: 35990000,
    image: "https://th.bing.com/th/id/R.0088e48234a1ca181d7bb8f7993a1006?rik=IlaogbLFlzIIlTA&pid=ImgRaw&r=0",
    description: "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.",
  },
  {
    id: 2,
    name: "Iphone 15 Pro Max",
    price: 32990000,
    image: "https://th.bing.com/th/id/OIP.ROkvm8Vanez_455ut8uaGaeF7rs?pid=ImgDetMain",
    description: "Điện thoại Flagship của Apple với camera 48MP và chip A17 Pro.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: 28900000,
    image: "http://th.bing.com/th/id/OIP.H81NK3r2rs?pid=ImgDetMain",
    description: "Điện thoại Android mạnh mẽ với bút S Pen và camera tele zoom.",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM5",
    price: 1990000,
    image: "https://th.bing.com/th/id/OIP.H81NK3r2rs?pid=ImgDetMain",
    description: "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 10 giờ.",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 11950000,
    image: "https://ngr.com.vn/content/uploads/2023/09/Apple-watch-Series-9.jpg",
    description: "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.",
  },
  {
    id: 6,
    name: "Loa JBL Charge 5",
    price: 1990000,
    image: "https://th.bing.com/th/id/OIP.A86s6LW41NQxr0d5J9hioQHaHa&pid=ImgDetMain",
    description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.",
  },
];
let productList = document.getElementById("productList");
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");
function displayProducts(productsToDisplay) {
  productList.innerHTML = "";

  productsToDisplay.forEach(function (product) {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product");
    let image = document.createElement("img");
    image.src = product.image;
    productDiv.appendChild(image);
    let name = document.createElement("h2");
    name.textContent = product.name;
    productDiv.appendChild(name);
    let price = document.createElement("p");
    price.textContent = "Giá: " + product.price + " VND";
    productDiv.appendChild(price);
    let description = document.createElement("p");
    description.textContent = product.description;
    productDiv.appendChild(description);
    productList.appendChild(productDiv);
  });
}
searchButton.addEventListener("click", function () {
  let searchTerm = searchInput.value.toLowerCase();
  let filteredProducts = products.filter(function (product) {
    return product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
  });
  displayProducts(filteredProducts);
});
displayProducts(products);