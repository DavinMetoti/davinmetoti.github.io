import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    items: MenuItem[];

    constructor(public appMain: AppMainComponent, private router:Router, private authService:AuthService) {}
    ngOnInit(): void {
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['login']);
    }
}
