import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DOMDemoComponent} from './dom-demo/dom-demo.component';
import {FormDemoComponent} from './form-demo/form-demo.component';
import {InteractionParentChildComponent} from './interaction-parent-child/interaction-parent-child.component';
import {ProductSectionSignalsComponent} from './product-signals/product-section/product-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormDemoComponent, DOMDemoComponent, InteractionParentChildComponent, ProductSectionSignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
