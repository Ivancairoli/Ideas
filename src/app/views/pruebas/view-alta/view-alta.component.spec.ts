import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAltaComponent } from './view-alta.component';

describe('ViewAltaComponent', () => {
  let component: ViewAltaComponent;
  let fixture: ComponentFixture<ViewAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
