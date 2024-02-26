import { Component } from '@angular/core';
import { SharedModule } from '../../app/shared/shared.module';


@Component({
  selector: 'app-simple-asset',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './simple-asset.component.html',
  styleUrl: './simple-asset.component.scss'
})
export class SimpleAssetComponent {

  // isMenuOpen: boolean = false;
  // selectedTabIndex: number = 0;

  dynamicData: string;

  constructor() {
    
    this.dynamicData = 'Simple Asset Transfer Between Locations and Depatments.';
  }
}
