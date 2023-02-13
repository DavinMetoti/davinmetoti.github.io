import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpengajuanComponent } from './formpengajuan.component';

describe('FormpengajuanComponent', () => {
  let component: FormpengajuanComponent;
  let fixture: ComponentFixture<FormpengajuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormpengajuanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpengajuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
