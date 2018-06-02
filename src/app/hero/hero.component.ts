import { Component, OnInit } from '@angular/core';
@Component({
selector: 'hero',
templateUrl: './hero.component.html',
styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
private heroHeading: string;
private heroText: string;
private heroBtnText: string;
private heroBtnUrl: string;
constructor() {
  this.heroHeading = "Welcome to 💜 coders-dating 💜";
  this.heroText = "“My heart is ever at your service”. - Shakespeare";
  this.heroBtnText = "Learn more";
  this.heroBtnUrl = "https://de.wikipedia.org/wiki/William_Shakespeare";
}
ngOnInit() {
}
}

