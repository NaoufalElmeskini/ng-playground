import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProductSectionSignalsComponent} from './product-signals/product-section/product-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductSectionSignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
