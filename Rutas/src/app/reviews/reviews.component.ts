import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {


  identificadorLibro: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe(params => {
      this.identificadorLibro = params.idLibro;
    })
  }

  ngOnInit() {
  }

}
