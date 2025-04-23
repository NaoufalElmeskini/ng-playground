import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {Product} from '../product';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'product-list',
  imports: [ReactiveFormsModule, NgForOf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  selectedProduct='huh?';

  ngOnInit() {
   this.products = [
     new Product('product 1', 100),
     new Product('product 2', 200)
   ];
  }

  selectProduct(productId: string) {
    console.log(productId)
  }
}
