import { Component } from '@angular/core';
import { MyStructureDirective } from '../my-structure.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isShown: boolean = true;

  toggle() {
    this.isShown = !this.isShown;
  }

  simpleClick(directiveRef: MyStructureDirective) {
    console.log(directiveRef);
  }
}
