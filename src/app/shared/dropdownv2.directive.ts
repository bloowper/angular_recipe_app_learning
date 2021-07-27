import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDropdown2]'
})
export class Dropdownv2Directive {
    @HostBinding('class.show') isOpen = false;

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.el.nativeElement.contains(event.target)? !this.isOpen : false;
        let querySelector = this.el.nativeElement.querySelector('.dropdown-menu');
        if (this.isOpen) {
            this.renderer.addClass(querySelector, 'show');
        } else {
            this.renderer.removeClass(querySelector, 'show');
        }
    }

    constructor(private el: ElementRef, private renderer: Renderer2) {

    }

}
