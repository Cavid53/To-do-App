import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = 'Cavid';
  items = [
    { description: 'Seher yemeyi', action: 'No' },
    { description: 'Idman', action: 'No' },
    { description: 'Borc', action: 'No' },
    { description: 'Sinema', action: 'No' },
  ];
}
