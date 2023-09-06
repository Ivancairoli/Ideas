import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './views/menu-principal/menu-principal.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ServiciosComponent } from './views/servicios/servicios.component';

const routes: Routes = [
  {path: '', component: MenuPrincipalComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: '**', component: MenuPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
