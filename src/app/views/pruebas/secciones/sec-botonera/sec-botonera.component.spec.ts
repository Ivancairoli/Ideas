import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecBotoneraComponent } from './sec-botonera.component';

describe('SecBotoneraComponent', () => {
  let component: SecBotoneraComponent;
  let fixture: ComponentFixture<SecBotoneraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecBotoneraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecBotoneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
