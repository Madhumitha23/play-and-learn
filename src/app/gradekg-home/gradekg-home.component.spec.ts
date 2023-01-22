import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradekgHomeComponent } from './gradekg-home.component';

describe('GradekgHomeComponent', () => {
  let component: GradekgHomeComponent;
  let fixture: ComponentFixture<GradekgHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradekgHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradekgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
