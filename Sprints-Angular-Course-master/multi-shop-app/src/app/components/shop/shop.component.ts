import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private productsService : ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }

  filterProducts(){
    this.products = this.productsService.filterProducts(
      document.getElementById("price-all") as HTMLInputElement | null,
      document.getElementById("price-1") as HTMLInputElement | null,
      document.getElementById("price-2") as HTMLInputElement | null,
      document.getElementById("price-3") as HTMLInputElement | null,
      document.getElementById("price-4") as HTMLInputElement | null,
      document.getElementById("price-5") as HTMLInputElement | null,
      document.getElementById("color-all") as HTMLInputElement | null,
      document.getElementById("color-1") as HTMLInputElement | null,
      document.getElementById("color-2") as HTMLInputElement | null,
      document.getElementById("color-3") as HTMLInputElement | null,
      document.getElementById("color-4") as HTMLInputElement | null,
      document.getElementById("color-5") as HTMLInputElement | null,
      document.getElementById("size-all") as HTMLInputElement | null,
      document.getElementById("size-1") as HTMLInputElement | null,
      document.getElementById("size-2") as HTMLInputElement | null,
      document.getElementById("size-3") as HTMLInputElement | null,
      document.getElementById("size-4") as HTMLInputElement | null,
      document.getElementById("size-5") as HTMLInputElement | null
      );
  }
}
