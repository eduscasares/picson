import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input() 
  public mode: string = 'edit';

  public buttonState: boolean = false;

  handleClick() {

    this.buttonState = !this.buttonState;
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}