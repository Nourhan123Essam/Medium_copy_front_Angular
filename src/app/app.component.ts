import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseHomeComponent } from './NotLoggedHome/base-home/base-home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BaseHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Medium-copy-angular';
}
