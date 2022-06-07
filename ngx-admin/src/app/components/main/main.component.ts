import {Component, Input,  Output} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {DialogData} from "../../models/board.model";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {

  public dataArr: DialogData [] = [];
  @Input() public title: string | undefined;
  @Input() public color: string | undefined;
  @Input() public attachments: any;
  @Output() displayedColumns: string[] = ['title', 'color', 'attachments'];
  @Output() dataToDisplay = [...this.dataArr];
  @Output() dataSource = new ExampleDataSource(this.dataToDisplay);

  constructor(public dialog: MatDialog) {}

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }

  editData() {
    const elementIndex = 1;
    this.dataToDisplay = [...this.dataToDisplay, (this.dataArr)[elementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }
}

class ExampleDataSource extends DataSource<DialogData>  {
  private _dataStream = new ReplaySubject<DialogData []>();

  constructor(initialData: DialogData[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<DialogData[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: DialogData[]) {
    this._dataStream.next(data);
  }




}
