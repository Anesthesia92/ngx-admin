import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {DialogOverviewComponent} from "../dialog-overview/dialog-overview.component";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Output() public title: string | undefined;
  @Output() public color: string | undefined;
  @Output() public attachments: any;
  @Input() public primaryColor: string | undefined;
  @Output() emitText: EventEmitter<any> = new EventEmitter()

  public data = []

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '700px',
      data: {title: this.title, color: this.color, attachments: this.attachments},
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.emitText.emit(result);
    });
  }

}
