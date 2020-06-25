import { Component, OnInit } from '@angular/core';
import { CarteService } from '../carte.service';
import { Carte } from '../carte';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  Carte = new Carte();

  constructor(public srvCarte: CarteService) { }

  ngOnInit(): void {
  }

}
