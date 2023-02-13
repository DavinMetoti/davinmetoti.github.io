import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './formlayout.component.html'

})

export class FormLayoutComponent implements OnInit{


    private _username2: any;
    public get username2(): any {
        return this._username2;
    }
    public set username2(value: any) {
        this._username2 = value;
    }

    selectedState:any;
    komplainmenu:any;
    kmpln:any;
    kompline:any;
    divisi : any;
    nama : any;
    cabng : any;
    nip : any;
    nama_karyawan : any;
    divisi_karyawan : any;
    inicabang : any;
    ininip : any;
    show = false;
    form : any;
    
    dropdownItems = [
        { name: 'Pusat', code: 'Option 1' },
        { name: 'Indraprasta', code: 'Option 2' },
        { name: 'Setiabudi', code: 'Option 3' }
    ];

    jeniskomplain = [
        {komplain:'Komplain', id:'001'},
        {komplain:'Permintaan', id:'002'},
        {komplain:'Lain-Lain', id:'003'}
    ]

    constructor(
        private messageService: MessageService
    )
    {

    }
    ngOnInit():void
    {
        this.username2 = localStorage.getItem("username2");
    }

    
    addSingle() {
        this.messageService.add({severity:'success', summary:'Pengajuan Berhasil', detail:'Pengajuan anda akan segera di konfirmasi'});
    }

    reset(){
        this.nama = "";
        this.divisi = "";
        this.cabng = null;
        this.nip = ""
        this.kmpln= null;
    }

    submit(nm,dv,cb,np,pg)
{
    if(nm==null || nm=="" || dv==null || dv=="" || np==null || np=="" || cb==null || cb=="")
    {
        this.messageService.add({severity:'warn', summary:'Perhatian', detail: 'Data tidak boleh ada yang kosong'});
    } 
    else 
    {
        this.nama_karyawan = nm;
        this.divisi_karyawan = dv;
        this.inicabang = cb;
        this.ininip = np
        this.kompline = pg
        this.reset();
        this.klikTombolTampil()  
    }


}

    klikTombolTampil() {
        this.show = true;
    }
}



