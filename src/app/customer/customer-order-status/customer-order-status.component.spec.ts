import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderStatusComponent } from './customer-order-status.component';

describe('CustomerOrderStatusComponent', () => {
  let component: CustomerOrderStatusComponent;
  let fixture: ComponentFixture<CustomerOrderStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerOrderStatusComponent]
    });
    fixture = TestBed.createComponent(CustomerOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
