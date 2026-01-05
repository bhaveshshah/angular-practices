import { ChangeDetectionStrategy, Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  showMe() {
    console.log('Button Clicked');
  }
}
