import { RouterModule } from '@angular/router';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { citasComponent } from './citas.component';

describe('ConsultasComponent', () => {
  let component: citasComponent;
  let fixture: ComponentFixture<citasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ citasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(citasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture= TestBed.createComponent(citasComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy;
  }
  );
});
