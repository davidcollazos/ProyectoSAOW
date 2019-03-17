import { Component, OnInit } from '@angular/core';
import { UserDomainService } from '../services/user-domain.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-publicacion',
  templateUrl: './modificar-publicacion.component.html',
  styleUrls: ['./modificar-publicacion.component.css']
})
export class ModificarPublicacionComponent{

  id:number;
  data:object = {};
  products = [];
  exist = false;
  productObj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private router: Router, private route: ActivatedRoute) { }

  
 


}
