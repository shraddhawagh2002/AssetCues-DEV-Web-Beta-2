import { Component } from '@angular/core';
import { SharedModule } from '../../../app/shared/shared.module';


@Component({
  selector: 'app-asset-inventory',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './asset-inventory.component.html',
  styleUrl: './asset-inventory.component.scss'
})
export class AssetInventoryComponent {

}
