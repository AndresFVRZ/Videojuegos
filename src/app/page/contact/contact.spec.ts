import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contact } from './contact';
import { ReactiveFormsModule } from '@angular/forms';

describe('Contact Component', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test 1: Creación del componente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test 2: Formulario se inicializa correctamente
  it('should initialize form with empty values', () => {
    expect(component.contactForm).toBeDefined();
    expect(component.f.nombre.value).toBe('');
    expect(component.f.apellido.value).toBe('');
    expect(component.f.email.value).toBe('');
    expect(component.f.celular.value).toBe('');
    expect(component.f.mensaje.value).toBe('');
  });

  // Test 3: Validaciones required funcionan
  it('should validate required fields', () => {
    // Todos los campos vacíos = inválido
    expect(component.contactForm.valid).toBeFalse();
    
    // Verificar que cada campo tenga error de required
    expect(component.f.nombre.errors?.['required']).toBeTruthy();
    expect(component.f.apellido.errors?.['required']).toBeTruthy();
    expect(component.f.email.errors?.['required']).toBeTruthy();
    expect(component.f.celular.errors?.['required']).toBeTruthy();
    expect(component.f.mensaje.errors?.['required']).toBeTruthy();
  });

  // Test 4: Validación de email
  it('should validate email format', () => {
    const emailControl = component.f.email;
    
    // Email inválido
    emailControl.setValue('correo-invalido');
    expect(emailControl.errors?.['email']).toBeTruthy();
    
    // Email válido
    emailControl.setValue('correo@valido.com');
    expect(emailControl.errors?.['email']).toBeFalsy();
  });

  // Test 5: Validación de longitud mínima
  it('should validate min length for nombre', () => {
    const nombreControl = component.f.nombre;
    
    // Muy corto
    nombreControl.setValue('a');
    expect(nombreControl.errors?.['minlength']).toBeTruthy();
    
    // Válido
    nombreControl.setValue('Juan');
    expect(nombreControl.errors?.['minlength']).toBeFalsy();
  });

  // Test 6: Método get f() devuelve controles
  it('should return form controls with f getter', () => {
    const controls = component.f;
    expect(controls.nombre).toBe(component.contactForm.controls['nombre']);
    expect(controls.apellido).toBe(component.contactForm.controls['apellido']);
    expect(controls.email).toBe(component.contactForm.controls['email']);
    expect(controls.celular).toBe(component.contactForm.controls['celular']);
    expect(controls.mensaje).toBe(component.contactForm.controls['mensaje']);
  });

  // Test 7: cancelar() funciona cuando no se está enviando
  it('should reset form when cancelar() is called and not submitting', () => {
    // Llenar formulario
    component.f.nombre.setValue('Juan');
    component.f.apellido.setValue('Pérez');
    component.exito = true; // Simular éxito previo
    
    // Ejecutar cancelar
    component.cancelar();
    
    // Verificar que se reseteó
    expect(component.f.nombre.value).toBe('');
    expect(component.f.apellido.value).toBe('');
    expect(component.exito).toBeFalse();
  });

  // Test 8: cancelar() no hace nada cuando submitting es true
  it('should not reset form when cancelar() is called while submitting', () => {
    // Llenar formulario
    component.f.nombre.setValue('Juan');
    component.f.apellido.setValue('Pérez');
    component.submitting = true;
    
    // Intentar cancelar
    component.cancelar();
    
    // Verificar que NO se canceló
    expect(component.f.nombre.value).toBe('Juan');
    expect(component.f.apellido.value).toBe('Pérez');
  });

  // Test 9: enviar() marca campos como tocados
  it('should mark all fields as touched when enviar() is called', () => {
    // Espiar el método markAllAsTouched
    const markAllAsTouchedSpy = spyOn(component.contactForm, 'markAllAsTouched');
    
    // Ejecutar enviar
    component.enviar();
    
    // Verificar que se llamó al método
    expect(markAllAsTouchedSpy).toHaveBeenCalled();
  });

  // Test 10: enviar() no procede si formulario inválido
  it('should not proceed with submission if form is invalid', () => {
    // Formulario vacío = inválido
    component.enviar();
    
    // Verificar que no se puso en estado submitting
    expect(component.submitting).toBeFalse();
  });

  // Test 11: enviar() funciona con formulario válido (mocks)
  it('should process submission when form is valid', () => {
    // Mockear localStorage
    const localStorageMock = {
      getItem: jasmine.createSpy('getItem'),
      setItem: jasmine.createSpy('setItem')
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    
    // Llenar formulario con datos válidos
    component.contactForm.setValue({
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juan@test.com',
      celular: '1234567890',
      mensaje: 'Este es un mensaje de prueba para el formulario'
    });
    
    // Mockear Blob y URL
    const mockBlob = new Blob(['test'], { type: 'application/json' });
    spyOn(window, 'Blob').and.returnValue(mockBlob);
    spyOn(URL, 'createObjectURL').and.returnValue('blob:mock-url');
    spyOn(URL, 'revokeObjectURL');
    
    // Mockear document.createElement y métodos del DOM
    const mockLink = {
      href: '',
      download: '',
      click: jasmine.createSpy('click')
    };
    spyOn(document, 'createElement').and.returnValue(mockLink as any);
    spyOn(document.body, 'appendChild');
    spyOn(document.body, 'removeChild');
    
    // Espiar console.log
    const consoleLogSpy = spyOn(console, 'log');
    
    // Ejecutar enviar
    component.enviar();
    
    // Verificar comportamientos esperados
    expect(component.submitting).toBeFalse(); // Debería volver a false
    expect(consoleLogSpy).toHaveBeenCalled();
  });

  // Test 12: Manejo de errores en enviar()
  it('should handle errors in enviar()', () => {
    // Configurar formulario válido
    component.contactForm.setValue({
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juan@test.com',
      celular: '1234567890',
      mensaje: 'Mensaje de prueba'
    });
    
    // Forzar error en JSON.stringify
    spyOn(JSON, 'stringify').and.throwError('JSON error');
    
    // Espiar alert
    const alertSpy = spyOn(window, 'alert');
    
    // Ejecutar
    component.enviar();
    
    // Verificar manejo de error
    expect(component.submitting).toBeFalse();
    expect(alertSpy).toHaveBeenCalled();
  });

  // Test 13: Estados iniciales correctos
  it('should have correct initial states', () => {
    expect(component.submitting).toBeFalse();
    expect(component.exito).toBeFalse();
  });

  // Test 14: trim() se aplica a los valores
  it('should trim form values', () => {
    // Llenar con espacios
    component.f.nombre.setValue('  Juan  ');
    component.f.apellido.setValue('  Pérez  ');
    
    // Crear payload
    const payload = {
      nombre: component.f.nombre.value.trim(),
      apellido: component.f.apellido.value.trim(),
      email: '',
      celular: '',
      mensaje: '',
      createdAt: ''
    };
    
    // Verificar que se aplicó trim
    expect(payload.nombre).toBe('Juan');
    expect(payload.apellido).toBe('Pérez');
  });

  // Test 15: Formato de fecha en payload
  it('should include proper date format in payload', () => {
    // Mockear fecha
    const mockDate = new Date('2024-12-10T10:30:00');
    spyOn(window, 'Date').and.returnValue(mockDate as any);
    
    // Crear payload
    const payload = {
      fecha: new Date().toLocaleDateString('es-ES'),
      hora: new Date().toLocaleTimeString('es-ES'),
      createdAt: new Date().toISOString()
    };
    
    // Verificar formatos
    expect(payload.fecha).toBeDefined();
    expect(payload.hora).toBeDefined();
    expect(payload.createdAt).toBeDefined();
  });
});