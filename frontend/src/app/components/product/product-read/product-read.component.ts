import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[];

  // a injeção de dependências só funciona no construtor
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // o método read() retorna um observable
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(this.products)
    })
  }

}
