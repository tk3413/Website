import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootieComponent } from './footie.component';

describe('FootieComponent', () => {
  let component: FootieComponent;
  let fixture: ComponentFixture<FootieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
