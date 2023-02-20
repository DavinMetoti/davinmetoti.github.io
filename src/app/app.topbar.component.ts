import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { LogoutService } from './service/logout.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

  items: MenuItem[];

  constructor(public appMain: AppMainComponent, private logoutService: LogoutService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    // inisialisasi menu item jika diperlukan
  }

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Apakah anda yakin ingin keluar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // lakukan logout
        this.logoutService.logout();
      },
      reject: () => {
        // batal
      }
    });
  }

}
