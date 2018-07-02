import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectedTextComponent } from './reflected-text.component';

describe('ReflectedTextComponent', () => {
  let component: ReflectedTextComponent;
  let fixture: ComponentFixture<ReflectedTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflectedTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
