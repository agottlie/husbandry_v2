import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'news',
	templateUrl: './news.component.html'
})

export class NewsComponent implements OnInit {
	ngOnInit(): void {
		$('.showsWidget').show();
	}	
}