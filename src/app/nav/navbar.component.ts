import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: [
        `li > a.active { color: #AA6373 !important; font-weight: bold !important; }`
    ]
})

export class NavbarComponent {
    isNavbarCollapsed = true;

    constructor(public auth: AuthService) {

    }
}
