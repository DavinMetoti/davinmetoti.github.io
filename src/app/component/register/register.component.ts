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
  selectedcabang:any;
  cabang:any;
  selectedhak: any;
  hakakses: any;
  selecteddivisi: any;
  divisi: any;
  namalengkap
  username: string;
  email: string;
  password: string;
  confirmPassword: string;


  dropdownhakakses = [
    { name: 'Admin', code: 'C000' },
    { name: 'User', code: 'C001' }]


  dropdowncabang = [
    {nama : 'PUSAT'},
    {nama : 'SEMARANG INDRAPRASTA'},
    {nama : 'SEMARANG DR. CIPTO'},
    {nama : 'PEKALONGAN'},
    {nama : 'YOGYAKARTA ATMOSUKARTO'},
    {nama : 'BANTUL'},
    {nama : 'SEMARANG SETIABUDI'},
    {nama : 'TEGAL'},
    {nama : 'JAKARTA SELATAN'},
    {nama : 'KUDUS'},
    {nama : 'SOLO'},
    {nama : 'MARAUKE'},
    {nama : 'WATES'},
    {nama : 'MAGELANG'},
    {nama : 'BOGOR'},
    {nama : 'JAYAPURA'},
    {nama : 'SURABAYA'},
    {nama : 'PURWOKERTO'},
    {nama : 'PEMALANG'},
    {nama : 'DEMAK'},
    {nama : 'SURABAYA SUNGKONO'},
    {nama : 'BALIKPAPAN'},
  ]

  dropdowndivisi = [
    {nama : 'KEPALA CABANG'},
    {nama : 'KEUANGAN'},
    {nama : 'PELAYANAN'},
    {nama : 'MCU / GCU'},
    {nama : 'DOKTER'},
    {nama : 'PERAWAT'},
    {nama : 'MARKETING'},
    {nama : 'IT'},
    {nama : 'TEKNIS'},
    {nama : 'CUSTOMER SERVICE'},
    {nama : 'DIKLAT'},
    {nama : 'RADIOLOGI/NON RADIOLOGI'},
    {nama : 'IT'},
 
  ]

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
      nama_lengkap:this.namalengkap,
      username: this.username,
      email: this.email,
      password: this.password,
      cabang:this.cabang.nama,
      divisi: this.divisi.nama,
      role:this.hakakses.name
    };

    this.dataService.addUser(user).subscribe(
      (response) => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'User registered successfully.'});
        this.router.navigate(['login']);
      },
      (error) => {

        if (error.status === 100000) {
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Username or email already exists.'});
        } else if(error.status === 409){
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Failed to register user.'});
        }
      }
    );
  }
}
