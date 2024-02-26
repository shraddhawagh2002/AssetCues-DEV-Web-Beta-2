import { Component } from '@angular/core';
import { SharedModule } from '../../app/shared/shared.module';


@Component({
  selector: 'app-accurate-calculation',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './accurate-calculation.component.html',
  styleUrl: './accurate-calculation.component.scss'
})
export class AccurateCalculationComponent {
 
  dynamicData: string;

  constructor() {
    
    this.dynamicData = 'Accurate Calculation of Asset Depreciation';
  }

}
