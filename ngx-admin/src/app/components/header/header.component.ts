import { DOCUMENT } from '@angular/common';
import {Component, Inject, OnInit, Output} from '@angular/core';
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

  @Output() animal: string | undefined;
  name: string | undefined;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

  ngOnInit(): void {
  }
}
