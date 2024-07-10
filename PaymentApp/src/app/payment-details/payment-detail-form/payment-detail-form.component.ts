import { Component } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [],
})
export class PaymentDetailFormComponent {
  constructor(
    public service: PaymentDetailService,
    private toastr: ToastrService
  ) {}

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true;
    if (form.valid) {
      this.service.postPaymentDetail().subscribe({
        next: (res: any) => {
          this.service.list = res as PaymentDetail[];
          this.service.resetForm(form);
          this.toastr.success(
            'You have successfully added a new credit card.',
            'Credit Card Registered!'
          );
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }
}
