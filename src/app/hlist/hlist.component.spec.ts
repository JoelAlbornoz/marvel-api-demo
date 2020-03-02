import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HlistComponent } from './hlist.component';

describe('HlistComponent', () => {
  let component: HlistComponent;
  let fixture: ComponentFixture<HlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
