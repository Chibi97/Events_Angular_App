import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-upvote',
    template: `
        <div (click)="onClick()" class="pointable">
            <div class="hearts">
                <i [class]="iconClass"></i>
            </div>
            <p class="votes">{{ count }}</p>
        </div>
    `,
    styles: [`
        .votes { text-align: center !important; font-size: .8rem !important; }
        i { color: #AA6373; font-size: 1.7rem; padding-top: .5em},
    `]
})
export class UpvoteComponent {
    iconClass: string;
    @Input() count: number;
    // @Input setter
    @Input() set voted(val) {
        // when we click on the heart, the val becomes true, so it gains fas class (full heart)
        this.iconClass = val ? 'fas fa-heart' : 'far fa-heart';
    }
    @Output() vote = new EventEmitter();

    onClick() {
        this.vote.emit({});
    }

    toggleVote(session) {

    }

    userHasVoted(session) {

    }
}
