import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/service/db.service';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
})
export class DataComponent implements OnInit {
  private sessionId: string;

  constructor(private dbService: DbService, private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    // Panggil metode authenticate() dari DbService untuk memperoleh session_id
    this.dbService.authenticate().subscribe(
      response => {
        this.sessionId = response.result.session_id;
        // Set session_id pada InvoiceService
        this.invoiceService.setSessionId(this.sessionId);
        // Cek session_id yang telah diset pada InvoiceService
        console.log('Session ID:', this.invoiceService.getSessionId());
      },
      error => {
        console.log('Error:', error);
      }
    );
  }

  updateInvoice() {
    // Panggil metode updateInvoice() dari InvoiceService
    this.invoiceService.updateInvoice('001', 1000, 100).subscribe(
      response => {
        console.log('Invoice updated:', response);
      },
      error => {
        console.log('Error:', error);
      }
    );
  }
}
