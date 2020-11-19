import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelComponent } from './panel.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports:[BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('change isOpened property to false', () => {
    component.isOpened = true;
    component.togglePanel();
    expect(component.isOpened).toBeFalsy();
  });
  
  it('change isOpened property to true', () => {
    component.isOpened = false;
    component.togglePanel();
    expect(component.isOpened).toBeTruthy();
  });
  
});
