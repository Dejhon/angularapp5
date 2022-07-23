import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './Components/account-details/account-details.component';
import { AddstudentComponent } from './Components/addstudent/addstudent.component';
import { BankinginfoComponent } from './Components/bankinginfo/bankinginfo.component';
import { StudentsComponent } from './Components/students/students.component';
import { UpdatestudentComponent } from './Components/updatestudent/updatestudent.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: StudentsComponent},
  { path: 'add', component: AddstudentComponent},
  { path: 'update/:id', component: UpdatestudentComponent},
  { path: 'cardInformation/:id', component: BankinginfoComponent},
  { path: 'accounts', component: AccountDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
