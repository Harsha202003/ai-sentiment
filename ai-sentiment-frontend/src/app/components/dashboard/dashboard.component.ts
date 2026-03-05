import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  total = 25;
  positive = 12;
  negative = 7;
  neutral = 6;

  chartData = {
    labels: ['Positive','Negative','Neutral'],
    datasets: [
      {
        data: [12,7,6],
        backgroundColor: ['green','red','orange']
      }
    ]
  };

}