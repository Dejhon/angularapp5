import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Accounts } from '../Models/accounts';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {

  private URL = "http://localhost:4000/account";
  private HTTP_HEADER = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

  constructor(private http: HttpClient) { }

  // get all account information from database
  getAccounts(): Observable<Accounts[]>{
    return this.http.get<Accounts[]>(this.URL).pipe(
      tap((allAccounts: any) => console.log(`student List = ${JSON.stringify(allAccounts)}`)),
      catchError(error => of([])),
    );
  }

  // Add account informatiom to Database
  addAccountInfo(body:object):Observable<Accounts>{
    return this.http.post<Accounts>(`${this.URL}/add`,body, this.HTTP_HEADER).pipe(
      tap( accountInfo => console.log(`Account Information is: ${JSON.stringify(accountInfo)}`)),
      catchError( error => of())
    );
  }

  // find account information by id
  getAccountById(id: string):Observable<Accounts | any>{
    return this.http.get<Accounts>(`${this.URL}/find/${id}`).pipe(
      tap(selectedAccount => console.log(`selected Account = ${JSON.stringify(selectedAccount)}`)),
      catchError(error => of(new Accounts())),
    );
  }

  // Update account in Database
  updateAccount(id: string, body:object): Observable<Accounts>{
    return this.http.put<Accounts>(`${this.URL}/update/${id}`, body, this.HTTP_HEADER).pipe(
      tap(newData => console.log(`Updated Account = ${JSON.stringify(newData)}`)),
      catchError(error => of(new Accounts())),
    );
  }

  
}
