import { Component, Input, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import { Students } from 'src/app/Models/students';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  ID : string  = this.activateRoute.snapshot.params['id'];
  student !: Students;

  constructor(private studentsService:StudentsService, private activateRoute : ActivatedRoute, private router : Router ) { }
  studentForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('', Validators.required),
    cohort: new FormControl('', Validators.required),
    phoneNumber : new FormControl('', Validators.required),
  })

  get name(){
    return this.studentForm.get('name')
  }

  get email(){
    return this.studentForm.get('email')
  }

  get cohort(){
    return this.studentForm.get('cohort')
  }

  get phoneNumber(){
    return this.studentForm.get('phoneNumber')
  }

  ngOnInit(): void {
    this.getStudentId();
  }

  getStudentId(){
    this.studentsService.getStudentById(this.ID).subscribe(
      studentEdit => this.student = studentEdit
    )
  }

  update(body:object){
  this.studentsService.updateStudent(this.ID , body).subscribe({
    next: (res) => {
      alert(`Student Record Updated Successfully`);
    },
    error: () => {
      console.log(`Error while updating record`);
    },
    complete: () => {
      this.router.navigate(['/home']);
    }
   })
  }

}
