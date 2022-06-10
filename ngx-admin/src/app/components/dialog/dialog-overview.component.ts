import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogBodyComponent} from "./dialog-body/dialog-body.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})

export class DialogOverviewComponent {

  @Output() emitText: EventEmitter<any> = new EventEmitter()
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBodyComponent, {
      width: '700px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.emitText.emit(result);
    });
  }

}
