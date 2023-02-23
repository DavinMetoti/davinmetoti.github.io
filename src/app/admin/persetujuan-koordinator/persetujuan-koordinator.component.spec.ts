import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersetujuanKoordinatorComponent } from './persetujuan-koordinator.component';

describe('PersetujuanKoordinatorComponent', () => {
  let component: PersetujuanKoordinatorComponent;
  let fixture: ComponentFixture<PersetujuanKoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersetujuanKoordinatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersetujuanKoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
