import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import { Students } from 'src/app/Models/students';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students!: Students[]

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.getAllStudents()
  }

  getAllStudents(): void{
      this.studentsService.getStudents().subscribe((allStudents) => {
        this.students = allStudents
    })
  }

  deleteStudent(id: any){
    this.studentsService.deleteStudent(id).subscribe({
      next: () =>{
        alert("Record Deleted Successfully")
      },
      error: () =>{
        alert("Error While Deleting Record")
      }
    })
  }

  editStudent():void {
    
  }
}
