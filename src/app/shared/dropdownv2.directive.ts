import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdownv2]'
})
export class Dropdownv2Directive {
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    console.log("Directive call")
  }

  constructor() { }

}
