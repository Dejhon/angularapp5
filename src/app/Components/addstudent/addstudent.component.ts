import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from 'src/app/Services/students.service';
import { Students } from 'src/app/Models/students';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  student!: Students;

  constructor(private studentService: StudentsService, private route: Router) { }

  // studentForm = new FormGroup({
  //   name: new FormControl('',Validators.required),
  //   email: new FormControl('', Validators.required),
  //   cohort: new FormControl('', Validators.required),
  //   phoneNumber : new FormControl('', Validators.required),
  // })

  // get name(){
  //   return this.studentForm.get('name')
  // }

  // get email(){
  //   return this.studentForm.get('email')
  // }

  // get cohort(){
  //   return this.studentForm.get('cohort')
  // }

  // get phoneNumber(){
  //   return this.studentForm.get('phoneNumber')
  // }

  ngOnInit(): void {
  }

  addStudent(body:object):void{
    this.studentService.addNewStudent(body).subscribe({
      next: (res: any) => {
        console.log(`Body passed ${JSON.stringify(res)}`);
      },
      error: () => {
        console.log(`Error occured adding student`);
      },
      complete: () =>{
        alert(`Student Added`);
        this.route.navigate(['/home'])
      }
    }
  )}
  
  


// newStudent(name: string,
//     email: string,
//     cohort: string,
//     phoneNumber: string): void {
//         name = name.trim();
//         email = email.trim();
//         phoneNumber = phoneNumber.trim();
//         if (Number.isNaN(Number(phoneNumber))|| !name || !email || !cohort || Number(phoneNumber)<=0){
//           alert("form needs to be filled out properly");
//           return;
//         }
//     const newStudents: Students = new Students();
//     newStudents.name = name;
//     newStudents.email = email;
//     newStudents.cohort = cohort;
//     newStudents.phoneNumber = +phoneNumber;
//     this.studentService.addNewStudent(newStudents)
//         .subscribe(newstudent => {
//           this.route.navigate(['/home'])
//           this.student.push(newstudent);
//           console.log(`this.student.push(newstudent) = ${JSON.stringify(newstudent)}`);
//         })
// }


  // addStudent(): void{
  //   if(this.studentForm?.invalid){
  //     alert("Please Fill Out Form")
  //   }else{
  //     this.studentService.addNewStudent(this.studentForm.value).subscribe({
  //       next: ()=>{
  //         alert("Student Added")
  //         this.route.navigate(['/']);
  //       },
  //       error: ()=>{
  //         alert('Error While adding record')
  //       }
  //     })
  //   }
  // }

}
