import { Component } from '@angular/core';
import { SharedModule } from '../../../app/shared/shared.module';


@Component({
  selector: 'app-global-enterprises',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './global-enterprises.component.html',
  styleUrl: './global-enterprises.component.scss'
})
export class GlobalEnterprisesComponent {

}
