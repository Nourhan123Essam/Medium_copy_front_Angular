import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStroyComponent } from './our-stroy.component';

describe('OurStroyComponent', () => {
  let component: OurStroyComponent;
  let fixture: ComponentFixture<OurStroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurStroyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurStroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
