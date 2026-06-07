import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Highlight } from './highlight';
import { NumberOnlyPipe } from './number-only-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Highlight,NumberOnlyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Welcome to Angular 16!');
}
