import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';



@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit{

    items: MenuItem[];

    constructor(public appMain: AppMainComponent, private router:Router, private authService:AuthService,  private confirmationService: ConfirmationService) {}
    ngOnInit(): void {
    }
    // logout() {
    //     this.authService.logout();
    //     this.router.navigate(['login']);
    // };
    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target,
            message: 'Apakah anda yakin ingin keluar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.authService.logout();
                this.router.navigate(['login']);
            },
            reject: () => {
            }
        });
    }
    
}
