import { Component } from '@angular/core';

@Component({
   selector: 'page-product-search',
   templateUrl: 'product-search.page.html',
   styleUrls: ['product-search.page.scss'],
})
export class ProductSearchPage {
   onScroll(v: any) {
      console.log(v);
   }
}
