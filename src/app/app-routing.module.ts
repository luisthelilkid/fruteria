import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreciosFrutasComponent } from './precios-frutas/precios-frutas.component';

const routes: Routes = [
  // Otras rutas de tu aplicación
  { path: 'precios-frutas', component: PreciosFrutasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
