import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFinderAppComponent } from './recipe-finder-app.component';

describe('RecipeFinderAppComponent', () => {
  let component: RecipeFinderAppComponent;
  let fixture: ComponentFixture<RecipeFinderAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFinderAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeFinderAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
