import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../models/usuario";
import {SharedService} from "../../services/shared.service";
import {UsuariosService} from "../../services/usuarios.service";
import {Router} from "@angular/router";
import {LoginModel} from "../../models/login.model";
import {CurrentUser} from "../../models/current-user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  user: Usuario = new Usuario('', '', '', '');
  shared: SharedService = new SharedService();
  message = '';
  loginModel: LoginModel = new LoginModel('', '');
  constructor(
    private router: Router,
    private usuarioService: UsuariosService,
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
  }

  realizarLogin(): void {
    this.usuarioService.login(this.loginModel).subscribe((userAuthentication: CurrentUser) => {
      this.shared.token = userAuthentication.token;
      this.shared.user = userAuthentication.user;
      this.shared.user.role = this.shared.user.role;
      this.shared.showTemplate.emit(true);
      this.router.navigate(['/']);
    }, err => {
      this.shared.token = '';
      this.shared.user = new Usuario('', '', '', '');
      this.shared.showTemplate.emit(false);
      this.message = 'Error';
    });
  }

  cancelLogin() {
    this.message = '';
    this.user = new Usuario('', '', '', '');
    window.location.href = '/login';
    window.location.reload();
  }
}
