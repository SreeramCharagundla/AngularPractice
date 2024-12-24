import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  public name = 'Sreeram';
  public siteUrl = window.location.href;

  greetUser(){
    return "Hello "+this.name;
  }
}
