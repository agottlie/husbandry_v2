import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'about',
	templateUrl: './about.component.html'
})

export class AboutComponent implements OnInit {
	ngOnInit(): void {
		$('.showsWidget').show();
	}	
}