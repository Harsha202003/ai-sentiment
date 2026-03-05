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

  feedbackText = '';
  message = '';

  constructor(private http: HttpClient) {}

  submit() {

    const payload = {
      text: this.feedbackText
    };

    this.http.post<any>('http://localhost:8080/api/feedback/analyze', payload)
      .subscribe(res => {

        this.message = "Sentiment: " + res.sentiment;

        this.feedbackText = '';

      });

  }

}