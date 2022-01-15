import { Component, OnInit, Input } from '@angular/core'; //Using Input function
import { Company } from '../a4interface'; //importing interface

@Component({
  selector: 'app-companyinformation',
  templateUrl: './companyinformation.component.html',
  styleUrls: ['./companyinformation.component.css']
})
export class CompanyinformationComponent implements OnInit {

  @Input() companyInfo: Company; //companyInfo now knows information about Company interface

  constructor() { }

  ngOnInit(): void {
  }

}
