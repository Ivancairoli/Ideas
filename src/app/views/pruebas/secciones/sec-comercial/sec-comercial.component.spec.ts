import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecComercialComponent } from './sec-comercial.component';

describe('SecComercialComponent', () => {
  let component: SecComercialComponent;
  let fixture: ComponentFixture<SecComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecComercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
