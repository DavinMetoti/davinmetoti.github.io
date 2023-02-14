import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin, User } from '../api/userlogin';
import { Router } from '@angular/router';

@Injectable({
providedIn: 'root'
})
export class AuthService {
constructor(
private http: HttpClient,
private router: Router
) { }

logout() {
localStorage.removeItem('isLoggedIn');
this.router.navigate(['login']);
}

getadmin() {
return this.http.get<any>('assets/demo/data/User.json')
.toPromise()
.then(res => res.admin as Admin[])
.then(data => data);
}

getUser() {
return this.http.get<any>('assets/demo/data/User.json')
.toPromise()
.then(res => res.user as User[])
.then(header => header);
}

IsLoggedIn() {
localStorage.setItem('isLoggedIn', 'true');
}

getIsLoggedIn() {
return localStorage.getItem('isLoggedIn');
}
}