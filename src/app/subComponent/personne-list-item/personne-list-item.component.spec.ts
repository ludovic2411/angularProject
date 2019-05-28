import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneListItemComponent } from './personne-list-item.component';

describe('PersonneListItemComponent', () => {
  let component: PersonneListItemComponent;
  let fixture: ComponentFixture<PersonneListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonneListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
