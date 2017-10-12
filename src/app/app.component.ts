import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ShowService } from './show.service';
import { SixShow } from './sixShow';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    sixShows: SixShow[] ;

    constructor(
        private showService: ShowService,
        private router: Router
    ) {}

    get6Shows(): void {
        this.showService.get6Shows().then(sixShows => {
            this.sixShows = sixShows;
            for (let i=0; i<this.sixShows.length; i++) {
                this.sixShows[i].tourdate = this.sixShows[i].tourdate.substr(5,2) + "." + this.sixShows[i].tourdate.substr(8,2) + "." + this.sixShows[i].tourdate.substr(2,2);
            }
        })
    }

    ngOnInit(): void {
        this.get6Shows();
    }
}
