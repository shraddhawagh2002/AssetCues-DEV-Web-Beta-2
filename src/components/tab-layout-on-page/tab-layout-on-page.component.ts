import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../../app/shared/shared.module';


@Component({
  selector: 'app-tab-layout-on-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './tab-layout-on-page.component.html',
  styleUrl: './tab-layout-on-page.component.scss',
 
})
export class TabLayoutOnPageComponent {

  isMenuOpen: boolean = false;
  selectedTabIndex: number = 0;

}
