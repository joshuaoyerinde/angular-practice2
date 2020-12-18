import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourselistService {
 public courselist =[{fstc:'math',scdc:'english',thd:'biology'}];
 public saveTo;
  constructor(public http: HttpClient){}

  loadCouse(){
    return of(this.courselist);
  }
  addCourse(course){
      this.courselist.push(course)
      // this. saveTo=JSON.parse(localStorage.getItem('deatails'));
  }
  remove(id){
    let index= this.courselist.indexOf(id)
    this.courselist.splice(index,1)
  }

}
