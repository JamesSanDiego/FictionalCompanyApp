import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit,Input } from '@angular/core'; //Adding Input function
import { Categories} from '../a4interface';
import { Products} from '../a4interface';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent implements OnInit {

  /* Assigning my variables the Information from interface data*/
  @Input() productCategories: Categories[];
  @Input() productData: Products[];

  outputArea: string;
  catid: Products[];
  catImg: Categories[];

  /* This function took me a while to figure out. I am happy with the way it turned out*/
  displayProduct(id){
    switch(id){
      case 1: this.catid = this.productData; this.catImg = this.productCategories; break;
      case 2: this.catid = this.productData; this.catImg = this.productCategories; break;
      case 3: this.catid = this.productData; this.catImg = this.productCategories; break;
      case 4: this.catid = this.productData; this.catImg = this.productCategories; break;
      case 5: this.catid = this.productData; this.catImg = this.productCategories; break;
      case 6: this.catid = this.productData; this.catImg = this.productCategories; break;
      case 7: this.catid = this.productData; this.catImg = this.productCategories; break;
      case 8: this.catid = this.productData; this.catImg = this.productCategories; break;
      case 9: this.catid = this.productData; this.catImg = this.productCategories; break;
      case 10:this.catid = this.productData; this.catImg = this.productCategories; break;
    }

    /* 
    Iterate throught the variable that contains Products[]
    Check if IDs match
    Nest another loop inside, but this time for the variable that holds Categories[]
    Check if Categories ID matches ID passed into function
    Using Template Literals, build my output for the <img>
    Build the rest of my output underneath the image
    */
    this.outputArea = "";
    for(let prod of this.catid){
      if(prod.Category === id){ 
        for(let img of this.catImg){
          if(img.catid === id){ 
            this.outputArea += 
            `
            <img src='assets/images/${img.catimg}' width='75px'>
            `;
          } 
        } 
        this.outputArea += 
        `
        <img src='' width='75px'>
        <p> <strong>Product ID:</strong> ${prod.ProductID} / <strong>Product Name:</strong> ${prod.Name}</p>
        <p> <strong>Price:</strong> $${prod.Price} / <strong>Brand:</strong> ${prod.Brand} / <strong>Rating Avg:</strong> ${prod.RatingAvg}</p>
        <hr>
        `;
        } 
       // console.log(cls); //This prints out all 18 objs in the json file.....

      } 
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
