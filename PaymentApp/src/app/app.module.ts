import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CardNumberFormatterDirective } from './payment-details/payment-detail-form/formatters/card-number-formatter.directive';
import { ExpirationDateFormatterDirective } from './payment-details/payment-detail-form/formatters/expiration-date-formatter.directive';
import { CvvFormatterDirective } from './payment-details/payment-detail-form/formatters/cvv-formatter.directive';
@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent,
    CardNumberFormatterDirective,
    ExpirationDateFormatterDirective,
    CvvFormatterDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
