import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  @Input()
  public visibility: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.visibility = false;
    }, 1500);
  }

}
