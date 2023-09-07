import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecGeneralComponent } from './sec-general.component';

describe('SecGeneralComponent', () => {
  let component: SecGeneralComponent;
  let fixture: ComponentFixture<SecGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
