import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
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

   public onNoClick(): void {
    this.dialogRef.close();
  }

  handleChange($event: ColorEvent) {
    console.log($event.color);
    let color = {
      hex: '#333',
      rgb: {
        r: 51,
        g: 51,
        b: 51,
        a: 1,
      },
      hsl: {
        h: 0,
        s: 0,
        l: .20,
        a: 1,
      },
    }
  }
}

