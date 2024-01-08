import { Component } from '@angular/core';
import { Hero } from "../hero";
import { NgForOf, TitleCasePipe, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HEROES } from "../heroList";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    TitleCasePipe,
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;
  protected onselect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
