import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppConfig } from 'src/app/api/appconfig';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/service/app.config.service';
import { AuthService } from 'src/app/service/auth.service';

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
username: any;
password:any;
config: AppConfig
subscription: Subscription
loggedIn: boolean;
admin: any;
users: any;

constructor(
private router: Router,
private messageService: MessageService,
private configService: ConfigService,
private authService: AuthService
) { }

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
this.authService.getadmin().then(admin => this.admin = admin);
this.authService.getUser().then(user => this.users = user);
}
masuk() {
  for (let i = 0; i < this.admin.length; i++) {
  if (this.username === this.admin[i].username && this.password === this.admin[i].password) {
  this.loggedIn = true;
  break;
  }
  }
  for (let i = 0; i < this.users.length; i++) {
  if (this.username === this.users[i].username && this.password === this.users[i].password) {
  this.loggedIn = true;
  break;
  }
  }
  if (this.loggedIn) {
  this.router.navigate(['beranda']);
  } else {
  this.messageService.add({ severity: 'error', summary: 'Gagal Masuk', detail: 'Username atau Password salah' });
  }
  }
  
  masukdaftar(): void {
  this.router.navigate(['memberbaru'])
  }
}
