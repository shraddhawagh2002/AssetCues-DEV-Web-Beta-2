import { Component } from '@angular/core';
import { SharedModule } from '../../app/shared/shared.module';


@Component({
  selector: 'app-asset-verification',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './asset-verification.component.html',
  styleUrl: './asset-verification.component.scss'
})
export class AssetVerificationComponent {
  isMenuOpen: boolean = false;
  selectedTabIndex: number = 0;


  dynamicData: string;

  constructor() {
    
    this.dynamicData = 'Asset Verification and Reporting ';
  }
}
