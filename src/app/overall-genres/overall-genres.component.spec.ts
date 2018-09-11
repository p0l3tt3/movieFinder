import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallGenresComponent } from './overall-genres.component';

describe('OverallGenresComponent', () => {
  let component: OverallGenresComponent;
  let fixture: ComponentFixture<OverallGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
