import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLeadershipComponent } from './set-leadership.component';

describe('SetLeadershipComponent', () => {
  let component: SetLeadershipComponent;
  let fixture: ComponentFixture<SetLeadershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetLeadershipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
