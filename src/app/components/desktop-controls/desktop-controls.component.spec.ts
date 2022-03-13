import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopControlsComponent } from './desktop-controls.component';

describe('DesktopControlsComponent', () => {
  let component: DesktopControlsComponent;
  let fixture: ComponentFixture<DesktopControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
