'use strict';

const rectangle = {
  width: 5,
  height: 5,
  get rectangularArea() {
    return `${this.width * this.height} см2`;
  },
  get rectangularPerimeter() {
    return `${this.width + this.height} см`;
  },
  set setWidth(value) {
    this.width = value;
  },
  set setHeight(value) {
    this.height = value;
  },
};

console.log(rectangle.rectangularArea);
console.log(rectangle.rectangularPerimeter);