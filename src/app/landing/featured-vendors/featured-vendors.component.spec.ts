import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedVendorsComponent } from './featured-vendors.component';

describe('FeaturedVendorsComponent', () => {
  let component: FeaturedVendorsComponent;
  let fixture: ComponentFixture<FeaturedVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
