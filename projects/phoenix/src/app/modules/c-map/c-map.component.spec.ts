import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMapComponent } from './c-map.component';

describe('CMapComponent', () => {
  let component: CMapComponent;
  let fixture: ComponentFixture<CMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
