import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appExpirationDateFormatter]',
})
export class ExpirationDateFormatterDirective {
  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event']) onInputChange(event: KeyboardEvent) {
    let input = this.el.value.replace(/\D/g, '');

    if (input.length > 2) {
      input = input.slice(0, 2) + '/' + input.slice(2, 4);
    }

    this.el.value = input;
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Backspace' && this.el.value.endsWith('/')) {
      this.el.value = this.el.value.slice(0, -1);
    }
  }
  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    event.preventDefault();
  }
}
