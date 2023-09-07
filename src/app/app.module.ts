import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './general/navigation-header/navigation-header.component'
import { FooterComponent } from './general/footer/footer.component';
import { MenuPrincipalComponent } from './views/menu-principal/menu-principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PruebasComponent } from './views/pruebas/pruebas.component';
import { MaterialComponent } from './views/material/material.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DetallesComponent } from './shared/modals/detalles/detalles.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SecGeneralComponent } from './views/pruebas/secciones/sec-general/sec-general.component';
import { SecAdmFiscComponent } from './views/pruebas/secciones/sec-adm-fisc/sec-adm-fisc.component';
import { SecComercialComponent } from './views/pruebas/secciones/sec-comercial/sec-comercial.component';
import { SecIntegracionComponent } from './views/pruebas/secciones/sec-integracion/sec-integracion.component';
import { SecLogisticaComponent } from './views/pruebas/secciones/sec-logistica/sec-logistica.component';
import { SecBotoneraComponent } from './views/pruebas/secciones/sec-botonera/sec-botonera.component';
import { ViewAltaComponent } from './views/pruebas/view-alta/view-alta.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    FooterComponent,
    MenuPrincipalComponent,
    PruebasComponent,
    MaterialComponent,
    DetallesComponent,
    SecGeneralComponent,
    SecAdmFiscComponent,
    SecComercialComponent,
    SecIntegracionComponent,
    SecLogisticaComponent,
    SecBotoneraComponent,
    ViewAltaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
