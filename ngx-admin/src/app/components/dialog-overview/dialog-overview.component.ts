import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ColorEvent} from "ngx-color";
import {DialogData} from "../../models/dialog.model";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {ChangeEvent} from "@ckeditor/ckeditor5-angular";
import {AbstractControl, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})

export class DialogOverviewComponent {

  @Output() emitColor: EventEmitter<string> = new EventEmitter();
  // colorsData = Object.values(colors);
  primaryColor: string | undefined

  public form: any;
  public notification = new FormControl('', Validators.required);
  public Editor = ClassicEditor;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  public onChange({editor}: ChangeEvent) {
    const title = editor.getData();
    console.log(title);
  }
  public close(): void {
    this.dialogRef.close();
  }

  @Output()
  public handleChange($event: ColorEvent) {
    this.primaryColor = $event.color.hex;
    console.log($event.color.hex)
    this.emitColor.emit(this.primaryColor);
  }

  submit() {

  }
}
