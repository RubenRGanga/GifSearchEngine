import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit{
  ngOnInit(): void {
    if ( !this.gif ) throw new Error('Gif property is required.');
  }

  @Input()
  public gif!: Gif;

}
