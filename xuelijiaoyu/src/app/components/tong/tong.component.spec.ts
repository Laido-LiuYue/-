import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongComponent } from './tong.component';

describe('TongComponent', () => {
  let component: TongComponent;
  let fixture: ComponentFixture<TongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
