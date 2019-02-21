import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { FormComponent } from './form/form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { AppRouter } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { JsonComponent } from './json/json.component';
import { HttpClientModule } from '@angular/common/http';
import { NestedjsonComponent } from './nestedjson/nestedjson.component';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { 
  AuthGuardService as AuthGuard 
} from './authguard.service';
import { AuthService } from './auth.service';
import { FunctionsComponent } from './functions/functions.component';
import {CheckboxModule} from 'primeng/checkbox';
import { JsonmodelComponent } from './jsonmodel/jsonmodel.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DataTableModule} from 'primeng/datatable';
import {FieldsetModule} from 'primeng/fieldset';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShowHideInputDirective } from './show-hide-input.directive';

import {DialogModule} from 'primeng/dialog';
import { QueryComponent } from './query/query.component';
import { SearchComponent } from './search/search.component';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { GrdFilterPipe } from '../grd-filter.pipe';;
import { PaginatorComponent } from './paginator/paginator.component';
import {CalendarModule} from 'primeng/calendar';
import { DateselectorComponent } from './dateselector/dateselector.component';
import { ListUserComponent } from './crud/list-user/list-user.component';
import { AddUserComponent } from './crud/add-user/add-user.component';
import { EditUserComponent } from './crud/edit-user/edit-user.component';
import {UserService} from "./crud/user.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,MatIconModule,MatMenuModule,RouterModule,HttpClientModule,ReactiveFormsModule,CheckboxModule,InputTextModule,ButtonModule,RadioButtonModule,
    FieldsetModule,BrowserAnimationsModule,DialogModule,DropdownModule,TableModule,PaginatorModule,DataTableModule,CalendarModule,
    MatDialogModule,NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    FormComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DirectivesComponent,
    PipesComponent,
    HomeComponent,
    AboutComponent,
    TypescriptComponent,
    JsonComponent,
    NestedjsonComponent,
    LoginComponent,
    FunctionsComponent,
    JsonmodelComponent,
    ShowHideInputDirective,
    QueryComponent,
    SearchComponent,
    GrdFilterPipe,
    PaginatorComponent,
    DateselectorComponent,EditUserComponent,ListUserComponent, AddUserComponent

  ],
  exports: [
    RouterModule,AppRouter
  ],
  providers: [ NgbActiveModal,AuthService,AuthGuard,UserService],
  bootstrap: [ AppComponent ],
  entryComponents: [
    LoginComponent
  ]
})
export class AppModule { }
