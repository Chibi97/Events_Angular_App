import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { fload: right; color: crimson; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-input-placeholder { color: #999; }
    .error :-moz-input-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName,
      [Validators.required, Validators.pattern('[A-Z][a-z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName,
      [Validators.required, Validators.pattern('[A-Z][a-z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  validField(field) {
    return field.valid || field.untouched;
  }

  saveProfile(values) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(values.firstName, values.lastName);
      this.router.navigate(['events']);
    }
  }

  cancel() {
    this.router.navigate(['events']);
  }
}


