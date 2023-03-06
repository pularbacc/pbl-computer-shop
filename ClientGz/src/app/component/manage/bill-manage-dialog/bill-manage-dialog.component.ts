import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { Inject, Optional } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Bill} from '../../../model/bill';

@Component({
  selector: 'app-bill-manage-dialog',
  templateUrl: './bill-manage-dialog.component.html',
  styleUrls: ['./bill-manage-dialog.component.css']
})
export class BillManageDialogComponent implements OnInit {

  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<BillManageDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Bill
  ) {
    this.local_data = {...data};
   }

  ngOnInit(): void {
  }

  save(){
    this.dialogRef.close(this.local_data);
  }

}
