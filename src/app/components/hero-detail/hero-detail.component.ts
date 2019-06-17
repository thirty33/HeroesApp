import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../classes/hero';
import { Heroes} from '../../heroes';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  // @Input() hero: Hero; 
  hero;
  
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // this.hero = Heroes[+params.get('heroId')];
      this.heroService.getHero(+params.get('heroId'))
        .subscribe(hero => {this.hero = hero});
    });
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      // .subscribe(() => this.goBack());
      .subscribe(() => {});
  }

}