import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'store',
	templateUrl: './store.component.html'
})

export class StoreComponent implements OnInit {
	ngOnInit(): void {
		$('.showsWidget').show();
	}	
}