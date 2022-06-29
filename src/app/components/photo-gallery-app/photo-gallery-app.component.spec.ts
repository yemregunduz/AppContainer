import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalleryAppComponent } from './photo-gallery-app.component';

describe('PhotoGalleryAppComponent', () => {
  let component: PhotoGalleryAppComponent;
  let fixture: ComponentFixture<PhotoGalleryAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoGalleryAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoGalleryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
