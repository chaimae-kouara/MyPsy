import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSimpleUserComponent } from './register-simple-user.component';

describe('RegisterSimpleUserComponent', () => {
  let component: RegisterSimpleUserComponent;
  let fixture: ComponentFixture<RegisterSimpleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSimpleUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSimpleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
