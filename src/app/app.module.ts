import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { FootherComponent } from './components/foother/foother.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { StudiesComponent } from './components/studies/studies.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavegationComponent,
    FootherComponent,
    AboutMeComponent,
    ExperienceComponent,
    StudiesComponent,
    SkillsComponent,
    WorksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
