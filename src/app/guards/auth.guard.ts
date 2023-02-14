import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Injectable({
providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private router: Router, private authService: AuthService) { }

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
if (this.authService.IsLoggedIn) {
return true;
}
this.router.navigate(['login']);
return false;
}
}