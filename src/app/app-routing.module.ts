import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ListagemUsuariosComponent} from "./components/listagem-usuarios/listagem-usuarios.component";
import {LoginComponent} from "./security/login/login.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: '', component: AppComponent,
    children: [
      { path: 'listar-usuarios' , component: ListagemUsuariosComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
