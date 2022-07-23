import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/Services/accounts.service';
import { Accounts } from 'src/app/Models/accounts';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {

  selectedId : string  = this.activateRoute.snapshot.params['id'];
  accounts !: Accounts;

  constructor(private activateRoute: ActivatedRoute, private accountService: AccountsService, 
              private route: Router) { }

  ngOnInit(): void {
    this.getAccountId();
  }

  getAccountId(){
    this.accountService.getAccountById(this.selectedId).subscribe(
      accountEdit => this.accounts = accountEdit
    )
  }

  update(body:object){
    this.accountService.updateAccount(this.selectedId , body).subscribe({
      next: (res) => {
        alert(`Account Information Updated Successfully`);
      },
      error: () => {
        console.log(`Error while updating record`);
      },
      complete: () => {
        this.route.navigate(['/accounts']);
      }
     })
    }

}
