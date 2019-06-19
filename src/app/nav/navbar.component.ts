import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: [
        `li > a.active { color: #AA6373 !important; font-weight: bold !important; }`
    ]
})

export class NavbarComponent {
    isNavbarCollapsed = true;
}
