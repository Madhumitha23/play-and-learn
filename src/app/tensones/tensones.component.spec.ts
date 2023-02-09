import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TensonesComponent } from './tensones.component';

describe('TensonesComponent', () => {
  let component: TensonesComponent;
  let fixture: ComponentFixture<TensonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TensonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TensonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
