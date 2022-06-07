import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {BoardsComponent} from './components/main/boards/boards.component';
import {DialogOverviewComponent} from './components/dialog-overview/dialog-overview.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {CkEditorComponent} from "./components/ck-editor/ck-editor.component";
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import {MatLineModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    BoardsComponent,
    DialogOverviewComponent,
    CkEditorComponent,
    UploadFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatIconModule,
    ReactiveFormsModule,
    CKEditorModule,
    MatLineModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
