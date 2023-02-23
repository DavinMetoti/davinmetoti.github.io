import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HakaksesComponent } from './hakakses.component';

describe('HakaksesComponent', () => {
  let component: HakaksesComponent;
  let fixture: ComponentFixture<HakaksesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HakaksesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HakaksesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
