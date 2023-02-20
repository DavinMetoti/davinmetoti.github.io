import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private url = 'http://112.78.45.38:8869/web/session/authenticate';
  private db = 'cito';
  private username = 'IMPC001';
  private password = 'IMPC001';

  constructor(private http: HttpClient) { }

  authenticate(): Observable<any> {
    const params = {
      jsonrpc: '2.0',
      method: 'call',
      params: {
        db: this.db,
        login: this.username,
        password: this.password
      }
    };

    return this.http.post<any>(this.url, params);
  }

  getSessionId(): Observable<any> {
    return this.authenticate().pipe(
      map(response => response.result.session_id)
    );
  }
}
