import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
    selector: 'app-site',
    templateUrl: './site.component.html'
})
export class SiteComponent implements OnInit {

    public title = 'SitesudoBank'

    constructor() { }

    ngOnInit(): void {


    }

}
