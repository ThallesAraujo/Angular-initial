import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @Input('appCampoColorido') cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo: string;

   @HostListener('focus') onFocus() {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') onBlur() {
    this.corDeFundo = 'transparent';
  }

}
