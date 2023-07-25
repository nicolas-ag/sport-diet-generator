import { Component, OnInit } from '@angular/core';
import {
  faPerson,
  faPersonWalking,
  faPersonRunning,
  faPersonSwimming,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  sexeInput: string = '';
  ageInput: number = 0;
  heightInput: number = 0;
  weightInput: number = 0;
  nbCalories: number = 0;

  title = 'sport-diet-generator';
  faPerson = faPerson;
  faPersonWalking = faPersonWalking;
  faPersonRunning = faPersonRunning;
  faPersonSwimming = faPersonSwimming;

  ngOnInit(): void {}

  estimatedCaloriesDaily(): void {
    if (this.sexeInput == '1') {
      this.nbCalories = (
        (13.707*(this.weightInput)) + (this.heightInput*492.3) - (this.ageInput*6.673) 
      ) + 77.607;
    }
    else if(this.sexeInput == '2') {
      this.nbCalories = (
        (9.740*(this.weightInput)) + (this.heightInput*172.9) - (this.ageInput*4.737) 
      ) + 77.607;
    }
  }

}
