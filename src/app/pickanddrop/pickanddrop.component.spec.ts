import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickanddropComponent } from './pickanddrop.component';

describe('PickanddropComponent', () => {
  let component: PickanddropComponent;
  let fixture: ComponentFixture<PickanddropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickanddropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickanddropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
