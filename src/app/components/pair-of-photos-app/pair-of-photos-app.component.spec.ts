import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairOfPhotosAppComponent } from './pair-of-photos-app.component';

describe('PairOfPhotosAppComponent', () => {
  let component: PairOfPhotosAppComponent;
  let fixture: ComponentFixture<PairOfPhotosAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PairOfPhotosAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PairOfPhotosAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
