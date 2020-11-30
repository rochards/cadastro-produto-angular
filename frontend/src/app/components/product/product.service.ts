import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // preciso importar o material lá no app.module.ts
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from './product.model';

/**
 * Essa anotação indica que essa classe pode ser injeta em outros componentes
 * Esse service é um singleton. Ele é compartilhado entre todos os componentes
 * que o solicite, ou seja, não é criado mais de uma instância dele.
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'] // estilo definido em sytle.css
    });
  }

  errorHandler(error: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY // isso retorna o observable vazio
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj), // esse método só está retornando o objeto, caso haja sucesso
      // o método abaixo só executa se houver error no post
      catchError(error => this.errorHandler(error))
    );
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(error => this.errorHandler(error))
    )
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(error => this.errorHandler(error))
    )
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(error => this.errorHandler(error))
    )
  }

  delete(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(error => this.errorHandler(error))
    )
  }
}
