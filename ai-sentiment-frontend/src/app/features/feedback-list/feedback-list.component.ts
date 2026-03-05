import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  feedbacks:any[] = [];

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.loadFeedback();
  }

  loadFeedback(){
    this.http.get<any[]>('http://localhost:8080/api/feedback')
      .subscribe(data => {
        this.feedbacks = data;
      });
  }

  deleteFeedback(id:number){

    this.http.delete(`http://localhost:8080/api/feedback/${id}`)
      .subscribe(() => {
        this.loadFeedback();
      });

  }

}