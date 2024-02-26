import { Component, Input } from '@angular/core';
import { SharedModule } from '../../app/shared/shared.module';


@Component({
  selector: 'app-success-story',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './success-story.component.html',
  styleUrl: './success-story.component.scss'
})
export class SuccessStoryComponent {
@Input() slides:any[]=[];
currentSlide=0;

jumpToSlide(index:number){
  this.currentSlide=index;
}

}
