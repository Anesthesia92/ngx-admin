import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../models/board.model";
import {ColorEvent} from "ngx-color";

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})

export class DialogOverviewComponent {

  constructor(
  public dialogRef: MatDialogRef<DialogOverviewComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData,
) {}

  @Output() primaryColor = '#5c359f';
  @Input() public isDefaultColor = true;

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public writeValue(val: string): void {
    if (val !== this.primaryColor) {
      this.primaryColor = val;
    }
  }

  public handleChange($event: ColorEvent) {
    this.primaryColor = $event.color.hex;
    console.log($event.color)
  }

}

