import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  title = 'angular app';

  loading = false
  // products$: Observable<IProduct[]>
  term = ''

  
  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
    ) {

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

      // this.loading = true
      // this.products$ = this.productsService.getAll().pipe(
      //  tap(() => this.loading = false)
      // )

      this.productsService.getAll().subscribe( () => {
        this.loading = false
      })
    }


}
