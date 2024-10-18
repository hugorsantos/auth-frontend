import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListagemUsuariosComponent } from './components/listagem-usuarios/listagem-usuarios.component';
import {DataTablesModule} from "angular-datatables";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatPaginatorModule} from "@angular/material/paginator";
import { LoginComponent } from './security/login/login.component';
import {UsuariosService} from "./services/usuarios.service";
import {SharedService} from "./services/shared.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    ListagemUsuariosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    UsuariosService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
