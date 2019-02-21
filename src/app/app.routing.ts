import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { JsonComponent } from './json/json.component';
import { NestedjsonComponent } from './nestedjson/nestedjson.component';
import { LoginComponent } from './login/login.component';
import { 
  AuthGuardService as AuthGuard 
} from './authguard.service';
import { FunctionsComponent } from './functions/functions.component';
import { JsonmodelComponent } from './jsonmodel/jsonmodel.component';
import { SearchComponent } from './search/search.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { DateselectorComponent } from './dateselector/dateselector.component';
import { AddUserComponent } from './crud/add-user/add-user.component';
import { ListUserComponent } from './crud/list-user/list-user.component';
import { EditUserComponent } from './crud/edit-user/edit-user.component';


const routes : Routes = [
    { path:'', redirectTo:'/home', pathMatch:'full'},
    { path:'pipe', component:PipesComponent},
    { 
        path: 'form',
        component: FormComponent,
        canActivate: [AuthGuard]
      },
    { path:'directive', component:DirectivesComponent },
    { path:'home', component:HomeComponent },
    { path:'about', component:AboutComponent },
    { path:'typescript', component:TypescriptComponent },
    { path:'json', component:JsonComponent },
    { path:'nestjson', component:NestedjsonComponent },
    { path:'login', component:LoginComponent },
    { path:'functions', component:FunctionsComponent },
    { path:'jsonmodel', component:JsonmodelComponent },
    { path:'search', component:SearchComponent },
    { path:'page', component:PaginatorComponent },
    { path:'date', component: DateselectorComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'list-user', component: ListUserComponent },
    { path: 'edit-user', component: EditUserComponent }
]

@NgModule({
    imports : [ RouterModule.forRoot( routes ) ] ,
    exports : [ RouterModule ]
})

export class AppRouter{ }