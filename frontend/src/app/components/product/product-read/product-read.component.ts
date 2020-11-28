import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[];
  headers = ['id', 'name', 'price', 'action']

  // a injeção de dependências só funciona no construtor
  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // o método read() retorna um observable
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

  openDeleteDialog(id: string): void {
    const dialogRef = this.dialog.open(ProductDeleteComponent, {
      data: {
        id
      }
    })

    // ação para quando o usuário fechar o dialog
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/products'])
    })
  }
}
