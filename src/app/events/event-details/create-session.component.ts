import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index';

@Component({
    selector: 'app-create-session',
    templateUrl: './create-session.component.html',
    styles: [`
    em { fload: right; color: crimson; padding-left: 10px; }
    .error input, .error select, .error textarea
        { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-input-placeholder { color: #999; }
    .error :-moz-input-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter(); // emit msg to parent component when session is saved
    @Output() cancelAddSession = new EventEmitter();
    sessionForm: FormGroup;
    // since we defined public form controls here, in HTML we can access it like name.valid
    // we don't have to type form.controls.name everytime.
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required,
            Validators.maxLength(400), restrictedWords(['fuck', 'damn'])]
        );

        this.sessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    saveSession(values) {
        const session: ISession = {
            id: undefined,
            name: values.name,
            presenter: values.presenter,
            duration: +values.duration,
            level: values.level,
            abstract: values.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    }

    cancel() {
        this.cancelAddSession.emit();
    }
}
