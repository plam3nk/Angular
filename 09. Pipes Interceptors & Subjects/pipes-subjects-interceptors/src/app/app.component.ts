import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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

  p = new Promise((resolve) => {
    setTimeout(() => {
      resolve(1111);
    }, 3000);
  });

  // Clock
  time$ = interval(1000).pipe(map(() => new Date()));

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.userService.loadUsers().subscribe({
    //   // next: (data)=> console.log(data),
    // });
  }

  user$ = this.userService.userObs$;
  isLoading$ = this.userService.isLoading$;

  reloadUsers() {
    this.userService.loadUsers();
  }

  loadUsers() {
    this.userService.loadUsers();
  }
}
