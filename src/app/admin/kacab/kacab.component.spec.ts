import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KacabComponent } from './kacab.component';

describe('KacabComponent', () => {
  let component: KacabComponent;
  let fixture: ComponentFixture<KacabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KacabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KacabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
