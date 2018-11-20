import { Component, OnInit } from '@angular/core';
import {Client} from '../Interfaces/Client';
import {ClientsService} from '../services/clients.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  client: Client = {
    'name': null,
    'email': null
  };
  id: any;
  editing: boolean = false;
  constructor(private clientService: ClientsService,  private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.editing = true;
        this.clientService.getById(this.id).subscribe((data: Client) => {
            console.log(data);
            this.client = data;
        }, (error) => {
            console.log(error);
        });
    } else {
        this.editing = false;
    }
  }

  ngOnInit() {
  }

  saveClient() {
    if (!this.editing) {
        this.clientService.save(this.client).subscribe( (data) => {
            alert('Guardado');
            console.log(data);
        }, (error) => {
            alert('Error');
            console.log(error);
        });
    } else {
        this.clientService.update(this.client).subscribe( (data) => {
            alert('Actualizado');
            console.log(data);
        }, (error) => {
            alert('Error');
            console.log(error);
        });
    }
  }

}
