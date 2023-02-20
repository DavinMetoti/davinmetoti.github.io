import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-datauser',
  templateUrl: './datauser.component.html',
  styleUrls: ['./datauser.component.scss']
})
export class DatauserComponent implements OnInit {
  users: any[];
  roleOptions: any[] = [
    { label: 'Admin', value: 'admin' },
    { label: 'User', value: 'user' }
  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsers('token').subscribe(data => {
      this.users = data.data.map((user: any) => ({
        id: user.id,
        username: user.username,
        email: user.email,
        cabang: user.cabang,
        divisi: user.divisi,
        status: user.status,
        role: user.role,
        isActive: user.status === 1 ? true : false
      }));
    });
  }

  onSubmit(user: any) {
    this.dataService.updateUser(user, 'token').subscribe(data => {
      console.log(data);
    });
  }
}
