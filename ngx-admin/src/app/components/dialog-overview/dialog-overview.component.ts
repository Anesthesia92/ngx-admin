import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../models/board.model";

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})
export class DialogOverviewComponent implements OnInit {

  constructor(
  public dialogRef: MatDialogRef<DialogOverviewComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData,
) {}

  ngOnInit(): void {
  }

   public onNoClick(): void {
    this.dialogRef.close();
  }

  editData($event: any) {

  }
  // openBottomSheet(): void {
  //   this._bottomSheet.open(UploadFilesComponent);
  // }
}

