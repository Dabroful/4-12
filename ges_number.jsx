'use strict';

const cart = {
  items: [],
  count: 0,
  calcItemPrice: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(product, price, amount = 1) {
    const newItem = {
      product,
      price,
      amount,
    };

    this.items.push(newItem);
    this.increaseCount();
  },
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },
  increaseCount() {
    this.count = this.items.reduce((acc, {amount}) => acc + amount, 0);
  },
  calculateItemPrice() {
    let itemsPrice = null;
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      itemsPrice += (item.price * item.amount);
    }
    if (this.discount > 0) {
      itemsPrice -= itemsPrice * this.discount / 100;
    }
    this.calcItemPrice += itemsPrice;
    console.log(this.calcItemPrice);
    return this.calcItemPrice;
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    const cartPrint = JSON.stringify(this.items);

    console.log(`Ваша корзина состоит из ${cartPrint}.
    Общая стоимость: ${this.totalPrice}`);
  },
};

cart.add('Notebook', 2, 45000);
cart.add('Mousepad', 3, 3500);
cart.add('Smartphone', 4, 35000);
cart.setDiscount = 'METHED';

cart.print();