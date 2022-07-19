import { Component, Input, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import { Students } from 'src/app/Models/students';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  @Input() student!: Students;

  constructor(private studentService:StudentsService, private route: ActivatedRoute, private location: Location,) { }

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
  
  getStudentId(): void {
    const routeParams = this.route.snapshot.paramMap;
    const StudentIdFromRoute = String(routeParams.get('id'));
    
    // Find the student that correspond with the id provided in route.
    this.studentService.getStudentById(StudentIdFromRoute).subscribe(theStudent => this.student = theStudent);
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    this.studentService.updateStudent(this.student).subscribe(()=>this.goBack());
  }        

  ngOnInit(): void {
    this.getStudentId
  }
}
