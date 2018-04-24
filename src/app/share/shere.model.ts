import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';

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
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
          )
    ],
})

export class ShereModule {

}
