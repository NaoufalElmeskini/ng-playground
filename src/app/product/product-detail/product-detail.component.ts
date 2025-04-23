import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {Product} from '../product';

@Component({
  selector: 'product-detail',
  imports: [ReactiveFormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @ViewChild('divContainer')
  containerChild!: ElementRef<HTMLElement>;

  message = 'default';
  products: Product[] = [
      new Product('product 1', 100),
      new Product('product 2', 200)
  ]
}
