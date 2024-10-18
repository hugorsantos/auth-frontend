import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static instance: SharedService = new SharedService();
  user: Usuario = new Usuario('', '', '', '');
  token: string = '';
  showTemplate = new EventEmitter<boolean>();
  constructor() {
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new SharedService();
    }
    return this.instance;
  }

  isLoggedIn(): boolean {
    if (this.user == null) {
      return false;
    }
    return this.user.login != '';
  }
}
