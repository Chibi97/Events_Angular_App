import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
    selector: 'app-events',
    // HTML tag which loads the component
    template: `
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>
    `
    // When a user request a route, display its component here
    // removed bcz we'll use routing system: <app-events-list></app-events-list>
})
export class EventsAppComponent implements OnInit {
    title = 'Angular app';

    constructor(private auth: AuthService) {}

    ngOnInit() {
        this.auth.checkAuthStatus();
    }
}

