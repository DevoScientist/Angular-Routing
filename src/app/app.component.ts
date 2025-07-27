import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, CurrencyConverterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'hello milky way!!'
  // name = "DEVOSCIENTIST"

  // date = new Date()

  // amount = 10

  prodctList:any
  constructor(private prodService : ProductService){

  }

  ngOnInit(){
    this.prodService.getProductList().subscribe((data:any)=>{
      console.log(data);
      
      this.prodctList=data.products
    })
  }


}
