import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DOMDemoComponent} from './dom-demo/dom-demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DOMDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
