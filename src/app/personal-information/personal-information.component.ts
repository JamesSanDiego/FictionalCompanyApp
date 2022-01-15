import { Component, OnInit, Input } from '@angular/core'; //Using Input function
import { Personal } from '../myClasses/personal';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  @Input() personalInfo: Personal;

  constructor() { }

  ngOnInit(): void {
  }

}
