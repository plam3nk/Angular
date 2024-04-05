import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubj$$ = new BehaviorSubject<Object | null>(null);
  private isLoading$$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  public userObs$ = this.userSubj$$.asObservable();
  public isLoading$ = this.isLoading$$.asObservable();

  loadUsers() {
    this.userSubj$$.next(null);
    this.isLoading$$.next(true);

    this.http.get('/api/users').subscribe((users) => {
      this.userSubj$$.next(users);
      this.isLoading$$.next(false);
    });
  }
}
