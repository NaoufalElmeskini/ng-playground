import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemoComponent } from './form-demo.component';
import {Subject} from 'rxjs';
import {errorContext} from 'rxjs/internal/util/errorContext';

describe('UploadComponent', () => {
  let component: FormDemoComponent;
  let fixture: ComponentFixture<FormDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
