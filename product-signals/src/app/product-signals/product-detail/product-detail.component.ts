import {Component, computed, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductService} from '../product.service';

@Component({
  selector: 'product-detail',
  imports: [ReactiveFormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  productService = inject(ProductService);
  selectedProductName = computed(() =>
    this.productService.selectedProduct() ? this.productService.selectedProduct()?.name : 'huh'
  )
}
