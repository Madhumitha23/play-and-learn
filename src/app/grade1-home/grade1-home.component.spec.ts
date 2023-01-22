import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade1HomeComponent } from './grade1-home.component';

describe('Grade1HomeComponent', () => {
  let component: Grade1HomeComponent;
  let fixture: ComponentFixture<Grade1HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade1HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grade1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
