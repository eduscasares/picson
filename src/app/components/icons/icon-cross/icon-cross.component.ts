import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-cross',
  templateUrl: './icon-cross.component.html',
  styleUrls: ['./icon-cross.component.scss']
})
export class IconCrossComponent {

  @Input()
  public fillColor: string = '#fff'

  constructor() { }
}

