import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutAddForm1Component } from './prodcut-add-form1.component';

describe('ProdcutAddForm1Component', () => {
  let component: ProdcutAddForm1Component;
  let fixture: ComponentFixture<ProdcutAddForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdcutAddForm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcutAddForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
