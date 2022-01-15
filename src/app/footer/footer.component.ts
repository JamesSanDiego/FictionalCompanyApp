import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  cdate = new Date(); //variable that holds the current date

  constructor() { }

  ngOnInit(): void {
  }

}
