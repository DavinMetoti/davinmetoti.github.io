import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HakAksesService } from 'src/app/service/hakakses.service';


@Component({
selector: 'app-persetujuan-koordinator',
templateUrl: './persetujuan-koordinator.component.html',
styleUrls: ['./persetujuan-koordinator.component.scss']
})
export class PersetujuanKoordinatorComponent implements OnInit {
hakAksesKoordinator: any;
koordinator:any;
display: boolean = false;
selectedHakAksesKoordinator: any;

constructor(
  private hakAksesService: HakAksesService, 
  private messageservice:MessageService) { }

ngOnInit(): void {
this.loadHakAksesKoordinator();

}

loadHakAksesKoordinator() {
this.hakAksesService.getHakAksesKoordinator().subscribe(
data => {
this.hakAksesKoordinator = data.data;
},
error => {
console.log(error);
}
);
}

showDialog(hakAkses: any) {
this.selectedHakAksesKoordinator = hakAkses;
this.display = true;
}

updateKoordinator(id: number, koordinator: string) {
this.hakAksesService.updateKoordinator(id, koordinator).subscribe(
data => {
console.log(data);
this.loadHakAksesKoordinator();
},
error => {
console.log(error);
}
);
}

menyetujui(koor){
  if (koor == null || koor == "") {
    this.messageservice.add({severity:'warn', summary:'Perhatian', detail: 'Nama koordinator wajib diisi'});
  } else {
    const id = this.selectedHakAksesKoordinator.id;
    this.hakAksesService.updateKoordinator(id, koor).subscribe(
      data => {
        this.messageservice.add({severity:'success', summary:'Sukses', detail: 'Berhasil menyetujui'});
        this.loadHakAksesKoordinator(); // memuat ulang data setelah berhasil memperbarui koordinator
      },
      error => {
        this.messageservice.add({severity:'error', summary:'Error', detail: 'Gagal menyetujui'});
      }
    );
  }
}

}




