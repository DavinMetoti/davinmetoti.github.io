import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulirhakaksesComponent } from './formulirhakakses.component';

describe('FormulirhakaksesComponent', () => {
  let component: FormulirhakaksesComponent;
  let fixture: ComponentFixture<FormulirhakaksesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulirhakaksesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulirhakaksesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
