import {Usuario} from "./usuario";

export class CurrentUser {
  public token = '';
  public user: Usuario= new Usuario('', '', '', '');
}
