import { Component } from '@angular/core';
import { SharedModule } from '../../../app/shared/shared.module';


@Component({
  selector: 'app-schedule-demo',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './schedule-demo.component.html',
  styleUrl: './schedule-demo.component.scss'
})
export class ScheduleDemoComponent {


  // dynamicData: string;

  // constructor() {
    
  //   this.dynamicData = 'Smooth Transition to Retirement';
  // }

  
}
