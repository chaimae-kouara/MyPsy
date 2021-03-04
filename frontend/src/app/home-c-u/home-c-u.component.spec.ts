import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCUComponent } from './home-c-u.component';

describe('HomeCUComponent', () => {
  let component: HomeCUComponent;
  let fixture: ComponentFixture<HomeCUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
