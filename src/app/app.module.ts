import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { IntrestComponent } from './body/intrest/intrest.component';
import { JobsComponent } from './jobs/jobs.component';



const appRoutes: Routes = [
  // {path: '', component: HeaderComponent},
  {path: 'questions', component: BodyComponent},
  {path: 'jobs', component: JobsComponent },
  {path: 'tags', component: HeaderComponent},
  {path: 'users', component: HeaderComponent},
  {path: 'profile', component: HeaderComponent},
  {path: 'inbox', component: HeaderComponent},
  {path: 'achivements', component: HeaderComponent},
  {path: 'help', component: HeaderComponent},
 {path: 'month', component: BodyComponent },
  {path: 'intrest', component: IntrestComponent },
  {path: 'featured', component: BodyComponent },
  {path: 'hot', component: BodyComponent },
  {path: 'week', component: BodyComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    IntrestComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
