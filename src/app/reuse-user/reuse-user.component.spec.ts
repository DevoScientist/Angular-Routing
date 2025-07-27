import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseUserComponent } from './reuse-user.component';

describe('ReuseUserComponent', () => {
  let component: ReuseUserComponent;
  let fixture: ComponentFixture<ReuseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
