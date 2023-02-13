import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Karyawan } from '../api/karyawan';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
  ) { }

  getKaryawan(){
    return this.http.get<any>('assets/demo/data/karyawan.json')
    .toPromise()
    .then(res => res.data as Karyawan[])
    .then(data => data);
  }

  getHeader(){
    return this.http.get<any>('assets/demo/data/karyawan.json')
    .toPromise()
    .then(res => res.header as Karyawan[])
    .then(header => header );
  }

}
