import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { PastShow } from './pastShow';
import { FutureShow } from './futureShow';
import { SixShow } from './sixShow';

@Injectable()
export class ShowService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private futureShowsUrl = 'https://husbandry-dates.herokuapp.com/dates/future';
  private pastShowsUrl = 'https://husbandry-dates.herokuapp.com/dates/past';
  private sixShowsUrl = 'https://husbandry-dates.herokuapp.com/dates/get6';

  constructor(private http: Http) { }

  getFutureShows(): Promise<FutureShow[]> {
    return this.http.get(this.futureShowsUrl)
               .toPromise()
               .then(response => response.json() as FutureShow[])
               .catch(this.handleError);
  }

  getPastShows(): Promise<PastShow[]> {
    return this.http.get(this.pastShowsUrl)
               .toPromise()
               .then(response => response.json() as PastShow[])
               .catch(this.handleError);
  }

  get6Shows(): Promise<SixShow[]> {
  	return this.http.get(this.sixShowsUrl)
  				.toPromise()
  				.then(response => response.json() as SixShow[])
               	.catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}