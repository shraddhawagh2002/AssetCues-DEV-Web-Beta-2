import { Component } from '@angular/core';
import { SharedModule } from '../../../app/shared/shared.module';


@Component({
  selector: 'app-algo',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './algo.component.html',
  styleUrl: './algo.component.scss'
})
export class AlgoComponent {

}
