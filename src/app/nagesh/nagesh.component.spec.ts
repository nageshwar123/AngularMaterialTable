import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NageshComponent } from './nagesh.component';

describe('NageshComponent', () => {
  let component: NageshComponent;
  let fixture: ComponentFixture<NageshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NageshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NageshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
