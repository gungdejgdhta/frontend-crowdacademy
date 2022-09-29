import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAkunComponent } from './form-akun.component';

describe('FormAkunComponent', () => {
  let component: FormAkunComponent;
  let fixture: ComponentFixture<FormAkunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAkunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAkunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
