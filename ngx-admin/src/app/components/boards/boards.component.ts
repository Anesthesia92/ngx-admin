import {Component, Inject, Input, OnInit} from '@angular/core';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  ngOnInit(): void {
  }

}

