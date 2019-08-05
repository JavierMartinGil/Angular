import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  namePlantilla: string;
  surnamePlantilla: string;

  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe((params) => {
      this.namePlantilla = params.name;
      this.surnamePlantilla = params.surname;
    })
  }

  ngOnInit() {
  }

}
