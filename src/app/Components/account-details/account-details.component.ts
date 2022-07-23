import { Component, OnInit } from '@angular/core';
import { Accounts } from 'src/app/Models/accounts';
import { AccountsService } from 'src/app/Services/accounts.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  accounts!: Accounts[];

  constructor(private accountsService:AccountsService) { }

  ngOnInit(): void {
    this.getAllAccounts();
  }

  getAllAccounts(){
    this.accountsService.getAccounts().subscribe((allAccounts)=>{
      this.accounts = allAccounts;
    })
  }

}
