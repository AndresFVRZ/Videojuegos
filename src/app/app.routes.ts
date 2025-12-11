import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Contact } from './page/contact/contact';
import { RequisitosComponent } from './page/requisitos/requisitos';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'nosotros', component: About },
  { path: 'contacto', component: Contact },
  { path: 'requisitos', component: RequisitosComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
