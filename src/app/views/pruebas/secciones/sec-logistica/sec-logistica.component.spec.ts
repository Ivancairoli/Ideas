import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecLogisticaComponent } from './sec-logistica.component';

describe('SecLogisticaComponent', () => {
  let component: SecLogisticaComponent;
  let fixture: ComponentFixture<SecLogisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecLogisticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecLogisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
