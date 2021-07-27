import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown2]'
})
export class Dropdownv2Directive {
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
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
