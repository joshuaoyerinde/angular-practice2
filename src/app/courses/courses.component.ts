import { Component, OnInit } from '@angular/core';
import { CourselistService } from '../courselist.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations:[
      trigger('fade',[
        transition('void => *',[
          style({backgroundColor:'yellow',opacity:0}),
          animate(2000)
        ]),
        transition('void => *',[
          // style({backgroundColor:'yellow',opacity:0}),
          animate(200,style({opacity:0}))
        ])
        // state()
      ])
  ]
})
export class CoursesComponent implements OnInit {
  fstcourse;
  scdcourse;
  thcourse
  // saveTo
  myJson
  public everyCourse=[];
  constructor(public serve:CourselistService) { }

  ngOnInit() {
    this.getcouse();
  }
  getcouse(){
    this.serve.loadCouse().subscribe(data=>{
      this.everyCourse=data;
    });
  }

  putCourse(){
     let coursedetails={fstc:this.fstcourse,scdc:this.scdcourse,thd:this.thcourse};
     this.serve.addCourse(coursedetails);

    //  if(this.saveTo!==null){
    //   coursedetails=this.saveTo;
    // }
    // this.saveTo=JSON.parse(localStorage.getItem('coursedettails'));
     this.myJson=JSON.stringify(coursedetails);
     localStorage.setItem('deatails', this.myJson);

    // console.log(coursedetails);
  }
  deleteSni(value) {
    this.serve.remove(value);
  }
}
