import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorshipComponent } from './directorship.component';

describe('DirectorshipComponent', () => {
  let component: DirectorshipComponent;
  let fixture: ComponentFixture<DirectorshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorshipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
