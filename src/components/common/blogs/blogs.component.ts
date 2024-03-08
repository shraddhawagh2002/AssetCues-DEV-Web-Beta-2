import { Component } from '@angular/core';
import { SharedModule } from '../../../app/shared/shared.module';


@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

}
