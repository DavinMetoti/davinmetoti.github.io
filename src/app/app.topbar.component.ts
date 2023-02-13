import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    items: MenuItem[];

    constructor(public appMain: AppMainComponent, private router:Router) {}
    ngOnInit(): void {
    }

    submit(){
        this.router.navigate(['login'])
    }
    masukdaftar(){
        this.router.navigate(['memberbaru'])
        }
}
