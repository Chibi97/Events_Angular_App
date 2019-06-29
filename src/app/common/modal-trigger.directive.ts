import { Directive, OnInit, Input, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Directive({
    selector: '[appModalTrigger]'
})

export class ModalTriggerDirective implements OnInit {
    @Input() content: any;
    // @Input('appModalTrigger') modal: string; we can get the value of appModalTrigger="value" from html
    private el: HTMLElement;

    constructor(private modalService: NgbModal, ref: ElementRef ) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.modalService.open(this.content, { size: 'lg' });

        });
    }

}
