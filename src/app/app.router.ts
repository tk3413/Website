import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FootieComponent } from './footie/footie.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

export const router: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full'}, 
    { path: 'about', component: AboutComponent},
    { path: 'experience', component: ExperienceComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'resume', component: ResumeComponent},

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);