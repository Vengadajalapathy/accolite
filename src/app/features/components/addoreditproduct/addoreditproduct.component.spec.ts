import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditproductComponent } from './addoreditproduct.component';

describe('AddoreditproductComponent', () => {
  let component: AddoreditproductComponent;
  let fixture: ComponentFixture<AddoreditproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoreditproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoreditproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
