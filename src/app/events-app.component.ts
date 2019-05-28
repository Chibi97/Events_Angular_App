import { Component } from '@angular/core';

@Component({
    selector: 'app-events',
    // HTML tag which loads the component
    template: `
        <app-events-list></app-events-list>
    `
})
export class EventsAppComponent {
    title = 'Angular app';
}
