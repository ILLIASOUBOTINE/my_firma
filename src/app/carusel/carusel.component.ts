import {Component, DoCheck, OnInit} from '@angular/core';
import {imgs} from "../models/img";
import {TABLE_CARDS} from "../models/tableCards";
import {Card} from "../enttity/card";
import {CaruselService} from "../service/carusel.service";
import {DescriptionCard} from "../enttity/descriptionCard";
import {TableDescriptionCards} from "../models/tableDescriptionCards";

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit, DoCheck{

  cards:Card[];
  constructor(public service: CaruselService) { }

  ngDoCheck(): void {

  }

  ngOnInit(): void {
    this.cards = TABLE_CARDS;

  }



   setCard(name:string){
     console.log(name);
     CaruselService.setCard(name);
  }
}
