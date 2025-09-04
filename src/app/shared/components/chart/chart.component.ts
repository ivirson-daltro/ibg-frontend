import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit {
  labels = input<string[]>([]);
  data = input<number[]>([]);
  maxHeight = input<number>(100);

  ngOnInit() {
    document.documentElement.style.setProperty(
      '--bar-count',
      this.labels().length.toString()
    );
  }

  maxDataValue(data: number[]): number {
    return Math.max(...data);
  }
}
