import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ImageComponent } from './components/image/image.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageService } from './image.service';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes:Routes=[
  {path:'image',component:ImageComponent},
  {path:'list',component:ListComponent},
  {path:'file',component:FileManagerComponent},
  {path:'',redirectTo:'list',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ImageComponent,
    FileSelectDirective,
    FileManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
