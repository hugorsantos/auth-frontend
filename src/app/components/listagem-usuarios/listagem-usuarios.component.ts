import {Component, OnInit} from '@angular/core';
import {UsuariosService} from "../../services/usuarios.service";
import {DataTablesModule} from "angular-datatables";
import {Usuario} from "../../models/usuario";

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrl: './listagem-usuarios.component.css'
})
export class ListagemUsuariosComponent implements OnInit {

  page:number=0;
  count:number=5;
  users: any;
  dado: Usuario = {
    id: '',
    login: '',
    nome: '',
    role: ''
  }

  constructor(
    private usuarioService: UsuariosService,
  ) {
  }

  ngOnInit() {
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this.usuarioService.listarUsuarios().subscribe(response => {
      this.users = response;
      console.log(this.users);
    });
  }

  selecionarRegistro(user: any): void {
    console.log(user);
    this.dado = user;
  }

}
