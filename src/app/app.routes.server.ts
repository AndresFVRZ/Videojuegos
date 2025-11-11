import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Contact } from './page/contact/contact';
import { RequisitosComponent } from './page/requisitos/requisitos';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'nosotros', component: About },
  { path: 'contacto', component: Contact },
  { path: 'requisitos', component: RequisitosComponent },
  { path: '**', redirectTo: '' },
];