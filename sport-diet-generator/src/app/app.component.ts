import { Component } from '@angular/core';
import { faPerson, faPersonWalking, faPersonRunning, faPersonSwimming} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sport-diet-generator';
  faPerson = faPerson;
  faPersonWalking = faPersonWalking;
  faPersonRunning = faPersonRunning;
  faPersonSwimming = faPersonSwimming;
}
