import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {DialogOverviewComponent} from "../dialog/dialog-overview.component";
import {BoardService} from "../../services/board-service.";

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

  constructor(public dialog: MatDialog, public boardService: BoardService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '700px',
      data: {color: this.color},
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.color = result;
    });
  }

  addColumn(event: string) {
    if (event) {
      this.boardService.addColumn(event)
    }
  }


}
