import { Component } from '@angular/core';

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
export class EventsAppComponent {
    title = 'Angular app';
}

