import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  /**
   * o atributo router eh do tipo Router.
   * Esse componente Router está sendo importado nesse meu componente
   * product-crud.component.ts. 
   * Está ocorrendo uma injeção de dependência
   */
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    /**
     * Esta função é invocada por um click do botão que se encontra
     * no product-crud.component.html.
     * O método abaixo faz a página mudar para a URL indicada
     */
    this.router.navigate(['/products/create'])
  }
}
