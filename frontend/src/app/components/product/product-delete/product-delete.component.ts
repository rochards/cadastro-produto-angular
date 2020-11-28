import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private deleteDialogRef: MatDialogRef<ProductDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
  }

  deleteProduct(): void {
    this.productService.delete(this.data.id).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucesso!')
      this.deleteDialogRef.close()
    })
  }
}
