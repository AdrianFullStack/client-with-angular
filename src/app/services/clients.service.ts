import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Client} from '../Interfaces/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  API_ENDPOINT = 'http://localhost:8080/api/v1'
  constructor(private httpClient: HttpClient) { }
  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/clients');
  }
  save(client: Client) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/clients', client, {headers: headers});
  }
}
