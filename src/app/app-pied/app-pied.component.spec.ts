import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPiedComponent } from './app-pied.component';

describe('AppPiedComponent', () => {
  let component: AppPiedComponent;
  let fixture: ComponentFixture<AppPiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
