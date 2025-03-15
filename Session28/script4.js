let rectangle = {
  width: 10,
  height: 5,
  getArea: function() {
    return this.width * this.height;
  }
};
rectangle.getArea();
console.log("dien tich hinh chu nhat: " + rectangle.getArea());