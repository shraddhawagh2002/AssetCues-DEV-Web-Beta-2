import { Component } from '@angular/core';
import { SharedModule } from '../../../app/shared/shared.module';


@Component({
  selector: 'app-casestudies',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './casestudies.component.html',
  styleUrl: './casestudies.component.scss'
})
export class CasestudiesComponent {

}
