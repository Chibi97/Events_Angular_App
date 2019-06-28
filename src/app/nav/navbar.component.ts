import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

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

    constructor(public auth: AuthService, private eventService: EventService) {

    }

    searchSessions(searchTerm) {
        this.eventService
        .searchSessions(searchTerm)
        .subscribe(sessions => {
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        });
    }
}
