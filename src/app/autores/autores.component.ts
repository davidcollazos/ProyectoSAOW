import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDomainService } from '../services/user-domain.service';
import { AutorUser } from '../model/autor';
@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  constructor(private userService: UserDomainService, private router:Router) { }
  public users;
  user: AutorUser;
  ngOnInit() {
    this.loadUsers();
    this.user = new AutorUser();
  }

  private loadUsers() {
    this.userService.getAutor().subscribe(
      data => { this.users = data },
      err => console.error(err),
      () => console.log("users loaded.")
    );
  }
  
  deleteAutor(id: string) {
   
    this.userService.deleteAutor(id).subscribe(() => {
      this.loadUsers();
    });
  }

}
