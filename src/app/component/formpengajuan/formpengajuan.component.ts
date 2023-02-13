import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-formpengajuan',
  templateUrl: './formpengajuan.component.html',
})
export class FormpengajuanComponent implements OnInit {

  selectedState:any;
  jenispengajuan: any;
  pngjn: any;
  nama : any;
  nama_karyawan : any;
  cabng : any;
  inicabang : any;
  divisi : any;
  divisi_karyawan : any;
  nip : any;
  ininip : any;
  show = false;
  form : any;
  aplikasi = false;
  
  
  jenispengajuanitem = [
        { jenis: 'Fitur Baru', code: 'Option 1' },
        { jenis: 'Aplikasi Baru', code: 'Option 2' },
    ];

  dropdownItems = [
      { name: 'Pusat', code: 'Option 1' },
      { name: 'Indraprasta', code: 'Option 2' },
      { name: 'Setiabudi', code: 'Option 3' }
  ];

  constructor(
      private messageService: MessageService
  )
  {

  }
  ngOnInit():void
  {

  }

  
  addSingle() {
      this.messageService.add({severity:'success', summary:'Pengajuan Berhasil', detail:'Pengajuan anda akan segera di konfirmasi'});
  }

  reset(){
      this.nama = "";
      this.divisi = "";
      this.cabng = null;
      this.nip = ""
      this.pngjn = null;
  }

  submit(nm,dv,cb,np,pg)
{
  if(nm==null || nm=="" || dv==null || dv=="" || np==null || np=="" || cb==null || cb=="")
  {
      this.messageService.add({severity:'warn', summary:'Perhatian', detail: ''});
  } 
  else 
  {
      this.nama_karyawan = nm;
      this.divisi_karyawan = dv;
      this.inicabang = cb;
      this.ininip = np
      this.jenispengajuan=pg
      this.reset();
      this.klikTombolTampil()  
  }


}

  klikTombolTampil() {
      this.show = true;
  };

  aplikasibaru(){
    this.aplikasi=true;
  }
}



