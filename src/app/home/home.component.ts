import { Component, OnInit } from '@angular/core';
import {Client} from '../Interfaces/Client';
import {ClientsService} from '../services/clients.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clients: Client[];
  constructor(private clientService: ClientsService) {
    this.clientService.get().subscribe( (data: Client[]) => {
      console.log(data);
      this.clients = data;
    }, (error) => {
      console.log(error);
      alert('Ocurrio un error');
    });
  }

  ngOnInit() {
  }

  delete(id) {
    if (confirm('Está seguro de eliminar el cliente?')) {
        this.clientService.delete(id).subscribe((data) => {
            this.clients = this.clients.filter(client => client.id !== id);
            console.log(data);
            alert('Eliminado con éxito');
        }, (error) => {
            console.log(error);
        });
    }
  }

}
