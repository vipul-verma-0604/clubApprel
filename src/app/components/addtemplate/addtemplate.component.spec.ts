import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtemplateComponent } from './addtemplate.component';

describe('AddtemplateComponent', () => {
  let component: AddtemplateComponent;
  let fixture: ComponentFixture<AddtemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
