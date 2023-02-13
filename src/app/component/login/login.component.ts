import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppConfig } from 'src/app/api/appconfig';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/service/app.config.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

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
user: SocialUser;
loggedIn: boolean;

constructor(
  private router: Router, 
  private messageService: MessageService, 
  private configService: ConfigService,
  private authService: SocialAuthService,
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
  this.authService.authState.subscribe((user) => {
    console.log(user)
    this.user = user;
    this.loggedIn = (user != null);
});
}

signInWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
}

signOut(): void {
  this.authService.signOut();
}

masuk() {
this.router.navigate(['beranda']);
}

masukdaftar(): void {
this.router.navigate(['memberbaru'])
}
}
