import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutAddForm2Component } from './prodcut-add-form2.component';

describe('ProdcutAddForm2Component', () => {
  let component: ProdcutAddForm2Component;
  let fixture: ComponentFixture<ProdcutAddForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdcutAddForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcutAddForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
