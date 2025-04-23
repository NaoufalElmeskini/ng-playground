import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {Product} from '../product';
import {ProductListComponent} from '../product-list/product-list.component';
import {ProductDetailComponent} from '../product-detail/product-detail.component';

@Component({
  selector: 'product-section',
  imports: [ReactiveFormsModule, ProductListComponent, ProductDetailComponent],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css'
})
export class ProductSectionComponent {
  @ViewChild('divContainer')
  containerChild!: ElementRef<HTMLElement>;

  message = 'default';
  products: Product[] = [
      new Product('product 1', 100),
      new Product('product 2', 200)
  ]
}
