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

  constructor(private http: HttpClient) { }

  // Get All Students From Database
  getStudents(): Observable<Students[]>{
    return this.http.get<Students[]>(this.REST_API_URL).pipe(
      tap((allStudents: any) => console.log(`student List = ${JSON.stringify(allStudents)}`)),
      catchError(error => of([])),
    );
  }

  // Add Student to Database
  addNewStudent(body:object):Observable<Students>{
    return this.http.post<Students>(`${this.REST_API_URL}/create`, body, this.HTTP_HEADER).pipe(
      tap( newStudent => console.log(`newly added student is  ${JSON.stringify(newStudent)}`)),
      catchError( error => of())
    );
  }

  // Get Student By Id
  getStudentById(id: string):Observable<Students | any>{
    return this.http.get<Students>(`${this.REST_API_URL}/find/${id}`).pipe(
      tap(selectedStudent => console.log(`selected student = ${JSON.stringify(selectedStudent)}`)),
      catchError(error => of(new Students())),
    );
  }

  // Update Student in Database
  updateStudent(id: string, body:object): Observable<Students>{
    return this.http.put<Students>(`${this.REST_API_URL}/update/${id}`, body, this.HTTP_HEADER).pipe(
      tap(newData => console.log(`Update Student = ${JSON.stringify(newData)}`)),
      catchError(error => of(new Students())),
    );
  }

  // Delete Student By Id
  deleteStudent(id:string):Observable<Students>{
    return this.http.delete<Students>(`${this.REST_API_URL}/remove/${id}`).pipe(
      tap( removedStudent => console.log(`This Record Was Deleted: ${JSON.stringify(removedStudent)}`)),
      catchError( error => of())
    );
  }
  
}
