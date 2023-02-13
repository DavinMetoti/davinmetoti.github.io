import { RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { FormLayoutComponent } from './components/formlayout/formlayout.component';
import { FormpengajuanComponent } from './component/formpengajuan/formpengajuan.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { AppMainComponent } from './app.main.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { TabelComponent } from './component/tabel/tabel.component';
import { TableeditComponent } from './component/tableedit/tableedit.component';
import { AccessDeniedComponent } from './component/access-denied/access-denied.component';
import { AuthGuard } from './guards/auth.guard';
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/login', pathMatch: 'full' },     
            {path: 'login',component:LoginComponent},
            {path: 'memberbaru', component: RegisterComponent},
            {
                path: 'beranda', component: AppMainComponent, 
                children: [
                    {path: 'permohonan', component: FormLayoutComponent},
                    {path: 'pengajuan', component: FormpengajuanComponent},
                    {path: 'calculator', component: CalculatorComponent},
                    {path: 'tabel', component:TabelComponent,canActivate:[AuthGuard]},
                    {path: 'tabeledit', component:TableeditComponent},
                    {path: 'access-denied', component:AccessDeniedComponent},
                    
                ],
            },
            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
