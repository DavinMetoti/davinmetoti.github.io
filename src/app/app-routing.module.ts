import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AppMainComponent } from './app.main.component';
import { FormLayoutComponent } from './components/formlayout/formlayout.component';
import { FormpengajuanComponent } from './component/formpengajuan/formpengajuan.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { TabelComponent } from './component/tabel/tabel.component';
import { TableeditComponent } from './component/tableedit/tableedit.component';
import { AccessDeniedComponent } from './component/access-denied/access-denied.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormulirhakaksesComponent } from './admin/formulirhakakses/formulirhakakses.component';
import { DatauserComponent } from './admin/datauser/datauser.component';
import { DataComponent } from './admin/data/data.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'memberbaru', component: RegisterComponent },
      
      {
        path: '', component: AppMainComponent , canActivate: [LoginGuard],
        children: [
          { path: 'beranda', component: DashboardComponent },
          { path: 'permohonan', component: FormLayoutComponent },
          { path: 'pengajuan', component: FormpengajuanComponent },
          { path: 'calculator', component: CalculatorComponent },
          { path: 'tabel', component: TabelComponent, },
          { path: 'tabeledit', component: TableeditComponent},
          { path: 'access-denied', component: AccessDeniedComponent }
        ]
      },
      {
        path: '', component: AppMainComponent ,canActivate: [AuthGuard],
        data: { expectedRole: 'admin' },
        children: [
          { path: 'form_hak_akses', component: FormulirhakaksesComponent},
          { path: 'datapengguna',component: DatauserComponent},
          { path: 'data',component: DataComponent},
        ]
      },
      { path: '**', redirectTo: 'pages/notfound' },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
