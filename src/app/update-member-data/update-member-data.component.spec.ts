import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMemberDataComponent } from './update-member-data.component';

describe('UpdateMemberDataComponent', () => {
  let component: UpdateMemberDataComponent;
  let fixture: ComponentFixture<UpdateMemberDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMemberDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMemberDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
