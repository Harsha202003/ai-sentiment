import { Component } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedbackFormComponent } from './features/feedback-form/feedback-form.component';
import { FeedbackListComponent } from './features/feedback-list/feedback-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent,CommonModule,FormsModule,FeedbackFormComponent,FeedbackListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
sentiment: any;
feedbackList: any;
analyzeFeedback() {
throw new Error('Method not implemented.');
}
feedbackText: any;
}