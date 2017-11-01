import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageFixComponent } from './main-page-fix.component';

describe('MainPageFixComponent', () => {
  let component: MainPageFixComponent;
  let fixture: ComponentFixture<MainPageFixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageFixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
