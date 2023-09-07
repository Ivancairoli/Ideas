import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './views/menu-principal/menu-principal.component';
import { PruebasComponent } from './views/pruebas/pruebas.component';
import { MaterialComponent } from './views/material/material.component';

const routes: Routes = [
  {path: '', component: MenuPrincipalComponent},
  {path: 'pruebas', component: PruebasComponent},
  {path: 'material', component: MaterialComponent},
  {path: '**', component: MenuPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
