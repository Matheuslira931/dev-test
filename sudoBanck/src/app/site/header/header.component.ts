import { DashboardComponent } from './../../dashboard/dashboard.component';
import { USERS } from './../../dados/users';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public email: any;
  public password: any;
  public user: any;
  public message:any = null;

  constructor (public router : Router) {
  }

  ngOnInit(): void {
    if(localStorage.getItem('loggedUser')){
      this.user = localStorage.getItem('loggedUser');
      this.user = JSON.parse(this.user);
    }
  }

  public logar() {
    USERS.users.forEach((item: { email: any; password: any; }) => {

      if (item.email == this.email && item.email == null) {
      }else {
        this.message = "verifique e-mail";
      }if (item.password == this.password && item.password == null) {

      }else {
        this.message = "verifique senha";
      }if (item.email == this.email && item.password == this.password) {
        localStorage.setItem('loggedUser', JSON.stringify(item));
        this.user = localStorage.getItem('loggedUser');
        this.user = JSON.parse(this.user);
        this.router.navigate(['/dashboard']);
        $('#modalLogar').modal('hide');
      }
      // if(item.email == this.email && item.password == this.password) {
      //   localStorage.setItem('loggedUser', JSON.stringify(item));
      //   this.user = localStorage.getItem('loggedUser');
      //   this.user = JSON.parse(this.user);
      //   this.router.navigate(['/dashboard']);
      //   $('#modalLogar').modal('hide');
      // }else {
      //   this.message = "Preencha os campos";
      // }

    });
  }

  public logout() {
    localStorage.clear();
    window.location.reload();
  }

}


