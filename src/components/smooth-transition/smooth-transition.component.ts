import { Component, Input } from '@angular/core';
import { SharedModule } from '../../app/shared/shared.module';


@Component({
  selector: 'app-smooth-transition',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './smooth-transition.component.html',
  styleUrl: './smooth-transition.component.scss'
})
export class SmoothTransitionComponent {
  isMenuOpen: boolean = false;
  selectedTabIndex: number = 0;

  // @Input() data:any

  dynamicData: string;

  constructor() {
    
    this.dynamicData = 'Smooth Transition to Retirement';
  }

  // updateData(): void {
    
  //   this.dynamicData = 'Updated dynamic data';
  // }
}
