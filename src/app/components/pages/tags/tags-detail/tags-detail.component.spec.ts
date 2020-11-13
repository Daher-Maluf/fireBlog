import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsDetailComponent } from './tags-detail.component';

describe('TagsDetailComponent', () => {
  let component: TagsDetailComponent;
  let fixture: ComponentFixture<TagsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
