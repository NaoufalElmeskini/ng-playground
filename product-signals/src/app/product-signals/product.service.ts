import {Product} from './product';
import {Injectable, signal} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ProductService {
  selectedProduct= signal<Product|undefined>(undefined);
}
