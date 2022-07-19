import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import { Students } from 'src/app/Models/students';
import { Router } from '@angular/router';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students!: Students[]

  constructor(private studentsService: StudentsService, private route: Router) { }

  ngOnInit(): void {
    this.allStudents()
  }

  allStudents(): void{
      this.studentsService.getStudents().subscribe((allStudents) => {
        this.students = allStudents
    })
  }

  deleteStudent(id:string):void {
    this.studentsService.deleteStudent(id).subscribe({
      next: () => {
        alert("Student's Record Deleted Successfully");
      },
      error: () => {
        alert('Error While Deleting Record');
      },
      complete: () => {
        this.allStudents();
      }
    })
  };

  editRecord(id:any):void {
    this.route.navigate(['update/' + id]);
  }


}
