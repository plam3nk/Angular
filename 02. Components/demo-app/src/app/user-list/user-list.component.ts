import { Component } from '@angular/core';

type User = {
  name: string,
  age: number,
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    {name: 'Pesho', age: 18},
    {name: 'Ivan', age: 28},
    {name: 'Asen', age: 68},
    {name: 'Petar', age: 48},
  ] as User[];
}
