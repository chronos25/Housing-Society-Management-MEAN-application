import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmembersDataComponent } from './addmembers-data.component';

describe('AddmembersDataComponent', () => {
  let component: AddmembersDataComponent;
  let fixture: ComponentFixture<AddmembersDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmembersDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmembersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
