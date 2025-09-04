import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  imports: [],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss',
})
export class CardInfoComponent {
  title = input<string>('');
  value = input<string>('');
}
