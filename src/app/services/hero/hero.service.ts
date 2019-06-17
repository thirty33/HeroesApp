import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from '../../classes/hero';
import { Heroes } from '../../heroes';
import { MessagesService } from '../../services/messages/messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class HeroService {
	private heroesUrl = 'api/heroes';
	
	//service in service
	constructor(
		private messagesService : MessagesService,
		private http: HttpClient) {

		}
	
	getHeroes(): Observable<Hero[]> {
		this.messagesService.add('Hero-services: fetched hero');
		// return of(Heroes);
		return this.http.get<Hero[]>(this.heroesUrl);
	}

	private log(message: string) {
		this.messagesService.add(`HeroService: ${message}`);
		
	}
}