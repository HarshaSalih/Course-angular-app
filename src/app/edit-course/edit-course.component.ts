import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent {


  constructor(private api:ApiService){
    api.fetchCourses().subscribe(
      (response)=>{
        this.course=response;
      }
    )


  }

  course:any=[]

}
