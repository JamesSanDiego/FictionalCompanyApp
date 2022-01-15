import { Component, OnInit, Input } from '@angular/core'; //Adding input function
import { Personal } from '../myClasses/personal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() personalInfo : Personal; //personalInfo knows info about Personal class

  constructor() { }

  ngOnInit(): void {
  }

}
