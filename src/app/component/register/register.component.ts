import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
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
export class RegisterComponent implements OnInit {
  display: boolean = false; // tambahkan variabel display

  selectedhak: any;
  hakakses: any;
  selecteddevisi: any;
  devisi: any;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  array: any[] = [];
  user: any = {};


  dropdownhakakses = [
    { name: 'Admin', code: 'C000' },
    { name: 'User', code: 'C001' }]

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private dataService: DataService,
  ) { }

  ngOnInit() {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Password and confirm password does not match.'});
      return;
    }
    const user = {
      username: this.username,
      email: this.email,
      password: this.password,
      role:this.hakakses.name
    };

    this.dataService.addUser(user).subscribe(
      (response) => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'User registered successfully.'});
        this.router.navigate(['/login']);
      },
      (error) => {

        if (error.status === 409) {
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Username or email already exists.'});
        } else {
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Failed to register user.'});
        }
      }
    );
  }
}
