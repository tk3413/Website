import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FootieComponent } from './footie/footie.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootieComponent,
    NavigationComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule, routes
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FootieComponent,
    NavigationComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ResumeComponent
  ]
})
export class AppModule { }
