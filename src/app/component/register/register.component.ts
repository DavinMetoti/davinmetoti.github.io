import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/userdata.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

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
  loading = [false, false, false, false]

  username : any;
  email : any;
  password : any

  constructor(
    private UserService: UserService,  
    private router: Router, 
    private confirmationService: ConfirmationService ) { }

    confirm(){
      this.confirmationService.confirm({
          message: 'Apakah anda yakin data anda benar',
          accept: () => {
            this.router.navigate(['login'])
          }
      });
    }

  ngOnInit() {

  }
}
