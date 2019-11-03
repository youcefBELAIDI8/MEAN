import { IssueService } from './issue.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

const routes : Routes = [
  { path : 'create',component :CreateComponent },
  { path : 'edit/:id',component :EditComponent },
  { path : 'list',component :ListComponent },
  { path : '', redirectTo : 'list',pathMatch:'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
