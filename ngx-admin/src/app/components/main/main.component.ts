import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatTable} from "@angular/material/table";
import {Board} from "../../models/board.model";
import {BoardService} from "../../services/board-service.";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {

  commentInput = '';
  @Input() item: any;
  @Output() emitText: EventEmitter<{ title: string}> = new EventEmitter();
  @ViewChild(MatTable) table!: MatTable<Board>;
  displayedColumns: string[] = ['title', 'color', 'attachments', 'buttons'];

  constructor(public dialog: MatDialog, public boardService: BoardService) {}

  onAddBoard(title: string, color: string, attachments: any) {
    if(title) {
      this.boardService.addBoard(title, color, attachments)
    }
  }

  onCommentTextEmit(title: string) {
    this.emitText.emit({ title: this.commentInput });
    this.commentInput = ''
  }

}
