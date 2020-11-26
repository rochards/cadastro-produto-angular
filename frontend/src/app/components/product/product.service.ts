import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // preciso importar o material lá no app.module.ts

// essa anotação indica que essa classe pode ser injeta em outros componentes
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
