import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
    selector: 'app-event-thumbnail',
    templateUrl: './events-thumbnail.component.html',
    styleUrls: ['./events-thumbnail.component.css']
})

export class EventsThumbnailComponent {
    @Input() eventP: IEvent;
    // tells angular that we expect data from other (parent) component
    // @ -> DECORATOR
    @Output() eventFromChild = new EventEmitter();
    someProperty: any = 'Text from the child component (Thumbnail)';

    messageFromChild() {
        console.log('This is a message from a thumbnail component!');
    }

    passDataToParent() {
        // (click)="hassDataToParent()" on button in html
        this.eventFromChild.emit(this.eventP.name);
        console.log('passing data from thumbnail(child) component: ' + this.eventP.name + ' to who wants to listen');
        /* if we want to pass data from parent to child component so
           that the parent can receive information when some event,
           like click, occurs within child component.
        */
    }

    applyEarlyTimeClasses() {
        const isEarly = this.eventP && this.eventP.time === '8:00 am';
        return {limegreen: isEarly, bold: isEarly};
        // we could also return string or array with classes we want applied, if some condition is met
    }

    applyEarlyTimeStyle(): any {
        if (this.eventP && this.eventP.time === '8:00 am') {
            return { color: 'limegreen', 'font-weight': 'bold' };
        }
        return {};
    }
}
