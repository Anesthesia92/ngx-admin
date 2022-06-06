import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {TableElement} from "../../models/table.model";

export const TABLE_DATA: TableElement[] = [
  {title: '', color: '', attachments: 1.0079},
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  ngOnInit() {}

  displayedColumns: string[] = ['title', 'color', 'attachments'];
  dataToDisplay = [...TABLE_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = 1;
    this.dataToDisplay = [...this.dataToDisplay, TABLE_DATA[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }

  editData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}

class ExampleDataSource extends DataSource<TableElement> {
  private _dataStream = new ReplaySubject<TableElement[]>();

  constructor(initialData: TableElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<TableElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: TableElement[]) {
    this._dataStream.next(data);
  }


}
