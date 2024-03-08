import { Component } from '@angular/core';
import { SharedModule } from '../../../app/shared/shared.module';


@Component({
  selector: 'app-customer-space',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './customer-space.component.html',
  styleUrl: './customer-space.component.scss'
})
export class CustomerSpaceComponent {

}
