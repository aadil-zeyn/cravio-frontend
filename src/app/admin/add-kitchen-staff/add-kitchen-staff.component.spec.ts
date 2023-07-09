import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKitchenStaffComponent } from './add-kitchen-staff.component';

describe('AddKitchenStaffComponent', () => {
  let component: AddKitchenStaffComponent;
  let fixture: ComponentFixture<AddKitchenStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddKitchenStaffComponent]
    });
    fixture = TestBed.createComponent(AddKitchenStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
