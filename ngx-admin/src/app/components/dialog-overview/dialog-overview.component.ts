import {Component, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../boards/boards.component";

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

}

