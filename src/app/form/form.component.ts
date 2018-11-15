import { Component, OnInit } from '@angular/core';
import {Client} from '../Interfaces/Client';
import {ClientsService} from '../services/clients.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  client: Client = {
    'name': null,
    'email': null
  }
  constructor(private clientService: ClientsService) { }

  ngOnInit() {
  }

  saveClient() {
    this.clientService.save(this.client).subscribe( (data) => {
      alert('Guardado');
      console.log(data);
    }, (error) => {
      alert('Error');
      console.log(error);
    });
  }

}
