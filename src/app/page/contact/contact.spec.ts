import { TestBed } from '@angular/core/testing';
import { Contact } from './contact';
import { ReactiveFormsModule } from '@angular/forms';

describe('Contact Component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Contact, ReactiveFormsModule]
    });
  });

  it('Se crea correctamente', () => {
    const fixture = TestBed.createComponent(Contact);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
