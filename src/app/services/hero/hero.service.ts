import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from '../../classes/hero';
import { Heroes } from '../../heroes';


@Injectable({
  providedIn: 'root',
})

export class HeroService {

	constructor() { }
	
	getHeroes(): Observable<Hero[]> {
		return of(Heroes);
	}
}