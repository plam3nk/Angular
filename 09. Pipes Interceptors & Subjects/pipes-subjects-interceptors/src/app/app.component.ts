import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipes-subjects-interceptors';

  user = {
    name: 'Viki',
    age: '20',
    list: [1, 2, 3, 4, 5, 6],
  };

  sum(acc: number, curr: number): number {
    return acc + curr;
  }

  addProperty() {
    (this.user as any).test = 'test123';
  }
}
