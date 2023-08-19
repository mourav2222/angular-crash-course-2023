import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
// import {products as data} from './data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'angular app';

  // products: IProduct[] = data

  // products: IProduct[] = []
  loading = false
  products$: Observable<IProduct[]>
  term = ''

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

      this.loading = true
      this.products$ = this.productsService.getAll().pipe(
       tap(() => this.loading = false)
      )
/*       this.productsService.getAll().subscribe( products => {
      // console.log(products)
      this.products = products
      this.loading = false     */

    }


  }



