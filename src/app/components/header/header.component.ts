import { Component, OnInit } from '@angular/core';
import { EventManager } from 'src/app/services/event-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(protected eventManager: EventManager) { }

  ngOnInit(): void {
  }

  onResetClicked() {
    this.eventManager.broadcast('restartGame');
  }
}
