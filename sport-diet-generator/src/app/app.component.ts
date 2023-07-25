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
  levelInput: number = 0;
  nbCaloriesBasal: number = 0;
  nbCaloriesGoals: number = 0;

  title = 'sport-diet-generator';
  faPerson = faPerson;
  faPersonWalking = faPersonWalking;
  faPersonRunning = faPersonRunning;
  faPersonSwimming = faPersonSwimming;

  ratiosGaosls: any = {
    None: {
      value: 1.2,
    },
    Little: {
      value: 1.375,
    },
    Medium: {
      value: 1.55,
    },
    Hard: {
      value: 1.725,
    },
    Expert: {
      value: 1.9,
    },
  };

  ngOnInit(): void {}

  estimatedCaloriesDaily(): void {
    if (this.sexeInput == '1') {
      this.nbCaloriesBasal = Math.trunc(
        13.707 * this.weightInput +
          this.heightInput * 492.3 -
          this.ageInput * 6.673 +
          77.607
      );
    } else if (this.sexeInput == '2') {
      this.nbCaloriesBasal = Math.trunc(
        9.74 * this.weightInput +
          this.heightInput * 172.9 -
          this.ageInput * 4.737 +
          77.607
      );
    }
  }

  changeLevel(test: string): void {
    this.levelInput = this.ratiosGaosls[test].value;
    this.estimatedCaloriesWithGoals();
  }

  estimatedCaloriesWithGoals(): void {
    this.nbCaloriesGoals = Math.trunc(this.nbCaloriesBasal * this.levelInput);
  }
}
