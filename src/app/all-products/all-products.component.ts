import { Component, OnInit,Input } from '@angular/core';
import {Products} from '../a4interface';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  @Input() productData: Products[];

  constructor() { }

  ngOnInit(): void {
  }

}
