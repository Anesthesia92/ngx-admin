import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {ChangeEvent} from "@ckeditor/ckeditor5-angular";

@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.scss']
})
export class CkEditorComponent {

  public Editor = ClassicEditor;

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();
    console.log( data );
  }

}
