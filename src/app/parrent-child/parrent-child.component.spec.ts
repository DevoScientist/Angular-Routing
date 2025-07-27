import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrentChildComponent } from './parrent-child.component';

describe('ParrentChildComponent', () => {
  let component: ParrentChildComponent;
  let fixture: ComponentFixture<ParrentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParrentChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParrentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
