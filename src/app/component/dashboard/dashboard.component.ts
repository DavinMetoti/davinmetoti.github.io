import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  nama:any;
  constructor() { }

  ngOnInit(): void {
     this.nama=localStorage.getItem('nama')
  }

}
