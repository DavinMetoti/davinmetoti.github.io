import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppConfig } from 'src/app/api/appconfig';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/service/app.config.service';
import { DataService } from 'src/app/service/data.service';
import { DbService } from 'src/app/service/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[`
    :host ::ng-deep .p-password input {
      width: 100%;
      padding:1rem;
    }
    :host ::ng-deep .pi-eye{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }

    :host ::ng-deep .pi-eye-slash{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent implements OnInit, OnDestroy {
  valChech: string[] = ['remember']
  username: string;
  password: string;
  nama_lengkap:string;
  config: AppConfig
  subscription: Subscription
  public status: string;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private configService: ConfigService,
    private dataService: DataService,
    private dbservice:DbService,
  ) {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('nama')
  }

  masuk(): void {
    this.dataService.login(this.username, this.password).subscribe(
      (response) => {
        if (response.success) {
          // handle successful login
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('role', JSON.stringify(response.data.user.role));
          localStorage.setItem('nama', JSON.stringify(response.data.user.nama_lengkap));
          this.router.navigate(['/beranda']);
        }
      },
      (error) => {
        if (error.status === 401) {
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'username dan password salah'});
        } else if(error.status === 402){
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'akun anda belum aktif'});
        }
      }
    );
  }
  masukdaftar(): void {
    this.router.navigate(['memberbaru']);
  }
}
