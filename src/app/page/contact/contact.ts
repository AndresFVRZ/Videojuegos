import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  messageCount = 0;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
      ]],
      correo: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      ]],
      asunto: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ]],
      mensaje: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000)
      ]]
    });

    // Contador de caracteres para el mensaje
    this.contactForm.get('mensaje')?.valueChanges.subscribe(value => {
      this.messageCount = value ? value.length : 0;
    });
  }

  // Getters para acceder fácilmente a los controles del formulario
  get nombre() { return this.contactForm.get('nombre'); }
  get correo() { return this.contactForm.get('correo'); }
  get asunto() { return this.contactForm.get('asunto'); }
  get mensaje() { return this.contactForm.get('mensaje'); }

  // Obtener clases CSS para los campos
  getFieldClass(field: any): string {
    if (field?.untouched) return '';
    return field?.valid ? 'is-valid' : 'is-invalid';
  }

  // Validar si un campo tiene un error específico
  hasError(field: any, errorType: string): boolean {
    return field?.hasError(errorType) && (field?.dirty || field?.touched);
  }

  // Obtener mensaje de error para un campo
  getErrorMessage(field: any): string {
    if (field?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    
    if (field === this.nombre) {
      if (field?.hasError('minlength')) {
        return 'El nombre debe tener al menos 3 caracteres';
      }
      if (field?.hasError('pattern')) {
        return 'El nombre solo puede contener letras y espacios';
      }
    }
    
    if (field === this.correo) {
      if (field?.hasError('email') || field?.hasError('pattern')) {
        return 'Por favor, ingrese un correo electrónico válido';
      }
    }
    
    if (field === this.asunto) {
      if (field?.hasError('minlength')) {
        return 'El asunto debe tener al menos 5 caracteres';
      }
    }
    
    if (field === this.mensaje) {
      if (field?.hasError('minlength')) {
        return 'El mensaje debe tener al menos 10 caracteres';
      }
      if (field?.hasError('maxlength')) {
        return 'El mensaje no puede exceder los 1000 caracteres';
      }
    }
    
    return 'Campo inválido';
  }

  // Enviar formulario
  onSubmit(): void {
    // Marcar todos los campos como tocados para mostrar errores
    this.contactForm.markAllAsTouched();
    
    // Si el formulario es inválido, no proceder
    if (this.contactForm.invalid) {
      return;
    }
    
    // Simular envío
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;
    
    // Simular llamada a API
    setTimeout(() => {
      // 90% de éxito, 10% de error (simulación)
      const isSuccess = Math.random() > 0.1;
      
      this.isSubmitting = false;
      
      if (isSuccess) {
        this.submitSuccess = true;
        this.submitError = false;
        
        // Resetear formulario después de éxito
        setTimeout(() => {
          this.contactForm.reset();
          this.messageCount = 0;
          this.contactForm.markAsPristine();
          this.contactForm.markAsUntouched();
        }, 2000);
        
        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      } else {
        this.submitSuccess = false;
        this.submitError = true;
        
        // Ocultar mensaje de error después de 5 segundos
        setTimeout(() => {
          this.submitError = false;
        }, 5000);
      }
    }, 1500);
  }

  // Resetear formulario
  onReset(): void {
    this.contactForm.reset();
    this.messageCount = 0;
    this.submitSuccess = false;
    this.submitError = false;
    this.contactForm.markAsPristine();
    this.contactForm.markAsUntouched();
  }
}