import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './Components/students/students.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsService } from './Services/students.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AddstudentComponent } from './Components/addstudent/addstudent.component';
import { UpdatestudentComponent } from './Components/updatestudent/updatestudent.component';
import { BankinginfoComponent } from './Components/bankinginfo/bankinginfo.component';
import { AccountsService } from './Services/accounts.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddstudentComponent,
    UpdatestudentComponent,
    BankinginfoComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [StudentsService, AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
