import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'epk',
  templateUrl: './epk.component.html'
})
export class EpkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	$('.showsWidget').hide();
  	$('#masterHeading').hide();
  	$('.footerCopyright').hide();
  	$('.mainPageRow').css('border-bottom', 'none');
  	$('#mainScrollContainer').removeClass('container');
    $('body').css('background-color', 'black');
    $('body').css('margin-top', '-50px');
    $('body').css('padding-top', '50px');
  }

}
