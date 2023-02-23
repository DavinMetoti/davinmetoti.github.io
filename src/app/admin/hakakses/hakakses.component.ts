import { Component, OnInit } from '@angular/core';
import { HakAksesService } from 'src/app/service/hakakses.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-hakakses',
  templateUrl: './hakakses.component.html',
  styleUrls: ['./hakakses.component.scss']
})
export class HakaksesComponent implements OnInit {
send: [];
hakakses:any;
selecthakakses:any;
display:boolean=false
id :any;
user : string;
pass : string;


  constructor(
    private hakaksesService:HakAksesService,
    private messageService:MessageService
  ) { }

  ngOnInit(): void {
    this.gethakaksesdata()
  }

  gethakaksesdata(){
    this.hakaksesService.getHakAkses().subscribe(
      data => {this.hakakses = data.data},
      error => {
        console.log(error);
        }
    )
  }

  showDialog(hakAkses: any) {
    this.selecthakakses = hakAkses;
    this.display = true;
    console.log(this.selecthakakses.id);
    
    }
    
updateUsername(id: number, username: string, password: string) {
    this.hakaksesService.senduserpass(id, username, password).subscribe(
        data => {
            console.log(data);
        },
        error => {
            console.log(error);
        }
    )
}

sendUserPassword (user : string ,pass : string) {
  const id = this.selecthakakses.id; // Deklarasi variabel id
  this.hakaksesService.senduserpass(id, user, pass).subscribe(
    success => {
      this.messageService.add({severity:'success', summary:'Sukses', detail: 'Berhasil menyetujui'});
      this.gethakaksesdata();
    console.log(user,pass);
    
    },
    error => {
      this.messageService.add({severity:'error', summary:'Error', detail: 'Gagal menyetujui'});
    }
  );
}






}
