import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseHomeComponent } from './base-home.component';

describe('BaseHomeComponent', () => {
  let component: BaseHomeComponent;
  let fixture: ComponentFixture<BaseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
