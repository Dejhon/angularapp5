import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import { Students } from 'src/app/Models/students';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students!: Students[]

  constructor(private studentsService: StudentsService, private dialogue: MatDialog) { }

  ngOnInit(): void {
    this.getAllStudents()
  }

  openDialogue() {
    this.dialogue.open(DialogueComponent,{
      width:'35%'
    }).afterClosed().subscribe((val: string)=>{
      if(val === 'save'){
        this.getAllStudents();
      }
    })
  }

  getAllStudents(): void{
      this.studentsService.getStudents().subscribe((allStudents) => {
        this.students = allStudents
    })
  }
}
