import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {MatLineModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";
import {ColorSketchModule} from 'ngx-color/sketch';
import {MatSelectModule} from "@angular/material/select";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { DialogBodyComponent } from './components/dialog/dialog-body/dialog-body.component';
import {HeaderComponent} from "./components/header/header.component";
import {DialogOverviewComponent} from "./components/dialog/dialog-overview.component";
import { MainItemComponent } from './components/main/main-item/main-item.component';
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {FilesItemComponent } from './components/files-item/files-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    DialogBodyComponent,
    DialogOverviewComponent,
    MainItemComponent,
    FilesItemComponent,
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
        ColorSketchModule,
        MatSelectModule,
        DragDropModule,
        MatCardModule,
        MatExpansionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
