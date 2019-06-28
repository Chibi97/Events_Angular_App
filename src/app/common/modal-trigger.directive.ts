import { Directive, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Directive({
    selector: '[appModalTrigger]'
})

export class ModalTriggerDirective implements OnInit {
    @Input() content: any;
    constructor(private modalService: NgbModal ) {}

    ngOnInit() {
        this.modalService.open(this.content, { size: 'lg' });
    }
}
