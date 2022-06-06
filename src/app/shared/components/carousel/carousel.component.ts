import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  imageSets :[string[],string[],string[]]=[
    [],
    [],
    []
  ];
  ngOnInit() {
    this.initCarousel();
  }
  initCarousel():void{
    for (let index = 1; index < 7; index++) {
      this.imageSets[0].push(`../../../../assets/img/Carousel_item${index}.webp`)
      this.imageSets[1].push(`../../../../assets/img/Carousel_item${index+6}.webp`)
      this.imageSets[2].push(`../../../../assets/img/Carousel_item${index+12}.webp`)
    }
  }

  displayCarouselArrows = () =>$('.carousel-control-next, .carousel-control-prev').show();
  hideCarouselArrows = () => $('.carousel-control-next, .carousel-control-prev').toggle();
}
