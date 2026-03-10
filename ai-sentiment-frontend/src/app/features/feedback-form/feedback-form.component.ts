import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {

  feedbackText: string = '';
  sentiment: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  submit() {

    if(!this.feedbackText || !this.sentiment){
      this.message = "Please enter feedback and select sentiment";
      return;
    }

    const payload = {
      text: this.feedbackText,
      sentiment: this.sentiment
    };

    this.http.post<any>('http://localhost:8080/api/feedback', payload)
      .subscribe({
        next: (res) => {
          this.message = res.sentiment;

          // clear form
          this.feedbackText = '';
          this.sentiment = '';
        },
        error: (err) => {
          console.error(err);
          this.message = "Error saving feedback";
        }
      });

  }

}