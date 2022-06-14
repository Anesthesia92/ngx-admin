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

  @Output() emitText: EventEmitter<any> = new EventEmitter()

  constructor(public dialog: MatDialog, public boardService: BoardService) {}

  addColumn(event: string) {
      this.boardService.addColumn(event);
  }
}
