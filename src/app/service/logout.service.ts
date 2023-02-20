import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router) { }

  logout(): void {
    // hapus data login dari local storage atau cookie
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    // arahkan ke halaman login
    this.router.navigate(['login']);
  }
}
