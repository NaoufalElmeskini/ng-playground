import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {Product} from '../product';
import {NgForOf} from '@angular/common';
import {ProductService} from '../product.service';

@Component({
  selector: 'product-list',
  imports: [ReactiveFormsModule, NgForOf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  selectedProductName='huh?';

  ngOnInit() {
    this.products = [
      new Product('product 1', 100),
      new Product('product 2', 200)
    ];
    this.productService.selectedProduct.subscribe(product => {
      this.selectedProductName = product!.name;
    })
  }
  constructor(private productService: ProductService) { }

  selectProduct(productId: string) {
    const prod = this.products.find(product => product.id === productId);
    console.log(productId);

    this.productService.selectedProduct.next(prod);
  }
}
