import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: blue;
    }
    p {
      animation: ease-in-out;
    }
  `]
})
export class AppComponent {
  //title = 'the World of Phantom !!!';
  //name = '';
}
