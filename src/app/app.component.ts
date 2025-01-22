import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContentComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'seanmjones-angular-application';
}
