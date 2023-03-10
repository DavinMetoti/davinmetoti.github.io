import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items:[
                    {label: 'Beranda',icon: 'pi pi-fw pi-home', routerLink: ['beranda']}
                ]
            },
            {
                label: 'Formulir',
                items: [
                    {label: 'Form Permohonan', icon: 'pi pi-fw pi-id-card', routerLink: ['permohonan']},
                    {label: 'Form Pengajuan', icon: 'pi pi-fw pi-check-square', routerLink: ['pengajuan']},
                    {label: 'Pendaftaran Hak Akses', icon: 'pi pi-fw pi-user-plus', routerLink: ['form_hak_akses']},
                    {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['tabel']},
                    {label: 'Kalkulator', icon: 'pi pi-fw pi-bookmark', routerLink: ['calculator']},
                    {label: 'Tabel Biasa', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['tabeledit']},
                    
                ]
            },
            {
                label: 'Admin',
                items: [
                   
                    {label: 'User', icon: 'pi pi-fw pi-user', routerLink: ['datapengguna']},
                    {label: 'Nonaktif User', icon: 'pi pi-fw pi-user-minus', routerLink: ['deletedpengguna']},
                    {label: 'Daftar Permintaan', icon: 'pi pi-fw pi-plus', routerLink: ['hakakses']},
                    {label: 'Session', icon: 'pi pi-fw pi-plus', routerLink: ['data']},
                    {label: 'Koordinator', icon: 'pi pi-fw pi-user-edit', routerLink: ['koordinator']},
                    {label: 'Kepala Cabang', icon: 'pi pi-fw pi-users', routerLink: ['kacab']},
                    {label: 'Pendaftaran Pasien', icon: 'pi pi-fw pi-plus-circel', routerLink: ['pendaftaran']},
                    
                ]
            }
        ]
    }
    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
