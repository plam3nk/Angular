import { Injectable, OnDestroy } from '@angular/core';
import { User } from './types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  URL = 'https://jsonplaceholder.typicode.com/users';
  users: User[] = [
    { name: 'Ivan', age: 20 },
    { name: 'Pencho', age: 40 },
    { name: 'Asen', age: 30 },
    { name: 'Petar', age: 25 },
  ];

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
    //clear terminal, detach from events
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user: User = {
      name: inputName.value,
      age: Number(inputAge.value),
    };

    this.users = [...this.users, user];

    inputName.value = '';
    inputAge.value = '';
  }

  getUsers() {
    //   return fetch(this.URL).then(res => res.json());
    return this.http.get<User[]>(this.URL)
  }
}
