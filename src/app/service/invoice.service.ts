import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiUrl = 'http://112.78.45.38:8869/api/update/invoice/nontunai';
  private sessionId: string;

  constructor(private http: HttpClient) { }

  setSessionId(sessionId: string) {
    this.sessionId = sessionId;
  }

  getSessionId(): string {
    return this.sessionId;
  }

  updateInvoice(transactionNumber: string, totalPrice: number, totalDiscount: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Openerp-Session-Id': this.sessionId
    });
    const data = {
      jsonrpc: '2.0',
      method: 'call',
      params: {
        invoice: {
          transaction_number: transactionNumber,
          total_price: totalPrice,
          total_discount: totalDiscount
        }
      }
    };
    return this.http.post<any>(this.apiUrl, data, { headers: headers });
  }

}
