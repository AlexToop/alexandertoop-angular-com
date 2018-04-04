import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CvComponent,
    ProjectsComponent,
    ContactComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'cv', component: CvComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'contact', component: ContactComponent},
      // The default page to land on.
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      // Catch all redirection.
      {path: '**', redirectTo: '/home', pathMatch: 'full'}
    ]),
    NgbModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
