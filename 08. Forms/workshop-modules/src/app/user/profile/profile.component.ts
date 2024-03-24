import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  showEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: 'John Doe',
    tel: '321-123-123',
    email: 'john.doe@gmail.com',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(['bg', 'com'])]],
    tel: [''],
  });

  constructor(private fb: FormBuilder) {}

  onToggle(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfileHandle(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as ProfileDetails;

    this.onToggle()
  }
}
