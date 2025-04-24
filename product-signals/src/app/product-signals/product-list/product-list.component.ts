import {Component, computed, inject, OnInit} from '@angular/core';
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

  productService: ProductService = inject(ProductService);
  products!: Product[];
  selectedProductName= computed(() =>
    this.productService.selectedProduct() ? this.productService.selectedProduct()?.name : 'huh?');

  ngOnInit() {
    this.products = [
      new Product('product 1', 100),
      new Product('product 2', 200)
    ];
  }

  selectProduct(productId: string) {
    console.log('changed!')
    const selected = this.products.find(product => product.id === productId);
    this.productService.selectedProduct.set(selected);
  }
}
