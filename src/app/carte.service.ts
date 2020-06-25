import { Injectable } from '@angular/core';
import { Carte } from './carte';

@Injectable({
  providedIn: 'root'
})
export class CarteService {
  cartes: Array<Carte> = new Array<Carte>(
      new Carte('Classique', 'Carte neutre', 'Ne fait rien du tout, au suivant!', 15),
      new Carte('Desamorcage', 'Carte rare', 'Permet de désamorcer la bombe', 4),
      new Carte('Bombe Big Ben', 'Carte unique', 'Unique carte qui fait tout sauter', 1));

  constructor() { }
}
