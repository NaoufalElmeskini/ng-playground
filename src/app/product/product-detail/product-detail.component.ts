import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductService} from '../product.service';

@Component({
  selector: 'product-detail',
  imports: [ReactiveFormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  selectedProductName: string = 'huh?';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.selectedProduct.subscribe(product => {
      this.selectedProductName = product!.name;
    })
  }
}
