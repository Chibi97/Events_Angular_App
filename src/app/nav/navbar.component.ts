import { Component, Input } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: [
        `li > a.active { color: #AA6373 !important; font-weight: bold !important; }`
    ]
})

export class NavbarComponent {
    isNavbarCollapsed = true;
    searchTerm = '';
    foundSessions: ISession[];
    @Input() content: any;

    constructor(public auth: AuthService, private eventService: EventService, private router: Router) {

    }

    searchSessions(searchTerm) {
        this.eventService
        .searchSessions(searchTerm)
        .subscribe(sessions => {
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        });
    }

    logout() {
        this.auth.logout().subscribe(() => {
            this.router.navigate(['/user/login']);
        });
    }

    // Component is an element, and Directive is an attribute, and with it
    // we can attach new functionality to an existing DOM element.
}
