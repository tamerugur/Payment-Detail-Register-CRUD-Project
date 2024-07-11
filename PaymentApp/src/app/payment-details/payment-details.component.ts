import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [],
})
export class PaymentDetailsComponent implements OnInit {
  constructor(
    public service: PaymentDetailService,
    private toastr: ToastrService
  ) {}
  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  ngOnInit(): void {
    this.service.refreshList();
  }
  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this record?'))
      this.service.deletePaymentDetail(id).subscribe({
        next: (res: any) => {
          this.service.list = res as PaymentDetail[];
          this.service.refreshList();
          this.toastr.error(
            'You have successfully deleted a credit card.',
            'Credit Card Deleted!'
          );
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
}
