import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from '../../classes/hero';
import { Heroes } from '../../heroes';
import { MessagesService } from '../../services/messages/messages.service';

@Injectable({
  providedIn: 'root',
})

export class HeroService {

	//service in service
	constructor(private messagesService : MessagesService) { }
	
	getHeroes(): Observable<Hero[]> {
		this.messagesService.add('Hero-services: fetched hero');
		return of(Heroes);
	}
}