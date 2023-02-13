import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableedit',
  templateUrl: './tableedit.component.html',
})
export class TableeditComponent implements OnInit {
title:string;
data  = [];
datakaryawan = []
  constructor() { }
  
  ngOnInit(): void {
    this.title='Data Karyawan';
    this.data=[
      {
      nama:'Davin Metoti',
      email:'davinmetotii@gmail.com',
      cabang:'Pusat',
      divisi:'IT'
    },
    {
      nama:'Davin',
      email:'davinmetotii@gmail.com',
      cabang:'Pusat',
      divisi:'IT'
      },
      {
      nama:'David',
      email:'david@gmail.com',
      cabang:'Pusat',
      divisi:'Marketing'
      },
      {
      nama:'Akbar',
      email:'Abar@gmail.com',
      cabang:'Pusat',
      divisi:'SDM'
      },];
    
  }
}
