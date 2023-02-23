import { Component, OnInit } from '@angular/core';
import { HakAksesService } from 'src/app/service/hakakses.service';

@Component({
  selector: 'app-kacab',
  templateUrl: './kacab.component.html',
  styleUrls: ['./kacab.component.scss']
})
export class KacabComponent implements OnInit {

kacabdata:any;
pilihankacab:any;
display: boolean = false;
namakacab:any;

  constructor( private hakakses:HakAksesService) { }

  ngOnInit(): void {
    this.kacab()
  }

  kacab() {
    this.hakakses.getkacab().subscribe(
    data => {
    this.kacabdata = data.data;
    },
    error => {
    console.log(error);
    }
    );
    }

    showDialog(hakAkses: any) {
      this.pilihankacab = hakAkses;
      this.display = true;
      }
}
