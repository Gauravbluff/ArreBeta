import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrebetaforbusinessComponent } from './arrebetaforbusiness.component';

describe('ArrebetaforbusinessComponent', () => {
  let component: ArrebetaforbusinessComponent;
  let fixture: ComponentFixture<ArrebetaforbusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrebetaforbusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrebetaforbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
