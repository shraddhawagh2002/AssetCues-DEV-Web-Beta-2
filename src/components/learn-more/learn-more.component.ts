import { Component } from '@angular/core';
import { SharedModule } from '../../app/shared/shared.module';


@Component({
  selector: 'app-learn-more',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './learn-more.component.html',
  styleUrl: './learn-more.component.scss'
})
export class LearnMoreComponent {
  isMenuOpen: boolean = false;
  selectedTabIndex: number = 0;

  dynamicData: string;

  constructor() {
    
    this.dynamicData = 'Learn More About AssureAsset’s Awesome Capabilities';
  }
}
