export class Product {
  id: string;
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.name = name;
    this.price = price;
  }
}
