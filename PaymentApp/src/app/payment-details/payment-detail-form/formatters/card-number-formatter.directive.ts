import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCardNumberFormatter]',
})
export class CardNumberFormatterDirective {
  private inputElement: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
    this.inputElement = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event']) onInputChange(event: KeyboardEvent) {
    const input = this.inputElement.value.replace(/\D/g, '');
    const formatted = input.replace(/(.{4})/g, '$1 ').trim();
    this.inputElement.value = formatted;
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    event.preventDefault();
  }
}
