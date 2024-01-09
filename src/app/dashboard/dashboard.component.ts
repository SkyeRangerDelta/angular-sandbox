import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    console.log('DashboardComponent.ngOnInit()');
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
