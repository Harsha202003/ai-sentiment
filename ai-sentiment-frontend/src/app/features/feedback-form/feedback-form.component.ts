import { Component } from '@angular/core';
import { FeedbackService } from '../../core/services/feedback.service';
import { Feedback } from '../../models/feedback.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {

  feedbackText: string = '';
  message: string = '';

  constructor(private feedbackService: FeedbackService) {}

  submit() {
    const feedback: Feedback = {
      text: this.feedbackText
    };

    this.feedbackService.submitFeedback(feedback).subscribe(response => {
      this.message = `Sentiment: ${response.sentiment}`;
      this.feedbackText = '';
    });
  }
}