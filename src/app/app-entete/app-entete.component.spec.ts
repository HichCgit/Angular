import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEnteteComponent } from './app-entete.component';

describe('AppEnteteComponent', () => {
  let component: AppEnteteComponent;
  let fixture: ComponentFixture<AppEnteteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEnteteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEnteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
