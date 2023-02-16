import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://10.224.0.115/API/apiuser/register.php';

  constructor(private http: HttpClient, private router: Router) {}

  register(username: string, password: string): Observable<any> {
    const body = { username: username, password: password };
    return this.http.post<any>(this.registerUrl, body).pipe(
      map(data => {
        localStorage.setItem('isLoggedIn', 'true');
        return data;
      }),
      catchError(error => {
        return throwError('Registration failed. Please try again.');
      })
    );
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['login']);
  }

  getadmin() {
    return this.http
      .get<any>('http://10.224.0.115/API/apiuser/api.php')
      .toPromise()
      .then(data => data);
  }

  getUser() {
    return this.http
      .get<any>('http://10.224.0.115/API/apiuser/api.php')
      .toPromise()
      .then(header => header);
  }

}
