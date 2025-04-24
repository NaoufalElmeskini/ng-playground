import {Subject} from 'rxjs';
import {Product} from './product';
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ProductService {
  selectedProduct: Subject<Product|undefined> = new Subject();
}
