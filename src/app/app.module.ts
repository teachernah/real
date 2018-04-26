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
import { JobsComponent } from './header/jobs/jobs.component';
import { FeatureComponent } from './body/feature/feature.component';
import { HotComponent } from './body/hot/hot.component';
import { WeekComponent } from './body/week/week.component';
import { TagsComponent } from './header/tags/tags.component';
import { UsersComponent } from './header/users/users.component';
import { MonthComponent } from './body/month/month.component';
import { AskquizComponent } from './askquiz/askquiz.component';
import { QuestionsComponent } from './header/questions/questions.component';



const appRoutes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'jobs', component: JobsComponent },
  {path: 'tags', component: TagsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'profile', component: HeaderComponent},
  {path: 'inbox', component: HeaderComponent},
  {path: 'achivements', component: HeaderComponent},
  {path: 'help', component: HeaderComponent},
 {path: 'month', component: MonthComponent },
  {path: 'intrest', component: IntrestComponent },
  {path: 'featured', component: FeatureComponent },
  {path: 'hot', component: HotComponent },
  {path: 'week', component: WeekComponent },
  {path: 'askquiz', component: AskquizComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    IntrestComponent,
    JobsComponent,
    FeatureComponent,
    HotComponent,
    WeekComponent,
    TagsComponent,
    UsersComponent,
    MonthComponent,
    AskquizComponent,
    QuestionsComponent
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
