import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlateauComponent } from './plateau/plateau.component';


// Configuration des routes
const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'plateau', component: PlateauComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PlateauComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
