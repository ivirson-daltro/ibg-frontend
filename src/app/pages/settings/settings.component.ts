import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-settings',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  isDarkMode = false;

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe(
      (value) => (this.isDarkMode = value)
    );
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
