import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component'

import { MatCardModule } from '@angular/material/card';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component'
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

// as próximas 4 linhas são necessárias para formatar a moeda de acordo com o Brasil
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { MatIconModule } from '@angular/material/icon';

registerLocaleData(localePt)

@NgModule({
  declarations: [ // aqui ficam os componentes que serão renderizados no index.html
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, // precisei importar para utilizar o material instalado
    MatSidenavModule, // importei
    MatListModule, // importei
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [{
    provide: LOCALE_ID, // isso para usar o formato de modela do Brasil
    useValue: 'pt-BR'
  }], // aqui iria os services que eu gostaria de expor para fora do módulo
  bootstrap: [AppComponent]
})
export class AppModule { }
