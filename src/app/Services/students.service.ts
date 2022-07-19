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
  addNewStudent(student: Students): Observable<Students>{
    return this.http.post<Students>(`${this.REST_API_URL}/create`, student, this.HTTP_HEADER).pipe(
      tap(newStudent => console.log(`newStudent = ${JSON.stringify(newStudent)}`)),
      catchError(error => of(new Students())),
    );
  }

  // Get Student By Id
  getStudentById(id: string):Observable<Students | any>{
    const thisUrl = `${this.REST_API_URL}/${id}`;
    return this.http.get<Students>(thisUrl).pipe(
      tap(thisStudent => console.log(`thisStudent = ${JSON.stringify(thisStudent)}`)),
      catchError(error => of(new Students())),
    );
  }

  // Update Student in Database
  updateStudent(student: Students): Observable<Students>{
    return this.http.put<Students>(`${this.REST_API_URL}/update/${student.id}`, student, this.HTTP_HEADER).pipe(
      tap(studentUpdate => console.log(`Update Student = ${JSON.stringify(studentUpdate)}`)),
      catchError(error => of(new Students())),
    );
  }

  // Delete Student By Id
  deleteStudent(id: any): Observable <Students>{
    return this.http.delete<Students>(`${this.REST_API_URL}/remove/${id}`, this.HTTP_HEADER).pipe(
      tap((deletedStudent:Students) => console.log(`deletedStudent = ${JSON.stringify(deletedStudent)}`))
  )}
  

  constructor(private http: HttpClient) { }
}
