import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'contact',
	templateUrl: './contact.component.html'
})

export class ContactComponent implements OnInit {
	ngOnInit(): void {
		$('.showsWidget').show();
	}	
}