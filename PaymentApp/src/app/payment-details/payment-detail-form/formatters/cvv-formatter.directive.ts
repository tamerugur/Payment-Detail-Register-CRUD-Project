import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCvvFormatter]',
})
export class CvvFormatterDirective {
  private inputElement: HTMLInputElement;
  constructor(private elementRef: ElementRef) {
    this.inputElement = this.elementRef.nativeElement;
  }
  @HostListener('input', ['$event']) onInputChange(event: KeyboardEvent) {
    const input = this.inputElement.value.replace(/\D/g, '');
    this.inputElement.value = input;
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    event.preventDefault();
  }
}
