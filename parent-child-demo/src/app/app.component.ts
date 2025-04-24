import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {InteractionParentChildComponent} from './interaction-parent-child/interaction-parent-child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InteractionParentChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
