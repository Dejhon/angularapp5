import { Component, Input, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import { Students } from 'src/app/Models/students';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  @Input() student!: Students;

  constructor(private studentService:StudentsService, private route: ActivatedRoute, private location: Location,) { }

  
  getStudentId(): void {
    const id = +this.route.snapshot.paramMap.get('_id')!;
    this.studentService.getStudentById(id).subscribe(theStudent => this.student = theStudent);
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    this.studentService.updateStudent(this.student).subscribe(()=>this.goBack());
  }        

  ngOnInit(): void {
  }
}
