import { Component } from '@angular/core';
import {SharedService} from "./services/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'auth-frontend';
  showTemplate = false;

  constructor(
    public shared: SharedService,
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.shared.showTemplate.subscribe(
      show => this.showTemplate = show
    );
  }
  showContentWrapper() {
    return {
      'content-wrapper': this.shared.isLoggedIn()
    };
  }
}
