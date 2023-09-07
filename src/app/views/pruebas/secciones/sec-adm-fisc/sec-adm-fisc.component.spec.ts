import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAdmFiscComponent } from './sec-adm-fisc.component';

describe('SecAdmFiscComponent', () => {
  let component: SecAdmFiscComponent;
  let fixture: ComponentFixture<SecAdmFiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecAdmFiscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecAdmFiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
