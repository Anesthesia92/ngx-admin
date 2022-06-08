import {Component, Input, Output, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {DialogData} from "../../models/board.model";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TableElement} from "../../models/table.model";
import {MatTable} from "@angular/material/table";

const ELEMENT_DATA: TableElement [] = [
  {title: 'Hydrogen', color: 1.0079, attachments: 'H',
  }
]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {

  constructor(public dialog: MatDialog) {}

  @Input() public title: string | undefined;
  @Input() public color: string | undefined;
  @Input() public attachments: any;
  @ViewChild(MatTable) table!: MatTable<TableElement>;

  displayedColumns: string[] = ['title', 'color', 'attachments'];

  dataSource = [...ELEMENT_DATA];

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

}
