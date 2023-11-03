import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  constructor() {}
  date = Date.now();
  percentage = 0.32432;
  jsonObject = {
    name: 'himansu gami',
    email: 'himansugami52054@gmail.com',
  };
}
