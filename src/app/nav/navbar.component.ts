import { Component, Input } from '@angular/core';
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
    @Input() content: any;

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

    // Component is an element, and Directive is an attribute, and with it
    // we can attach new functionality to an existing DOM element.
}
