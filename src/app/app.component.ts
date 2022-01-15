import { Component } from '@angular/core';
import {Personal} from './myClasses/personal'; //Importing my Personal class
import {Company, Categories, Products} from './a4interface'; //Importing my interface

/*Bringing in JSON file */
import myInterface from '../assets/data/A4.json'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A4sandiegj';

  /* Below I am populating default values into Personal Class*/
  bio: Personal ={
    fName: "James Matthew",
    lName: "San Diego",
    studNum: 991585093 ,
    username: "sandiegj" ,
    pic: "./assets/images/ok.jpg"
  }

  /*Paths into JSON files */
  company: Company = myInterface.company;
  category: Categories[] = myInterface.categories;
  products: Products[] = myInterface.products;  

}
