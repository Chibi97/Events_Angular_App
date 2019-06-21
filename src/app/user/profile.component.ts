import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    template: `
    <h1>Edit Your Profile</h1>
    <hr>
    <div class="col-md-6">
      <h3>Edit profile form will go here</h3>
      <br />
      <br />
      <button type="submit" class="btn pink-primary">Save</button>
      <button type="button" class="btn pink-default">Cancel</button>
    </div>
  `,
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
  //   let firstName = new FormControl(
  //     this.authService.currentUser.firstName, Validators.required
  //   );

  //   let lastName = new FormControl(
  //     this.authService.currentUser.lastName, Validators.required
  //   );
  // }

}

