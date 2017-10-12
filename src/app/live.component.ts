import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ShowService } from './show.service';
import { PastShow } from './pastShow';
import { FutureShow } from './futureShow';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'live',
	templateUrl: './live.component.html'
})

export class LiveComponent implements OnInit {
	pastShows: PastShow[];
	futureShows: FutureShow[];

	constructor(
		private showService: ShowService,
		private router: Router
	) {}
	

	getPastShows(): void {
		this.showService.getPastShows().then(pastShows => {
			this.pastShows = pastShows;
			for (let i=0; i<this.pastShows.length; i++) {
				this.pastShows[i].tourdate = this.pastShows[i].tourdate.substr(5,2) + "." + this.pastShows[i].tourdate.substr(8,2) + "." + this.pastShows[i].tourdate.substr(2,2);
			}
		})
	}

	getFutureShows(): void {
		this.showService.getFutureShows().then(futureShows => {
			this.futureShows = futureShows;
			for (let i=0; i<this.futureShows.length; i++) {
				this.futureShows[i].tourdate = this.futureShows[i].tourdate.substr(5,2) + "." + this.futureShows[i].tourdate.substr(8,2) + "." + this.futureShows[i].tourdate.substr(2,2);
			}
		})

	}

	ngOnInit(): void {
		$('.showsWidget').hide();
		this.getPastShows();
		this.getFutureShows();
	}	
}