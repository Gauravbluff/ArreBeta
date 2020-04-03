import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodfromresturantComponent } from './foodfromresturant.component';

describe('FoodfromresturantComponent', () => {
  let component: FoodfromresturantComponent;
  let fixture: ComponentFixture<FoodfromresturantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodfromresturantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodfromresturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
