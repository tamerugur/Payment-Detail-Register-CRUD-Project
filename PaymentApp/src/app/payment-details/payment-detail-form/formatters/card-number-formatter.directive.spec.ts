import { CardNumberFormatterDirective } from './card-number-formatter.directive';
import { ElementRef } from '@angular/core';
describe('CardNumberFormatterDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = new ElementRef(document.createElement('input'));
    const directive = new CardNumberFormatterDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
