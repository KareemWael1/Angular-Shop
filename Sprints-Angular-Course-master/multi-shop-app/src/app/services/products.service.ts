import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = [
    {
      id: 1,
      name: 'Product 1',
      discount: 0.2,
      imageUrl: '/assets/img/product-1.jpg',
      price: 100,
      rating: 4.5,
      ratingCount: 100,
      type: 'featured',
      size:'s',
      color:'black'
    },
    {
      id: 2,
      name: 'Product 2',
      discount: 0.2,
      imageUrl: '/assets/img/product-1.jpg',
      price: 100,
      rating: 4.5,
      ratingCount: 100,
      type: 'recent',
      size:'m',
      color:'black'
    },
    {
      id: 3,
      name: 'Product 3',
      discount: 0.2,
      imageUrl: '/assets/img/product-1.jpg',
      price: 100,
      rating: 4.5,
      ratingCount: 100,
      type: 'recent',
      size:'l',
      color:'black'
    },
    {
      id: 4,
      name: 'Product 4',
      discount: 0.2,
      imageUrl: '/assets/img/product-2.jpg',
      price: 220,
      rating: 4.5,
      ratingCount: 99,
      type: 'recent',
      size:'xl',
      color:'blue'
    },
    {
      id: 5,
      name: 'Product 5',
      discount: 0.2,
      imageUrl: '/assets/img/product-3.jpg',
      price: 350,
      rating: 3.5,
      ratingCount: 99,
      type: 'recent',
      size:'m',
      color:'white'
    },
    {
      id: 6,
      name: 'Product 6',
      discount: 0.2,
      imageUrl: '/assets/img/product-4.jpg',
      price: 90,
      rating: 3,
      ratingCount: 99,
      type: 'recent',
      size:'s',
      color:'black'
    },
    {
      id: 7,
      name: 'Product 7',
      discount: 0.2,
      imageUrl: '/assets/img/product-5.jpg',
      price: 450,
      rating: 5,
      ratingCount: 99,
      type: 'recent',
      size:'m',
      color:'white'
    },
    {
      id: 8,
      name: 'Product 8',
      discount: 0.2,
      imageUrl: '/assets/img/product-6.jpg',
      price: 240,
      rating: 4.5,
      ratingCount: 99,
      type: 'recent',
      size:'m',
      color:'black'
    },
    {
      id: 9,
      name: 'Product 9',
      discount: 0.2,
      imageUrl: '/assets/img/product-7.jpg',
      price: 180,
      rating: 3.5,
      ratingCount: 99,
      type: 'recent',
      size:'l',
      color:'black'
    },
    {
      id: 10,
      name: 'Product 10',
      discount: 0.2,
      imageUrl: '/assets/img/product-8.jpg',
      price: 40,
      rating: 3.5,
      ratingCount: 99,
      type: 'recent',
      size:'l',
      color:'blue'
    },
    {
      id: 11,
      name: 'Product 11',
      discount: 0.2,
      imageUrl: '/assets/img/product-9.jpg',
      price: 110,
      rating: 3,
      ratingCount: 99,
      type: 'recent',
      size:'l',
      color:'blue'
    },
  ];

  filteredProductsByPrice: Array<Product> = [];
  filteredProductsByColor: Array<Product> = [];
  filteredProductsBySize: Array<Product> = [];
  temp: Array<Product> = [];

  constructor() {}

  getProducts(type: string): Array<Product> {
    return this.products.filter((x) => x.type == type);
  }

  getAllProducts(): Array<Product> {
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products.find((x) => x.id == id) ?? {} as Product;
  }

  filterProducts(priceAll: HTMLInputElement | null, price1: HTMLInputElement | null,
    price2: HTMLInputElement | null, price3: HTMLInputElement | null, price4: HTMLInputElement | null,
    price5: HTMLInputElement | null, colorAll: HTMLInputElement | null, color1: HTMLInputElement | null,
    color2: HTMLInputElement | null, color3: HTMLInputElement | null, color4: HTMLInputElement | null,
    color5: HTMLInputElement | null, sizeAll: HTMLInputElement | null, size1: HTMLInputElement | null,
    size2: HTMLInputElement | null, size3: HTMLInputElement | null, size4: HTMLInputElement | null,
    size5: HTMLInputElement | null): Array<Product>{

    this.filteredProductsByPrice = [];
    this.filteredProductsByColor = [];
    this.filteredProductsBySize = [];

    if(priceAll?.checked){
      this.filteredProductsByPrice = this.products;
    }
    else{
      this.filterByPrice(price1, 0, 100);
      this.filterByPrice(price2, 100, 200);
      this.filterByPrice(price3, 200, 300);
      this.filterByPrice(price4, 300, 400);
      this.filterByPrice(price5, 400, 500);
    }

    if(colorAll?.checked){
      this.filteredProductsByColor = this.filteredProductsByPrice;
    }
    else{
      this.filterByColor(color1, 'black');
      this.filterByColor(color2, 'white');
      this.filterByColor(color3, 'red');
      this.filterByColor(color4, 'blue');
      this.filterByColor(color5, 'green');
    }

    if(sizeAll?.checked){
      this.filteredProductsBySize = this.filteredProductsByColor;
    }
    else{
      this.filterBySize(size1, 'xs');
      this.filterBySize(size2, 's');
      this.filterBySize(size3, 'm');
      this.filterBySize(size4, 'l');
      this.filterBySize(size5, 'xl');
    }

    return this.filteredProductsBySize;
  }

  filterByPrice(checkBox: HTMLInputElement | null, min: number, max: number){
    if(checkBox?.checked){
      this.temp = this.products.filter((x) => x.price*(1-x.discount) <= max && x.price*(1-x.discount) > min);
      for(let i = 0; i<this.temp.length; i++){
        this.filteredProductsByPrice.push(this.temp[i]);
      }
      this.temp = [];
    }
  }

  filterByColor(checkBox: HTMLInputElement | null, color: string){
    if(checkBox?.checked){
      this.temp = this.filteredProductsByPrice.filter((x) => x.color == color);
      for(let i = 0; i<this.temp.length; i++){
        this.filteredProductsByColor.push(this.temp[i]);
      }
      this.temp = [];
    }
  }

  filterBySize(checkBox: HTMLInputElement | null, size: string){
    if(checkBox?.checked){
      this.temp = this.filteredProductsByColor.filter((x) => x.size == size);
      for(let i = 0; i<this.temp.length; i++){
        this.filteredProductsBySize.push(this.temp[i]);
      }
      this.temp = [];
    }
  }
}
