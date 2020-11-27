import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: 'Teste',
    price: 90.00
  }

  // fazendo a injeção de dependência
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    /**
     * Lembre-se do padrão observable. O meu método create retorna
     * um observable. O método subscrive notifica quando a resposta
     * da operação do método chegar
     */
    this.productService.create(this.product)
      .subscribe(() => {
        this.productService.showMessage('Produto criado com sucesso!')
        this.router.navigate(['/products'])
      })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
