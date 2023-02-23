import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HakAksesService {

  private baseUrl = 'http://localhost:1000';

  constructor(private http: HttpClient) { }

  getHakAkses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-hakakses`);
  }

  getkacab(): Observable<any> {
    return this.http.get(`${this.baseUrl}/to-kacab`);
  }

  getHakAksesKoordinator(): Observable<any> {
    return this.http.get(`${this.baseUrl}/to-koordinator`);
  }

  addHakAkses(hakAkses: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/hak-akses-baru`, JSON.stringify(hakAkses), { headers });
  }

  updateKoordinator(id: number, koordinator: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/update-koordinator/${id}`, JSON.stringify({ koordinator }), { headers });
  }

  senduserpass(id: number, username: any, password: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { username: username, password: password };
    return this.http.post(`${this.baseUrl}/update-user-pass/${id}`, body, { headers });
  }
  

  deleteHakAkses(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-hak-akses/${id}`);
  }
}
