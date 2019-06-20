import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <h1>New Event</h1>
        <hr>
        <div class="col-md-6">
            <h3>Create Event Form placeholder</h3>
            <br/>
            <br/>
            <button type="submit" class="btn pink-primary">Save</button>
            <button type="button" (click)="cancel()" class="btn pink-default">Cancel</button>
        </div>
    `
})

export class CreateEventComponent {
    isDirty = true;
    constructor(private router: Router) {}

    cancel() {
        this.router.navigate(['/events']);
        // redirection
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
