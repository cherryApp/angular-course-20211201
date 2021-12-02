import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-best-basic';

  other: string = '';

  constructor() {
  }


  get somthing() {
    return this.title;
  }

  static onSave() {
    // this.title = 'Saved';
  }
}
