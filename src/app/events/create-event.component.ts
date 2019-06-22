import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em { fload: right; color: crimson; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-input-placeholder { color: #999; }
    .error :-moz-input-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class CreateEventComponent {
    newEvent;
    isDirty = true;
    constructor(private router: Router, private eventService: EventService) {}

    cancel() {
        this.router.navigate(['/events']);
        // redirection
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }
}

/**
 * Two options when using Angular forms:
 * 1) Template based
 *    - completely in HTML
 *    - cross field validation is difficult
 *    - unit test are not available if we use it
 *    - good for simple forms
 * 2) Model - Reactive based
 *    - all logic is in the component
 */
