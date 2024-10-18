import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {AUTH_API} from "./auth-api";
import {LoginModel} from "../models/login.model";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  data = {
    users: [{
      id: "d6950477-b337-4069-a34a-f63bb6c6f433",
      login: "vberkley0@i2i.jp",
      nome: "Veronike Berkley",
      role: "Architect"
    }, {
      id: "423cf22a-e19e-44b7-9ff4-ff96708d58d8",
      login: "bkitchin1@deliciousdays.com",
      nome: "Brandyn Kitchin",
      role: "Estimator"
    }, {
      id: "de7bc2c8-1325-4ca1-9fc1-02d916fcb95a",
      login: "trockingham2@sfgate.com",
      nome: "Tremain Rockingham",
      role: "Estimator"
    }, {
      id: "1d0cde0c-4004-4545-8017-12c4f2a089fa",
      login: "dmacgiany3@reverbnation.com",
      nome: "Dilan MacGiany",
      role: "Engineer"
    }, {
      id: "fab1dd0d-b128-4019-83a1-b51fad4d2adc",
      login: "bwalsom4@ezinearticles.com",
      nome: "Belia Walsom",
      role: "Estimator"
    }, {
      id: "f15b3d40-0831-4811-b5b2-c98d1dd65388",
      login: "ziddins5@wikia.com",
      nome: "Zacharia Iddins",
      role: "Architect"
    }, {
      id: "f8628af2-9120-4f0e-bc5d-3bddf170adcb",
      login: "so6@pbs.org",
      nome: "Sig O' Mara",
      role: "Surveyor"
    }, {
      id: "b89da528-0c08-4c8a-aa90-8eeaaf538cf6",
      login: "aberecloth7@amazonaws.com",
      nome: "Annissa Berecloth",
      role: "Engineer"
    }, {
      id: "3afc1a84-665b-48d5-a915-c9780bc5d5e6",
      login: "mcalkin8@patch.com",
      nome: "Martynne Calkin",
      role: "Electrician"
    }, {
      id: "f3f4d926-2793-4c49-8672-b2a2ff379107",
      login: "dmimmack9@vistaprint.com",
      nome: "Den Mimmack",
      role: "Construction Manager"
    }, {
      id: "18d59522-90d2-42eb-8e4d-912d65132776",
      login: "cskilbecka@imgur.com",
      nome: "Cybil Skilbeck",
      role: "Construction Manager"
    }, {
      id: "98756f5d-98f2-4e10-8b97-5be63a288b81",
      login: "blicarib@marriott.com",
      nome: "Bill Licari",
      role: "Project Manager"
    }, {
      id: "1591191c-0b04-4ee5-8067-5f57c9a783c8",
      login: "apockc@wikipedia.org",
      nome: "Ariadne Pock",
      role: "Construction Manager"
    }, {
      id: "bdab7de0-e920-4a1b-a732-cc3b8c06f0b6",
      login: "ssabbend@elegantthemes.com",
      nome: "Serena Sabben",
      role: "Construction Foreman"
    }, {
      id: "45b7c129-09d9-4ef3-8cfa-e3393a20baca",
      login: "mgoldene@yellowpages.com",
      nome: "Melosa Golden of Ireland",
      role: "Construction Foreman"
    }, {
      id: "a15f9fa4-ed47-4934-88bb-440f9cc2fb1e",
      login: "kcowlinf@bloglines.com",
      nome: "Kennett Cowlin",
      role: "Estimator"
    }, {
      id: "4628fa5b-7b7e-4b3b-8716-59426b7faf88",
      login: "kconerdingg@google.fr",
      nome: "King Conerding",
      role: "Construction Worker"
    }, {
      id: "dbcc0963-1dc9-45ca-8a80-9c5785cc833b",
      login: "vwyldesh@washingtonpost.com",
      nome: "Vanya Wyldes",
      role: "Construction Expeditor"
    }]
  };

  constructor(
    private http: HttpClient
  ) { }

  listarUsuarios(): Observable<any> {
    /*return this.http.get(`${AUTH_API}/`);*/
    return of(this.data.users);
  }

  login(login: LoginModel): Observable<any>{
    return this.http.post(`${AUTH_API}/auth/login`, login);
  }


}
