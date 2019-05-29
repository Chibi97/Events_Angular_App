import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-event-thumbnail',
    template: `
        <div class="row border rounded p-3">
            <div class="event-card col-12 col-md-7">
                <h2 class="pb-3"> {{ event.name }} </h2>
                <h5 class="card-title">Price: \${{ event.price }}</h5>
                <p class="card-text">Date: {{ event.date }}</p>
                <p class="card-text">Time: {{ event.time }}</p>
                <p class="card-text">Location: {{ event.location.address }}<span class="pad-left">{{ event.location.city }}, 
                  {{ event.location.country}}</span></p>
                <button class="btn btn-primary" (click)="handleClick()" >More information</button>
            </div>
            <div class="col-12 col-md-5">
                <img src='{{ event.imageUrl }}' width='300' height='auto'/>
            </div>
        </div>
    `,
    styleUrls: ['./events-thumbnail.component.css']
})

export class EventsThumbnailComponent {
    @Input() event: any;
    // tells angular that we expect data from other (child) component
    // @ -> DECORATOR
    @Output() eventClick = new EventEmitter();
    someProperty: any = 'Text from the child component (Thumbnail)';

    handleClick() {
        this.eventClick.emit(this.event.name);
        console.log('passing data: ' + this.event.name + ' to who wants to listen');
    }
    // if we want to pass data from parent to child component
    // so that the parent can receive some info when some event
    // like click occurs within child component.

    logFoo() {
        console.log('foo');
    }
}
