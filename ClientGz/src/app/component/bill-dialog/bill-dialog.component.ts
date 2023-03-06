import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { Inject, Optional } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Bill} from '../../model/bill';

@Component({
  selector: 'app-bill-dialog',
  templateUrl: './bill-dialog.component.html',
  styleUrls: ['./bill-dialog.component.css']
})
export class BillDialogComponent implements OnInit {

  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<BillDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Bill
  ) {
    this.local_data = {...data};
   }

  ngOnInit(): void {
  }

}
