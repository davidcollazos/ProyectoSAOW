import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserDomainService } from '../services/user-domain.service';
import { User } from '../model/user';




@Component({
  selector: 'app-articulorevista',
  templateUrl: './articulorevista.component.html',
  styleUrls: ['./articulorevista.component.css']
})
export class ArticulorevistaComponent {
  title = 'serverless';
  constructor(private userService: UserDomainService, private router:Router) { }
  public users;
  user: User;
  ngOnInit() {
    this.loadUsers();
    this.user = new User();
  }

  private loadUsers() {
    this.userService.getUsers().subscribe(
      data => { this.users = data },
      err => console.error(err),
      () => console.log("users loaded.")
    );
  }
  
  deleteUser(id: string) {
   
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

  


}