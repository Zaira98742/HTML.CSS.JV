let weatherData = [
  {
    city: "Hà Nội",
    temperature: 28,
    humidity: 70,
    windspeed: 5,
    description: "Có mây",
    icon: "☁️"
  },
  {
    city: "Hồ Chí Minh",
    temperature: 32,
    humidity: 75,
    windspeed: 7,
    description: "Nắng",
    icon: "☀️"
  },
  {
    city: "Đà Nẵng",
    temperature: 30,
    humidity: 82,
    windspeed: 10,
    description: "Mưa rào",
    icon: "️"
  }
];
let cityInput = document.getElementById("cityInput");
let searchButton = document.getElementById("searchButton");
let weatherInfo = document.getElementById("weatherInfo");
searchButton.addEventListener("click", function() {
  let cityName = cityInput.value;
  let cityData = weatherData.find(function(item) {
    return item.city.toLowerCase() === cityName.toLowerCase();
  });
  if (cityData) {
    weatherInfo.innerHTML = `
      <p>${cityData.icon} ${cityData.description}</p>
      <p>${cityData.temperature}°C Độ ẩm: ${cityData.humidity}%</p>
      <p>Tốc độ gió: ${cityData.windspeed} km/h</p>
    `;
  } else {
    weatherInfo.innerHTML = "<p>Không tìm thấy thông tin thời tiết cho thành phố này.</p>";
  }
});