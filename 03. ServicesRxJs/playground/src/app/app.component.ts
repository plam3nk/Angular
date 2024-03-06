import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent implements OnInit {
  title = 'playground';
  appUsers: User[] = [];

  constructor(private userService: UserService) {
    this.appUsers = this.userService.users;
  }

  ngOnInit(): void {
    // this.userService.getUsers().then((users) => {
    //   console.log('user data', users);
    //   this.appUsers = users;
    // });

    this.userService.getUsers().subscribe((users) => {
      console.log('user data', users);
      this.appUsers = users;
    });
  }

  setUsers(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // Validation
    this.userService.addUser(inputName, inputAge);
    // Additional func
  }

  // constructor(private cd: ChangeDetectorRef) {
  //   setTimeout(() => {
  //     this.title = 'Changed';
  //     this.cd.detectChanges();
  //   }, 3000);
  // }
}
