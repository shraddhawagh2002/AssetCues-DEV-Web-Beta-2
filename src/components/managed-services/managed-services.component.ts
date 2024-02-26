import { Component } from '@angular/core';
import { SharedModule } from '../../app/shared/shared.module';


@Component({
  selector: 'app-managed-services',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './managed-services.component.html',
  styleUrl: './managed-services.component.scss'
})
export class ManagedServicesComponent {

  dynamicData: string;

  constructor() {
    
    this.dynamicData = 'Complete Assistance in setting up your fixed Asset Operations.';
  }
}
