import { Component, OnInit } from '@angular/core';
import { NewsappService} from '../service/newsapp.service'

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {
 

  constructor(private api:NewsappService) { }
  
  topheadlineData:any =[];
  ngOnInit(): void {
  this.api.headline().subscribe((result)=>{
  console.log(result.articles);
  this.topheadlineData = result.articles;
  })
  }
    
}
