import { DOCUMENT } from '@angular/common';
import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import { fromEvent } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import {DialogOverviewComponent} from "../dialog-overview/dialog-overview.component";
import {MatBottomSheet, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {ColorEvent} from "ngx-color";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Output() public title: string | undefined;
  @Output() public color: string | undefined;
  @Output() public attachments: any;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '700px',
      data: {title: this.title, color: this.color, attachments: this.attachments},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.title = result;
    });

    dialogRef.afterClosed().subscribe(color => {
      this.color = color;
    });

    dialogRef.afterClosed().subscribe(attachments => {
      this.attachments = attachments;
    });
  }

}
