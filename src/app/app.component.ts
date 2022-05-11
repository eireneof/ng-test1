import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-test1';

  public likes:number = 0;

  public like(): void {
    this.likes += 1;
  }


}
