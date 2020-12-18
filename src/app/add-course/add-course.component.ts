import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(public formval:FormBuilder, public roter:Router) { }
  submitted=false;

  studentForm=this.formval.group({
    firstname:['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    phone:['',Validators.required],
    lastname:['',Validators.required],
  })

    get myname(){return this.studentForm.get('firstname');}
    get myemail(){return this.studentForm.get('email');}
    get myphone(){return this.studentForm.get('phone');}
    get mylastname(){return this.studentForm.get('lastname');}

  addStudent() {
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      // alert (' Nice one');
      this.studentForm.reset();
      this.roter.navigate(['/navbar/']);
    }, 2000);
  }

  ngOnInit() {
  }

}
