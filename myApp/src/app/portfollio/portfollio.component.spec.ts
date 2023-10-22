import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfollioComponent } from './portfollio.component';

describe('PortfollioComponent', () => {
  let component: PortfollioComponent;
  let fixture: ComponentFixture<PortfollioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfollioComponent]
    });
    fixture = TestBed.createComponent(PortfollioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
