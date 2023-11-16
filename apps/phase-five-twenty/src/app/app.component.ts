import { Component } from '@angular/core';

@Component({
  selector: 'phase-five-twenty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'phase-five-twenty';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
