import { Component, OnInit } from '@angular/core';

var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
        $(document).ready(function () {
            $('.nav_btn').click(function () {
                $('.mobile_nav_items').toggleClass('active');
            });
        });

  }

}
