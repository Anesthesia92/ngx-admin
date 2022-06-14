import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-files-item',
  templateUrl: './files-item.component.html',
  styleUrls: ['./files-item.component.scss']
})
export class FilesItemComponent {

  @Input() comment: any;
  @Output() emitComment: EventEmitter<any> = new EventEmitter();

  onCommentEmit(comment: Comment) {
    this.emitComment.emit(comment);
    console.log(this.comment)
  }

}
