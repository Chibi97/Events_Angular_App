import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-collapsible-block',
    template: `
        <div (click)="toggleContent()" class="indigo-block pointable">
            <i class="fas fa-chevron-down float-right" *ngIf="!visible"></i>
            <i class="fas fa-chevron-up float-right" *ngIf="visible"></i>
            <h4>{{ title }}</h4>
            <ng-content *ngIf="visible" ></ng-content>
        </div>
    `
})
// <ng-content></ng-content> is like yield in laravel

export class CollapsibleBlockComponent {
    @Input() title: string;
    visible: boolean;

    toggleContent() {
        this.visible = !this.visible;
    }

}
