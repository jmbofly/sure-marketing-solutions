import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuoteSectionComponent } from './quote-section.component';

describe('QuoteSectionComponent', () => {
  let component: QuoteSectionComponent;
  let fixture: ComponentFixture<QuoteSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
