import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerftoolsComponent } from './perftools.component';

describe('PerftoolsComponent', () => {
  let component: PerftoolsComponent;
  let fixture: ComponentFixture<PerftoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerftoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerftoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
