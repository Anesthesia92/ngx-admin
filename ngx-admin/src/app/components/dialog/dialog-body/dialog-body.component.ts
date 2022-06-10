import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ChangeEvent} from "@ckeditor/ckeditor5-angular";
import {ColorEvent} from "ngx-color";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent {

  @Output() emitText: EventEmitter<any> = new EventEmitter();
  public Editor = ClassicEditor;

  constructor(
    public dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public onChange({editor}: ChangeEvent) {
    const title = editor.getData();
    console.log(title);
  }

  public close(): void {
    this.dialogRef.close();
  }

}
