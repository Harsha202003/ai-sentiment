import { Component } from '@angular/core';
import { FeedbackFormComponent } from './features/feedback-form/feedback-form.component';
import { FeedbackListComponent } from './features/feedback-list/feedback-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FeedbackFormComponent, FeedbackListComponent],
  template: `
    <h1 style="text-align:center;">AI Sentiment Dashboard</h1>
    <app-feedback-form></app-feedback-form>
    <app-feedback-list></app-feedback-list>
  `
})
export class AppComponent {}