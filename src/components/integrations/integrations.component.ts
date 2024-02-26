import { Component } from '@angular/core';
import { SharedModule } from '../../app/shared/shared.module';


@Component({
  selector: 'app-integrations',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.scss'
})
export class IntegrationsComponent {


  dynamicData: string;

  constructor() {
    
    this.dynamicData = 'Wherever your asset data resides,bring it in assetcues through our certified prebuilt connectors';
  }
}
