import { Component, OnInit } from '@angular/core';
import { HakAksesService } from 'src/app/service/hakakses.service';

@Component({
  selector: 'app-formulirhakakses',
  templateUrl: './formulirhakakses.component.html',
  styleUrls: ['./formulirhakakses.component.scss']
})
export class FormulirhakaksesComponent implements OnInit {

  selectedDivisi: any;
  divisi: any;
  namalengkap: any;
  email: any;
  selectedcabang:any;
  cabang:any;  
  hakAksess: any;
  nip:any;
  telp:any;
  aplikasi = [    
    { name: 'CETAK BK (DESKTOP)' },    
    { name: 'DOKUMEN ONLINE (DESKTOP)' },    
    { name: 'NOMOR SURAT (DESKTOP)' },    
    { name: 'MY LAB CITO (MOBILE)' },   
    { name: 'STROKE RISK CARD (WEB)' },    
    { name: 'REDEEM VOUCHER (WEB)' },    
    { name: 'SIM REPORT (WEB)' },    
    { name: 'ODOO ERP (WEB)' },  ];
    selectedApps: string[] = [];
  
  

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
  {nama : 'KACAB', hakakses: [
    {nama : 'KEPALA CABANG'}
  ]},
  {nama : 'KEUANGAN', hakakses: [
    {nama : 'KABAG'},{nama : 'STAFF'}
  ]},
  {nama : 'PELAYANAN', hakakses: [
    {nama : 'KABAG'}, {nama : 'CUSTOMER SERVICE'}
  ]},
  {nama : 'MCU', hakakses: [
    {nama : 'KABAG'}, {nama : 'STAFF'}
  ]},

  {nama : 'PERAWAT', hakakses: [
    {nama : 'PERAWAT'}
  ]},
  {nama : 'MARKETING', hakakses: [
    {nama : 'KABAG'}, {nama : 'STAFF'}
  ]},
  {nama : 'IT', hakakses: [
    {nama : 'IT CABANG'}
  ]},
  {nama : 'TEKNIS', hakakses: [
    {nama : 'KABAG'}, {nama : 'STAFF'}, {nama : 'VERIFIKATOR'}
  ]},
  {nama : 'SAMPLING', hakakses: [
    {nama : 'KABAG'}, {nama : 'STAFF'}
  ]},
  {nama : 'PENUNJANG', hakakses: [
    {nama : 'RADIOLOGI'}, {nama : 'NON-RADIOLOGI'}
  ]},
];



  constructor(
    private hakakses:HakAksesService,
  ) { }

  ngOnInit(): void {}

  onSubmit() {
    const data = {
      divisi: this.divisi.nama,
      telp:this.telp,
      nip:this.nip,
      nama_lengkap: this.namalengkap,
      email: this.email,
      cabang: this.cabang.nama,
      hakakses : this.hakAksess.nama,
      aplikasi:this.selectedApps.map((app: any) => app.name).join(', ')

    };
    this.hakakses.addHakAkses(data).subscribe(
      (response) => {
      },
    )
    const array = [];
    array.push(data);
    console.log(array);
   
    
  }

}
