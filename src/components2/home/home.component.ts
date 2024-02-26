import { Component } from '@angular/core';
import { SharedModule } from '../../app/shared/shared.module';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // dynamicData: string;

  // constructor() {
    
  //   this.dynamicData = 'Smooth Transition to Retirement';

  // }


}
