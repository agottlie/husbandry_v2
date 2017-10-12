import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'music',
	templateUrl: './music.component.html'
})

export class MusicComponent implements OnInit {
	ngOnInit(): void {
		$('.showsWidget').show();
	}	
}