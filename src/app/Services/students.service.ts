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
      tap((retrievedStudents: any) => console.log(`retrievedStudents = ${JSON.stringify(retrievedStudents)}`)),
      catchError(error => of([])),
    );
  }

  // Add Student to Database
  addNewStudent(body:object):Observable<Students>{
    return this.http.post<Students>(`${this.REST_API_URL}/create`, body, this.HTTP_HEADER).pipe(
      tap( addedStudent => console.log(`addedStudent is :- ${JSON.stringify(addedStudent)}`)),
      catchError( error => of())
    )
  }

  // Get Student By Id
  getStudentById(id: string):Observable<Students | any>{
    const thisUrl = `${this.REST_API_URL}/find/${id}`;
    return this.http.get<Students>(thisUrl).pipe(
      tap(thisStudent => console.log(`thisStudent = ${JSON.stringify(thisStudent)}`)),
      catchError(error => of(new Students())),
    );
  }

  // Update Student in Database
  updateStudent(id: string, body:object): Observable<Students>{
    return this.http.put<Students>(`${this.REST_API_URL}/update/${id}`, body, this.HTTP_HEADER).pipe(
      tap(updatedStudent => console.log(`Update Student = ${JSON.stringify(updatedStudent)}`)),
      catchError(error => of(new Students())),
    );
  }

  // Delete Student By Id
  deleteStudent(id:string):Observable<Students>{
    return this.http.get<Students>(`${this.REST_API_URL}/remove/${id}`).pipe(
      tap( removedStudent => console.log(`This Record Was Deleted: ${JSON.stringify(removedStudent)}`)),
      catchError( error => of())
    )
  }
  

  constructor(private http: HttpClient) { }
}
