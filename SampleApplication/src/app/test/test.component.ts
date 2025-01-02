import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  
  @Input('parentData')
  public name="";
  
  @Output()
  public childEvent = new EventEmitter();
  
  public colors = ["red","blue","green","yellow"];
  public color = "orange";
  public siteUrl = window.location.href;
  public myId = 'testId';
  public isDisabled = true;
  public successClass = "text-success";
  public hasError = true;
  public greeting = ""; 
  public isSpecial = true;

  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }

  public titleStyles = {
    color:"blue",
    fontStyle:"italic"
  }

  greetUser(){
    return "Hello "+this.name;
  }

  onclick(event: Event){
    console.log(" button was clicked");
    this.greeting = event.type;
    console.log(event);
  }

  fireEvent(){
    this.childEvent.emit("Hey Sreeram");
  }
}
