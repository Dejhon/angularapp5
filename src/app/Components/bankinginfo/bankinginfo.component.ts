import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import { Students } from 'src/app/Models/students';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bankinginfo',
  templateUrl: './bankinginfo.component.html',
  styleUrls: ['./bankinginfo.component.css']
})
export class BankinginfoComponent implements OnInit {

  selectedId : string  = this.activateRoute.snapshot.params['id'];
  student !: Students;

  constructor(private studentsService:StudentsService, private route:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getStudentId();
  }

  getStudentId(){
    this.studentsService.getStudentById(this.selectedId).subscribe(
      bankInfo => this.student = bankInfo
    )
  }

}
