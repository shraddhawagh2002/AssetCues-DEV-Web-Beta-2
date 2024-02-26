import { Component } from '@angular/core';
import { SharedModule } from '../../app/shared/shared.module';


@Component({
  selector: 'app-physical-asset',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './physical-asset.component.html',
  styleUrl: './physical-asset.component.scss'
})
export class PhysicalAssetComponent {
  isMenuOpen: boolean = false;
  selectedTabIndex: number = 0;

  dynamicData: string;

  constructor() {
    
    this.dynamicData = 'Physical Asset Management';
  }
}
