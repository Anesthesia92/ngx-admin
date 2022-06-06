import { DOCUMENT } from '@angular/common';
import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { fromEvent } from 'rxjs';
import { Store } from '@ngrx/store';
import { BoardsService } from 'src/app/services/boards.service';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import {DialogOverviewComponent} from "../dialog-overview/dialog-overview.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output() public title: EventEmitter<string> = new EventEmitter<string>();
  @Output() public color: EventEmitter<string> = new EventEmitter<string>();
  @Output() public attachments: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '500px',
      data: {title: this.title, color: this.color, attachments: this.attachments},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.title = result;
    });

    dialogRef.afterClosed().subscribe(result => {
      this.color = result;
    });
    dialogRef.afterClosed().subscribe(result => {
      this.color = result;
    });
  }

  ngOnInit(): void {
  }
}
