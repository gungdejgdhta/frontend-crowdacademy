import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAkunComponent } from './list-akun.component';

describe('ListAkunComponent', () => {
  let component: ListAkunComponent;
  let fixture: ComponentFixture<ListAkunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAkunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAkunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
