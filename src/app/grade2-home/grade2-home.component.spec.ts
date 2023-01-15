import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade2HomeComponent } from './grade2-home.component';

describe('Grade2HomeComponent', () => {
  let component: Grade2HomeComponent;
  let fixture: ComponentFixture<Grade2HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade2HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grade2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
