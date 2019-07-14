import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float: right; color: crimson; padding-left: 10px; }
    `]
})
export class LoginComponent {
    userName: string;
    password: string;
    mouseOverLogin;
    loginInvalid = false;

    constructor(private router: Router, private authService: AuthService) { }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
        .subscribe( resp => {
            if (!resp) {
                this.loginInvalid = true;
            } else {
                this.router.navigate(['events']);
            }
        });
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
