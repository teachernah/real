import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { QuestionsComponent } from './header/questions/questions.component';
import { JobsComponent } from './header/jobs/jobs.component';
import { TagsComponent } from './header/tags/tags.component';
import { UsersComponent } from './header/users/users.component';
import { ProfileComponent } from './header/profile/profile.component';



const appRoutes: Routes = [
 {path: 'month', component: BodyComponent },
  {path: 'intrest', component: BodyComponent },
  {path: 'featured', component: BodyComponent },
  {path: 'hot', component: BodyComponent },
  {path: 'week', component: BodyComponent },
  {path: 'questions', component: HeaderComponent},
  {path: 'jobs', component: HeaderComponent },
  {path: 'tags', component: HeaderComponent},
  {path: 'users', component: HeaderComponent},
  {path: 'profile', component: HeaderComponent},
  {path: 'inbox', component: HeaderComponent},
  {path: 'achivements', component: HeaderComponent},
  {path: 'help', component: HeaderComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    QuestionsComponent,
    JobsComponent,
    TagsComponent,
    UsersComponent,
    ProfileComponent
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
