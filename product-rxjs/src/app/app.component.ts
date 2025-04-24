import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProductSectionRxjsComponent} from './product/product-section/product-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductSectionRxjsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
