import {Component} from '@angular/core';

@Component({
    selector: 'app-events-list',
    // templateUrl: './events-list.component.html'
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            <app-event-thumbnail #thumbnail [event]="eventObj"></app-event-thumbnail>
            <h3>{{ thumbnail.someProperty }}</h3>
            <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log foo</button>
        </div>`
    /**
     * ~~~PROPERTY BINDING
     * So basically, with [] we are telling Angular that we'll pass paramter form this component
     * to Event-Thumbnails component (which will be named there as "event"
     * -- name must match with object name in the child component that expects param (Thumbnail))
     *
     * ~~~EVENT BINDING
     * <app-event-thumbnail (eventClick)="handleEventClick($event)" ></app-event-thumbnail>
     * "eventClick" must match @Output "eventClick" property in a child component!
     * So the event is fired on our thumbnail(child), call function handleEventClick from this (parent)
     * component. $event is the parameter that child has given us. If we want more params, we should
     * wrap them into an object.
     *
     * ~~~TEMPLATE REFERENCE VAIRABLES
     * Declared with # as prefix
     * Useful to call methods/props on a child component or to bind data in a child
     * So that #variable points to a component, and then we can access any public methods/props
     * of that component using #variable.
     */
})

export class EventsListComponent {
    eventObj = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    };

    // handleEventClick(data) {
    //     console.log('recieved:', data);
    // }
}
