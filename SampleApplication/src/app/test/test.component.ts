import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  public name = 'Sreeram';
  public siteUrl = window.location.href;
  public myId = 'testId';
  public isDisabled = true;
  public successClass = "text-success";
  public hasError = true;

  public isSpecial = true;

  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }

  greetUser(){
    return "Hello "+this.name;
  }
}
