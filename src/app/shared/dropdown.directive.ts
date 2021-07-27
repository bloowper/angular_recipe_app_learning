import {Directive, HostBinding, HostListener} from "@angular/core";

//Nie czaje do końca jak hostbinding dziala, myslalem ze bede mial zmienic property implicity
@Directive({
    selector: '[appDropdown]',
    exportAs: 'appDropdown'

})
export class DropdownDirective {
    @HostBinding('class.show') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }


}
