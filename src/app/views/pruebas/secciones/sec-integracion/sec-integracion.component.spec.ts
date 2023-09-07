import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecIntegracionComponent } from './sec-integracion.component';

describe('SecIntegracionComponent', () => {
  let component: SecIntegracionComponent;
  let fixture: ComponentFixture<SecIntegracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecIntegracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecIntegracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
