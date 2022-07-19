import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Students } from '../Models/students';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private REST_API_URL = "http://localhost:4000/api";
  private HTTP_HEADER = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  // Get All Students From Database
  getStudents(): Observable<Students[]>{
    return this.http.get<Students[]>(this.REST_API_URL).pipe(
      tap((retrievedStudents: any) => console.log(`retrievedMovies = ${JSON.stringify(retrievedStudents)}`)),
      catchError(error => of([])),
    );
  }

  constructor(private http: HttpClient) { }
}
