import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Students } from 'src/app/Models/students';
import { StudentsService } from 'src/app/Services/students.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  students!: Students;
  actionBtn :string = "Add";
  studentForm !: FormGroup;

  constructor(private studentsService: StudentsService,private formBuilder : FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public editData: any, private dialogRef: MatDialogRef<DialogueComponent>,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['', Validators.required],
      cohort:['', Validators.required],
      phoneNumber:['', Validators.required]
    });
  }

  addStudent(){
    if(!this.editData){
      // console.log(this.studentForm.value)
      if(this.studentForm.valid){
        this.studentsService.addNewStudent(this.studentForm.value)
        .subscribe({
          next:(res) =>{
            alert("Product Added")
            this.studentForm.reset();
            this.dialogRef.close("save");
          },
          error:()=>{
            alert("Error while adding product")
          }
        })
      }
    }else{
      this.updateProduct();
      }
    }
  updateProduct(){
    this.studentsService.updateMovie(this.editData.id)
    .subscribe({
      next:(res)=>{
        alert('Student Updated');
        this.studentForm.reset();
        this.dialogRef.close('update')
      },
      error:() =>{
        alert("Error while updating")
      }
    })
  }
}
