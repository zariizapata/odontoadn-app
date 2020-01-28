import { RouterModule } from '@angular/router';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConsultasComponent } from './listar-citas.component';

describe('ListarConsultasComponent', () => {
  let component: ListarConsultasComponent;
  let fixture: ComponentFixture<ListarConsultasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarConsultasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
