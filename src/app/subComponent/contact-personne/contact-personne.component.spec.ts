import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPersonneComponent } from './contact-personne.component';

describe('ContactPersonneComponent', () => {
  let component: ContactPersonneComponent;
  let fixture: ComponentFixture<ContactPersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
