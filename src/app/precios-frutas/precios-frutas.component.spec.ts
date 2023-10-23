import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosFrutasComponent } from './precios-frutas.component';

describe('PreciosFrutasComponent', () => {
  let component: PreciosFrutasComponent;
  let fixture: ComponentFixture<PreciosFrutasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreciosFrutasComponent]
    });
    fixture = TestBed.createComponent(PreciosFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
