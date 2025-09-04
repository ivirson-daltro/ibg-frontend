import { Component } from '@angular/core';
import { CardInfoComponent } from '../../shared/components/card-info/card-info.component';
import { ChartComponent } from '../../shared/components/chart/chart.component';

@Component({
  selector: 'app-home',
  imports: [CardInfoComponent, ChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
