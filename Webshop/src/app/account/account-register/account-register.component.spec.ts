import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRegisterComponent } from './account-register.component';

describe('AccountCreateComponent', () => {
  let component: AccountRegisterComponent;
  let fixture: ComponentFixture<AccountRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
