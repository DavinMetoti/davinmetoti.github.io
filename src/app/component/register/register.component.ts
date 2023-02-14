import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/userdata.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

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
  confirmPassword: string;
  user:any;
  mail:any;
  pass:any;
  conf:any;
  array:[];

  register = {
    namausername:null,
    emaill: null,
  }
  passregister = {
    paspassword: null,
    compassword: null,
  }
  constructor(
    private UserService: UserService,  
    private router: Router, 
    private confirmationService: ConfirmationService,
    private messageService:MessageService ) { }

  ngOnInit() {
  }
  submit(u,e,p,c)
  {
    if(u==null || u=="" || e==null || e=="" || p==null || p=="" || c==null || c=="")
  {
      this.messageService.add({severity:'warn', summary:'Perhatian', detail: ''});
  } 
  else
      this.confirmationService.confirm({
        message: 'Apakah anda yakin data anda benar',
        accept: () => {
          this.router.navigate(['login'])
          this.register.namausername=u;
          this.register.emaill=e;
          this.passregister.paspassword=p;
          this.passregister.compassword=c;
          let array = [];
          array.push(this.register, this.passregister);
          console.log(array)
        }
    });
  }
}
