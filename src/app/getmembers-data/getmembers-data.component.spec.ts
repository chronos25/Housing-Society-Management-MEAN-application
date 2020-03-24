import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmembersDataComponent } from './getmembers-data.component';

describe('GetmembersDataComponent', () => {
  let component: GetmembersDataComponent;
  let fixture: ComponentFixture<GetmembersDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetmembersDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetmembersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
