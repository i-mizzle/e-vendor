import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAreaComponent } from './vendor-area.component';

describe('VendorAreaComponent', () => {
  let component: VendorAreaComponent;
  let fixture: ComponentFixture<VendorAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
